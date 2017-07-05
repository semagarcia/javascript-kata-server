import { Passport } from 'passport';
const GitHubStrategy = require('passport-github2').Strategy;
import { User, UserModel } from './../schemas/User';
import { UsersService } from './../users/UserService';
const config = require('./../config');

export function initGitHubtrategy(passport: Passport) {
    const userSrv: UsersService = new UsersService();
    passport.use(
        new GitHubStrategy({
            clientID: config.github.clientID,
            clientSecret: config.github.clientSecret,
            callbackURL: config.github.callbackURL
        }, async (accessToken, refreshToken, profile, done) => {            
            await userSrv.findOrCreateUserByGitHub(profile)
                .then((user) => done(null, user))
                .catch((err) => done(err, null))
        })
    );

};
