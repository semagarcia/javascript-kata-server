import { Schema, Document, Model, model } from 'mongoose';

export interface Kata extends Document {

    /** */
    name: string;

    /** */
    description: string;

    /** */
    examples: Array<string>;

    /** */
    inputs: Array<{parameter: string, description: string, type: string, constraints: Array<string>}>;

    /** */
    outputs: Array<{description: string, type: string, constraints: Array<string>}>;

    /** */
    initialBodyFunction: string;

    /** */
    tests: Array<{input: any, output: any}>;

    /** */
    enabled: boolean;

}

export let KataSchema = new Schema({
    name:                   { type: String, required: true },
    description:            { type: String, required: true },
    examples:               [{ type: String, required: true }],
    inputs:                 [
                                { parameter: { type: String, required: false } },
                                { description: { type: String, required: false } },
                                { type: { type: String, required: false } },
                                { constraints: [{ type: String, required: false }] },
    ],
    outputs:                [
                                { description: { type: String, required: false } },
                                { type: { type: String, required: false } },
                                { constraints: [{ type: String, required: false }] },
    ],
    initialBodyFunction:    { type: String, required: true },
    tests:                  [
                                { input: { type: String, required: false } },
                                { output: { type: String, required: false } }
    ],
    enabled:                { type: Boolean, required: true }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

export const KataModel: Model<Kata> = model<Kata>('katas', KataSchema);