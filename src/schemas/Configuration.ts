import { Schema, Document, Model, model } from 'mongoose';

export interface Configuration extends Document {

    /** */
    key: string;

    /** */
    description?: string;

    /** */
    value: any;

    /** */
    dataType: string;

    /** */
    enabled: boolean;

}

export let ConfigurationSchema = new Schema({
    key:                    { type: String, required: true, unique: true },
    description:            { type: String, required: false },
    value:                  { type: Schema.Types.Mixed, required: true },
    dataType:               { type: String, required: true },
    enabled:                { type: Boolean, required: true, default: true }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

export const ConfigurationModel: Model<Configuration> = model<Configuration>('configuration', ConfigurationSchema);