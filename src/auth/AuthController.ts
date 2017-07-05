import { Router, Request, Response } from 'express';
const passport = require('passport');

import { AuthUtil } from './AuthUtil';

// Dependencies
//const adminSrv: AdministrationService = new AdministrationService();

// Assign router to the express.Router() instance
const authRouter: Router = Router();


authRouter.get('/github', 
    passport.authenticate('github', { scope: [ 'user:email' ] }), (req, res) => {
        // The request will be now redirect to GitHub for auth process, so, this
        // method will not be called.
    }
);

authRouter.get('/github/callback', 
    passport.authenticate('github', {
        failureRedirect: '/#/login;token=failure'
    }),
    async (req, res) => {
        // Get the user info and generate the token
        console.log('[GITHUB AUTH] req.user: ', req['user']);
        await AuthUtil.generateJwtToken({
            _id: req['user']._id,
            name: req['user'].name,
            username: req['user'].username,
            role: req['user'].role
        })
        .then(jwtToken => res.redirect(`/#/login;token=${jwtToken}`))
        .catch(err => {
            console.log('[GITHUB AUTH] Error generating JWT Token after a successful GH Auth: ', err);
            //res.status(500).json({ error: 'ER-AU-GH100', message: 'Error from GitHub authorization' });
            res.redirect('/#/login;error=ER-AU-GH100');
        });
    }
);

// Export the express.Router() instance
export const AuthController: Router = authRouter;