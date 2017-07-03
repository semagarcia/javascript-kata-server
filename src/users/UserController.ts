import { Router, Request, Response } from 'express';
import { UsersService } from './UserService';
import { User, UserModel } from './../schemas/User';
import { AuthPolicies } from './../auth/AuthPolicies';
import { AdministrationService } from './../administration/AdministrationService';
const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('./../config');

// Dependencies
const usersSrv: UsersService = new UsersService();

// Assign router to the express.Router() instance
const userRouter: Router = Router();

/**
 * Method: return all the enabled users registered into the database
 * Verb: GET
 * Route: /api/users
 * Access constraints: logged users, admin users
 */
userRouter.get('/', [
        passport.authenticate('jwt'),
        AuthPolicies.requiresLogin,
        AuthPolicies.requiresRole(AuthPolicies.ROLES.ADMIN)
    ], async(req: Request, res: Response) => {
    await usersSrv.getAllUsers()
        .then((users) => res.send(users))
        .catch((err) => res.status(400).send('KO')); 
});

/**
 * Method: Return the user session
 * Verb: GET
 * Route: /api/users/session
 * Access constraints: logged user
 */
userRouter.get('/session', [
    passport.authenticate('jwt'), 
    AuthPolicies.requiresLogin
], async(req, res: Response) => {
    res.json(req.user)
});

/**
 * Method: Creates a new user
 * Verb: POST
 * Route: /api/users
 * Access constraints: 
 */
userRouter.post('/', async (req: Request, res: Response) => {
    await AdministrationService.getEnabledConfiguration('userCreation')
        .then(async (userCreationFlag) => {
            if(userCreationFlag) {  // Enabled
                await usersSrv.createUser({
                    name: req.body.name,
                    username: req.body.username, 
                    password: req.body.password,
                    email: req.body.email,
                    role: req.body.role || AuthPolicies.ROLES.USER
                })
                    .then((user) => { res.status(200).send(user); })
                    .catch((err) => { res.status(400).send(err); });
            } else {  // Disabled
                res.status(400).json({ error: 'ER-U-100', message: 'Users creation disabled temporarely' });
            }
        }) 
        .catch((err) => res.status(400).json({ error: 'ER-U-101', message: err }));
});

/**
 * Method: Update an user
 * Verb: PUT
 * Route: /api/users/:userId/
 * Access constraints: 
 */
userRouter.put('/:userId', async (req: Request, res: Response) => {});

/**
 * Method: Delete a user
 * Verb: DELETE
 * Route: /api/users/:userId
 * Access constraints: logged user, admin role
 */
userRouter.delete('/:userId', [
    passport.authenticate('jwt'),
    AuthPolicies.requiresLogin,
    AuthPolicies.requiresRole(AuthPolicies.ROLES.ADMIN)
], async (req: Request, res: Response) => {
    // ToDo
});

// Export the express.Router() instance
export const UserController: Router = userRouter;