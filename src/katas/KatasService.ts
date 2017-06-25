import { Kata, KataModel } from './../schemas/Kata';
import { KataStats, KataStatsModel } from './../schemas/Statistics';

let log;
const { NodeVM } = require('vm2');
const vm = new NodeVM({
    timeout: 4000,
    sandbox: {
        deepEqual: require('assert').deepEqual,
        console: {
            log: (...args) => {
                if(args && args.length === 1) {
                    // The console.log() call is composed by only one argument (no need separator)
                    log += JSON.stringify(args[0]).slice(1, -1);
                } else if(args && args.length > 1) {
                    // Pass over each argument
                    log += '#';  // Specific separator for each console.log() argument
                    args.forEach(arg => log += JSON.stringify(arg).replace(/"/g, '').concat(' '));
                }
            }
        }
    }
});

export class KatasService {

    /**
     * Endpoint to return all the katas
     */
    async getAllKatas() {
        return new Promise((resolve, reject) => {
            KataModel.find({ enabled: true }).exec((err, katas) => {
                if(err) reject(err);
                resolve(katas);
            });
        });
    }

    /**
     * Endpoint to retrieve a kata
     */
    async getKataById(kataId: string) {
        return new Promise((resolve, reject) => {
            KataModel.findById({ _id: kataId, enabled: true }, { tests: 0 }).exec((err, kata) => {
                if(err) reject(err);
                resolve(kata);
            });
        });
    }

    /**
     * Endpoint to return all stats of the katas
     */
    async getAllKatasStatistics() {
        return new Promise((resolve, reject) => {
            KataStatsModel.find(
                { event: 'JSDayES2017' }, 
                { username: 1, totalTime: 1, stats: 1, _id: 0 }
            ).exec((err, stats) => {
                if(err) reject(err);

                let groupStats = [];
                stats.forEach((stat) => {
                    groupStats.push({
                        username: stat.username,
                        totalTime: stat.totalTime,
                        numOfKatas: stat.stats.length,
                        numOfAttemps: stat.stats.reduce((total, current) => { return total + current.attemps; }, 0),
                        passed: stat.stats.filter((statResult) => { return statResult.status }).length,
                        failed: stat.stats.filter((statResult) => { return !statResult.status }).length
                    });
                });
                resolve(groupStats);
            });
        });
    }

    /**
     * Endpoint to execute the tests of a kata
     */
    async executeTest(kataFunction: string, kataName: string) {
        return new Promise(async(resolve, reject) => {       
            log = '';
            KataModel.findOne({ name: kataName, enabled: true }, 'tests', (err, kata: Kata) => {
                if(err) reject(err);

                var tests = JSON.parse(JSON.stringify(kata.tests));
                for(let test of tests) {
                    log = '';
                    try {
                        vm.run(`${kataFunction} deepEqual(${kataName}(${test.input}), ${test.output})`);
                        test['result'] = true;
                        delete test['message'];
                    } catch(err) {
                        test['result'] = false;
                        test['message'] = err.toString();
                        console.log('ERR: ', err);
                    }
                    test['log'] = log;
                }

                // Analyse and compute the result 
                resolve({
                    executionResult: tests.every(test => test['result']),
                    output: tests
                });
            });
        });
    }

    /**
     * Endpoint to 
     */
    async updateKataStatistics(statistics: any, username: string) {
        return new Promise((resolve, reject) => {
            KataStatsModel.findOne({ username: username })
            .then((stats: KataStats) => {
                if(stats) {
                    let found = false;
                    // Search if there is another previous try
                    stats.stats.forEach((kata) => {
                        if(kata.kata === statistics.kata) {
                            kata.time = statistics.time;
                            kata.attemps = statistics.attemps;
                            kata.status = statistics.status;
                            found = true;
                        }
                    });

                    // kata not found (not made yet); add it
                    if(!found) {
                        stats.stats.push({
                            kata: statistics.kata,
                            status: statistics.status,
                            attemps: statistics.attemps,
                            time: statistics.time
                        });
                    }

                    // Update total time and save
                    stats.totalTime += statistics.time;
                    /*stats.save((err, savedStats) => {
                        if(err) reject(err);
                        resolve(true);
                    });*/
                } else {
                    // The user has never made an attemp
                    KataStatsModel.create({
                        username: username,
                        email: 'em@ail.com',
                        event: 'JSDayES2017',
                        stats: [{
                            kata: statistics.kata,
                            status: statistics.status,
                            attemps: statistics.attemps,
                            time: statistics.time
                        }],
                        totalTime: statistics.time
                    });
                    resolve(true);
                }
            })
            .catch((err) => reject(err))
        });
    }

}