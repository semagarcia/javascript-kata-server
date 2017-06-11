import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as socketIO from 'socket.io';
import * as cors from 'cors';
//const mongoose = require('mongoose');
import * as mongoose from 'mongoose';
import * as passport from 'passport/lib';
import * as expressSession from 'express-session';

// Route controllers
import { TestRoutesController } from './routes/TestController';
import { AuthRoutesController } from './routes/AuthController';
import { LoginRoutesController } from './routes/LoginController';

import { ChallengesController } from './challenges/ChallengeController';
import { EventsController } from './events/EventController';
import { IndividualController } from './individual/IndividualController';
import { KatasController } from './katas/KatasController';
import { RankingController } from './ranking/RankingController';
import { TrainingPathController } from './training/TrainingController';
import { UserController } from './users/UserController';

// Creates and configures an ExpressJS web server.
class App {
    //eventsController: EventsController = new EventsController();

    // Express app instance
    public express: express.Application;
    public io: SocketIO.Server;

    // Run configuration methods on the Express instance.
    constructor() {
        this.connectToDatabase();
        this.express = express();
        this.middleware();
        this.routes();

        //this.eventsController = new EventsController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(cors());
        this.express.use(logger('dev'));
        this.express.use(cookieParser());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(expressSession({ secret : 'averylongstringtouseaspassword' }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
        * working so far. This function will change when we start to add more
        * API endpoints */
        let router = express.Router();

        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'OK'
            });
        });

        // routes
        this.express.use('/', router);  // Root route
        this.express.use('/api/challenges', ChallengesController);
        this.express.use('/api/events', EventsController);
        this.express.use('/api/individual', IndividualController);
        this.express.use('/api/katas', KatasController);
        this.express.use('/api/ranking', RankingController);
        this.express.use('/api/training-paths', TrainingPathController);
        this.express.use('/api/users', UserController);
    }

    private connectToDatabase(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost:27017/kata-player');
    }

}

export default new App().express;