const jwt = require('jsonwebtoken');
const config = require('./../config');
import { User, UserModel } from './../schemas/User';

export class AuthUtil {

    /**
     * Method to generate a JWT token based on the payload with a configurable expiration time
     * @param jwtPayload The data to be encrypted and signed into the JWT token
     * @returns token A promise containing the token
     */
    static async generateJwtToken(jwtPayload): Promise<String> {
        let token = jwt.sign(jwtPayload, config.secretJWT, { expiresIn: config.jwtExpiration });
        return Promise.resolve(token);
    }

    /**
     * Verifies the JWT token passed as argument. In case of error, the promise will be rejected 
     * containing the error message
     * @param jwtToken Token to be verified
     * @returns A promise
     */
    static async verifyJwtToken(jwtToken): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(jwtToken, config.secretJWT, (err, decodedToken) => {
                if(err || !decodedToken) reject(err);
                resolve(decodedToken);
            });
        });
    }

    /**
     * Methd to validate a payload userId, recovering it from a valid and fast datasource. In
     * that case, the validation will check against the database the userId. It can be
     * parameterized to look for in a redis store or similar.
     * @param userId The objectId of the user
     * @returns A promise
     */
    static async validatePayloadId(userId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            UserModel.findById({ _id: userId, enabled: true }, { 
                _id: 1, name: 1, username: 1, role: 1 
            }, (err, user: User) => {
                if(err) reject(err);
                resolve(user);
            });
        });
    }

}