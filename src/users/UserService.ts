import { User, UserModel } from './../schemas/User';

const bcrypt = require('bcryptjs');
const config = require('./../config');
const BCRYPT_SALT_ROUNDS = 12;

export class UsersService {

    async getAllUsers() {
        return new Promise((resolve, reject) => {
            UserModel.find({ enabled: true }, { password: 0 }, (err, users: Array<User>) => {
                if(err) reject(err);
                resolve(users);
            });
        });
    }

    async getUserInfoById(userId: string) {
        return new Promise((resolve, reject) => {
            UserModel.findById({ _id: userId }, { password: 0 }, (err, user: User) => {
                if(err) reject(err);
                resolve(user);
            });
        });
    }

    async createUser(userData) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(userData.password, BCRYPT_SALT_ROUNDS)
                .then((hashedPwd) => {
                    return UserModel.create({
                        name: userData.name,
                        username: userData.username,
                        password: hashedPwd,
                        email: userData.email,
                        rol: userData.rol
                    });
                })
                .then(() => {
                    resolve(true);
                })
                .catch((err) => {
                    console.log('Error: ', err);
                    reject(err);
                });
        });
    }

}