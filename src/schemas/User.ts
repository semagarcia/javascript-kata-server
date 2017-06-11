import { Schema, Document, Model, model } from 'mongoose';
const bcrypt = require('bcryptjs');

export interface User extends Document {

    /** */
    _id?: string;

    /** */
    name: string;

    /** */
    username: string;

    /** */
    password: string;

    /** */
    email: string;

    /** */
    rol: string

    /** */
    enabled: boolean;

}

export let UserSchema = new Schema({
    name:            { type: String, required: true },
    username:        { type: String, required: true },
    password:        { type: String, required: true },
    email:           { type: String, required: true },
    rol:             { type: String, required: true },
    enabled:         { type: Boolean, default: true, required: true }
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