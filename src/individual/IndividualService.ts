import { Kata, KataModel } from './../schemas/Kata';

export class IndividualService {

    getRandomIndividualKata(): Promise<Kata> {
        return new Promise((resolve, reject) => {
            KataModel.count({ enabled: true }, (err, count) => {
                let random = Math.floor(Math.random() * count);
                KataModel.findOne({ enabled: true }).skip(random).exec((err, randomKata: Kata) => {
                    if(err) reject(`Error RandomKata: ${err}`);
                    resolve(randomKata);
                });
            });
        });
    }

}