import { Router, Request, Response } from 'express';
import { AuthUtil } from './../auth/AuthUtil';
import { AuthPolicies } from './../auth/AuthPolicies';
import { LoginService } from './LoginService';
import { User } from './../schemas/User';
const passport = require('passport');

// Dependencies
const loginSrv: LoginService = new LoginService();

// Assign router to the express.Router() instance
const loginRouter: Router = Router();

/**
 * Method: Standard login
 * Verb: POST
 * Route: /api/login
 */
loginRouter.post('/', passport.authenticate('local', {
    failureRedirect: '/login?error=failure',
}), async(req, res: Response) => {
    // req.user is the result of done() call in passport.use strategy callback
    let loggedUser: User = req['user'];
    await AuthUtil.generateJwtToken(loggedUser)
        .then(jwtToken => {
            loggedUser['token'] = jwtToken;
            // res.set('Authorization', `JWT ${loggedUser.token}`);
            res.json(loggedUser);
        })
        .catch(err => res.status(500).json({ error: 'ER-L-100', message: 'Error login' }));
});

/**
 * Method: Logout and delete the user session
 * Verb: DELETE
 * Route: /api/login
 */
loginRouter.delete('/', async(req, res: Response) => {
    req['logout']();
    res.status(200).send();
});

// Export the express.Router() instance
export const LoginController: Router = loginRouter;
