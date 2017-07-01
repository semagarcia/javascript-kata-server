import { Passport } from 'passport';
const LocalStrategy = require('passport-local').Strategy;

import { LoginService } from './LoginService';
import { User, UserModel } from './../schemas/User';

/**
 * 
 * @param passport 
 */
export function initLocalStrategy(passport: Passport) {

    /**
     * 
     */
    passport.use('local', new LocalStrategy({
        usernameField: 'user',
        passwordField: 'password',
        passReqToCallback: true
    }, (req: Request, username: string, password: string, next: Function) => {
        UserModel.findOne({ username: username, enabled: true }, async (err, user: User) => {
            console.log('LoginLocalStrategy');
            if(err || !user) return next(err, `Error at login: ${err}`);
            await LoginService.standardLogin(username, password)
                .then(loggedUser => next(null, loggedUser))
                .catch(loginError => next(loginError, null));
        });
    }));

}