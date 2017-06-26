import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as http from 'http';
import * as socketIO from 'socket.io';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as passport from 'passport/lib';
import * as expressSession from 'express-session';

// Route controllers
import { ChallengesController } from './challenges/ChallengeController';
import { EventsController } from './events/EventController';
import { IndividualController } from './individual/IndividualController';
import { KatasController } from './katas/KatasController';
import { LoginController } from './login/LoginController';
import { RankingController } from './ranking/RankingController';
import { TrainingPathController } from './training/TrainingController';
import { UserController } from './users/UserController';
import { EmailController } from './emails/EmailController';

// Services
import { ChallengeService } from './challenges/ChallengeService';
const challengeSrv = new ChallengeService();

const config = require('./config');
const PORT = config.port;

export default class Server {
    private io: any;
    public app: any;
    private server: any;
    private port: number;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.createApp();
        this.connectToDatabase();
        this.createServer();
        this.middleware();
        this.routes();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private connectToDatabase(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(config.db);
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private middleware(): void {
        this.app.use(logger('dev'));
        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(expressSession({ secret : 'averylongstringtouseaspassword' }));

        //cors settings
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
            next();
        });
        this.app.use(cors());
    }

    private routes(): void {
        this.app.use('/api/status', (req, res, next) => { res.status(200).send('OK') });
        this.app.use('/api/challenges', ChallengesController);
        this.app.use('/api/events', EventsController);
        this.app.use('/api/individual', IndividualController);
        this.app.use('/api/katas', KatasController);
        this.app.use('/api/login', LoginController);
        this.app.use('/api/ranking', RankingController);
        this.app.use('/api/training-paths', TrainingPathController);
        this.app.use('/api/users', UserController);
        this.app.use('/api/email', EmailController);
        
        // Index.html
        this.app.get('/', (req, res) => { res.sendfile(path.resolve('public/index.html')) });

        // JS and CSS files
        this.app.get('/:file', (req, res) => {
            res.sendfile(path.resolve('public/' + req.params.file));
        });

        // Images and fonts
        this.app.get('/assets/images/:staticFile', (req, res) => { res.sendfile(path.resolve('public/assets/images/' + req.params.staticFile)) });
        this.app.get('/assets/fonts/noto/:staticFile', (req, res) => { res.sendfile(path.resolve('public/assets/fonts/noto/' + req.params.staticFile)) });
        this.app.get('/assets/fonts/roboto/:staticFile', (req, res) => { res.sendfile(path.resolve('public/assets/fonts/roboto/' + req.params.staticFile)) });
        //this.app.use(express.static(path.join(__dirname, 'public')));
        //this.app.use('/assets/images', express.static(path.join(__dirname, 'public/assets/images')));
    }

    private sockets(): void {
        this.io = socketIO(this.server);
        this.io.on('connection', (socket: SocketIO.Socket) => {
            socket.on('challenge', (message) => {

                if(message && message.event === 'joinToChallenge') {
                    socket.join(message.challengeId);
                } else if(message && message.event === 'playerReady') {
                    socket.join(message.challengeId);
                    socket.to(message.challengeId).emit('challenge', {
                        event: 'playerReady',
                        playerId: socket.id,
                        who: message.playerName
                    });

                    // Check if the challenge is ready to start it
                    challengeSrv.checkIfChallengeIsReadyToStart(message.challengeId)
                        .then((challengeStatus) => {
                            if(challengeStatus && challengeStatus === 'READY') {
                                this.io.in(message.challengeId).emit('challenge', {
                                    challengeId: message.challengeId,
                                    event: 'startedChallenge',
                                    status: 'READY'
                                });
                            } else {
                                socket.to(message.challengeId).emit('challenge', {
                                    msg: 'player joined, waiting the other one'
                                });
                            }
                        })  
                        .catch(() => socket.broadcast.to(message.challengeId).emit('challenge', { 
                            err: 'Challenge not allowed' 
                        }));
                } else if(message && message.event === 'codeUpdated') {
                    socket.to(message.challengeId).emit('challenge', {
                        challengeId: message.challengeId,
                        code: message.code,
                        event: 'codeUpdated',
                        playerId: socket.id,
                        who: message.who
                    });
                } else if(message && message.event === 'challengeProgress') {
                    message.time = null;
                    message.attemps = null;
                    message.playerId = socket.id;
                    this.io.in(message.challengeId).emit('challenge', message);
                }
            });

            /*socket.on('disconnect', () => {
                console.log('Client disconnected');
            });*/
        });
    }

    private listen(): void {
        this.server.listen(PORT, () => {
            console.log('Running server on port %s', PORT);
        });
    }
}

// Start it!
Server.bootstrap().app;