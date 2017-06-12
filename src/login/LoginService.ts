const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const config = require('./../config');

import { User, UserModel } from './../schemas/User';

export class LoginService {

    async standardLogin(username: string, password: string) {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ username: username, enabled: true }, (err, user: User) => {
                if(err || !user) reject(`Error at login: ${err}`);
                console.log('Checking user: ', user);
                bcrypt.compare(password, user.password)
                    .then((samePasswords) => {
                        if(samePasswords) {
                            resolve({ 
                                name: user.name,
                                username: user.username,
                                rol: user.rol,
                                token: jwt.sign({ 
                                    sub: user._id,  // Identifies token
                                    iat: moment().unix(),  // Token creation data,
                                    exp: moment().add(60, 'minutes').unix(),  // Expires in 60 minutes
                                    name: user.username,
                                    rol: user.rol
                                }, config.secretJWT)
                            });
                        } else {
                            reject(false);
                        }
                    })
                    .catch((err) => {
                        console.log(`Mismatch error: ${err}`);
                        reject(err);
                    });
            });
        });
    }

}