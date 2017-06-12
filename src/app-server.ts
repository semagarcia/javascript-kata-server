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
    }

    private sockets(): void {
        this.io = socketIO(this.server);
    }

    private listen(): void {
        this.server.listen(PORT, () => {
            console.log('Running server on port %s', PORT);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', PORT);
            /*socket.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });*/
        });
    }
}

//export = Server.bootstrap().app;
Server.bootstrap().app;