import { Schema, Document, Model, model } from 'mongoose';
const bcrypt = require('bcryptjs');

// This class will simulate the enum based on string, with aditional utility methods
export class ROLES {
    constructor(public literalValue: string) {}

    static ADMIN = new ROLES('ADMIN').literalValue;
    static USER = new ROLES('USER').literalValue;
    static GUEST = new ROLES('GUEST').literalValue;

    /**
     * Returns an array with all roles defined
     */
    static getValues() { 
        return [
            ROLES.ADMIN,
            ROLES.USER,
            ROLES.GUEST
        ];
    }
}

export interface User extends Document {

    /** */
    name: string;

    /** */
    username: string;

    /** */
    password: string;

    /** */
    email: string;

    /** */
    role: ROLES;

    /** */
    enabled: boolean;

}

export let UserSchema = new Schema({
    name:            { type: String, required: true },
    username:        { type: String, required: true, unique: true },
    password:        { type: String, required: true },
    email:           { type: String, required: false, lowercase: true },
    role:            { type: String, required: true, enum: ROLES.getValues() },
    enabled:         { type: Boolean, required: true, default: true },
    github:          {
        id:          { type: String },
        username:    { type: String },
        displayName: { type: String },
        avatarUrl:   { type: String }
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

export const UserModel: Model<User> = model<User>('users', UserSchema);