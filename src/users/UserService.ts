import { ROLES, User, UserModel } from './../schemas/User';

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

    async findOrCreateUserByGitHub(githubProfile) {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 
                'github.username': githubProfile.username, 
                enabled: true 
            }, (err, user: User) => {
                if(err) {
                    console.log('[GITHUB AUTH] Error finding user ', githubProfile.username);
                    reject(err);
                }
                if(!user) {
                    // User not found... create it and insert into database
                    UserModel.create({
                        name: githubProfile.displayName || githubProfile.username,
                        username: githubProfile.username,
                        password: 'github_auth',
                        email: githubProfile._json.email || (githubProfile.username + '@no-provided.com'),
                        role: ROLES.USER,
                        github: {
                            id: githubProfile.id,
                            username: githubProfile.username,
                            displayName: githubProfile.displayName,
                            avatarUrl: githubProfile._json.avatar_url,
                        }
                    }, (err, newUser) => {
                        if(err) {
                            console.log('[GITHUB AUTH] Error creating GH_AUTH user: ', err);
                            reject(err);
                        }
                        resolve(newUser);
                    });
                } else {
                    // User already exists...
                    resolve(user);
                }
            })
        });
    }

}