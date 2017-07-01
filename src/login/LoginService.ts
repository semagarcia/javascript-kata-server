import { User, UserModel } from './../schemas/User';
const bcrypt = require('bcryptjs');

export class LoginService {

    /**
     * 
     * @param username 
     * @param password 
     */
    static async standardLogin(username: string, password: string) {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ username: username, enabled: true }, (err, user: User) => {
                if(err) reject(`Error at login: ${err}`);
                if(!user) {
                    console.log(`Unexisting user: ${username}`);
                    reject('Error at login');
                }
                
                // Password comparison
                bcrypt.compare(password, user.password)
                    .then((samePasswords) => {
                        if(samePasswords) {
                            resolve({
                                _id: user._id,
                                name: user.name,
                                username: user.username,
                                role: user.role
                            });
                        } else {
                            reject(err);
                        }
                    })
                    .catch((err) => {
                        console.log(`Mismatch error: ${err}`);
                        reject(err);
                    }
                );
            });
        });
    }

}
