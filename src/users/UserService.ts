import { User, UserModel } from './../schemas/User';

const bcrypt = require('bcryptjs');
const config = require('./../config');
const BCRYPT_SALT_ROUNDS = 12;

export class UsersService {

    /**
     * Get all enabled/valid users registered (except their password field)
     * @returns A promise with the user array or with the error
     */
    async getAllUsers() {
        return new Promise((resolve, reject) => {
            UserModel.find({ enabled: true }, { password: 0 }, (err, users: Array<User>) => {
                if(err) reject(err);
                resolve(users);
            });
        });
    }

    /**
     * Get all the info (except the password field) for an specific user identified by its userId
     * @param userId The objectId (mongo ID) of the user
     * @returns A promise with the user or with the error
     */
    async getUserInfoById(userId: string) {
        return new Promise((resolve, reject) => {
            UserModel.findById({ _id: userId }, { password: 0 }, (err, user: User) => {
                if(err) reject(err);
                resolve(user);
            });
        });
    }

    /**
     * Method to create a user and register it into the application. By default, the user will be enabled
     * @param userData The set of fields which represents an user. This is a json object that will be
     * stored into the database with some automatic fields (create at, update at, enabled)
     * @returns Promise with the result: true if the process was successful, error otherwise
     */
    async createUser(userData) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(userData.password, BCRYPT_SALT_ROUNDS)
                .then((hashedPwd) => {
                    return UserModel.create({
                        name: userData.name,
                        username: userData.username,
                        password: hashedPwd,
                        email: userData.email,
                        role: userData.role
                    });
                })
                .then(() => {
                    resolve(true);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

}