import { Passport } from 'passport';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./../config');
import { AuthUtil } from './../auth/AuthUtil';

export function initJWTStrategy(passport: Passport) {

    passport.use(
        new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeader(),
            secretOrKey: config.secretJWT,
            passReqToCallback: true
        }, async (req, jwtPayload, next: Function) => {
            /**
             * If the user is not logged, this middleware will not check this. The purpose of
             * the MDW is to check the JWT Token on the header "Authorization". After a valid
             * verification of the token, the session will be populated with the basic info
             * associated with the user.
             */
            await AuthUtil.validatePayloadId(jwtPayload._id)
                .then((result) => {
                    next(null, result);
                })
                .catch((err) => {
                    next({ error: 'Invalid authentication' }, null);
                });
        })
    );

};