import { Router, Request, Response } from 'express';
import { UsersService } from './UserService';
import { User, UserModel } from './../schemas/User';

const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('./../config');

// Dependencies
const usersSrv: UsersService = new UsersService();

// Assign router to the express.Router() instance
const userRouter: Router = Router();

/**
 * Method:
 * Verb:
 * Route: 
 */
userRouter.get('/', async(req: Request, res: Response) => {
    await usersSrv.getAllUsers()
        .then((users) => res.send(users))
        .catch((err) => res.status(400).send('KO')); 
});

/**
 * Method:
 * Verb:
 * Route: 
 */
userRouter.get('/user', async(req: Request, res: Response) => {
    let token = req.headers.authorization.split(' ')[1];
    let jwtInfo = jwt.verify(token, config.secretJWT);
    await usersSrv.getUserInfoById(jwtInfo.sub)
        .then((user) => res.send(user))
        .catch((err) => res.status(400).send('KO'));
});

/**
 * Method:
 * Verb:
 * Route: 
 */
userRouter.post('/', async(req: Request, res: Response) => {
    await usersSrv.createUser({
        name: req.body.name,
        username: req.body.username, 
        password: req.body.password,
        email: req.body.email,
        rol: req.body.rol
    })
        .then((user) => { res.status(200).send(user); })
        .catch((err) => { res.status(400).send(err); });
});

/**
 * Method:
 * Verb:
 * Route: 
 */
userRouter.put('/', async(req: Request, res: Response) => {});

/**
 * Method:
 * Verb:
 * Route: 
 */
userRouter.post('/:userId/delete', async(req: Request, res: Response) => {});

// Export the express.Router() instance
export const UserController: Router = userRouter;