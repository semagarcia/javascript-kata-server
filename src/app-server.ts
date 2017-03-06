import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as socketIO from 'socket.io';
import * as cors from 'cors';
import * as passport from 'passport/lib';
import * as expressSession from 'express-session';

// Route controllers
import { TestRoutesController } from './routes/TestController';
import { AuthRoutesController } from './routes/AuthController';
import { LoginRoutesController } from './routes/LoginController';

// Creates and configures an ExpressJS web server.
class App {

    // Express app instance
    public express: express.Application;
    public io: SocketIO.Server;

    // Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
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
        this.express.use('/test', TestRoutesController);  // Test routes
        this.express.use('/standard-login', LoginRoutesController);  // Login routes
        this.express.use('/auth', AuthRoutesController);  // Auth routes
    }

}

export default new App().express;