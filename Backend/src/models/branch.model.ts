import { Schema, model, Document, Types } from "mongoose";

export interface IBranch extends Document {
    cinema: Types.ObjectId;

    name: string;

    location: string;

    city: string;

    address: string;

    logo: string;

    screens: Types.ObjectId[];

    phone: string;

    email?: string;


    isActive: boolean;
}

const branchSchema = new Schema<IBranch>(
    {
        cinema: {
            type: Schema.Types.ObjectId,
            ref: "Cinema",
            required: true,
            index: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true,
            index: true
        },

        address: {
            type: String,
            required: true
        },

        logo: {
            type: String,
            required: true
        },

        screens: [
            {
                type: Schema.Types.ObjectId,
                ref: "Screen"
            }
        ],

        phone: {
            type: String,
            required: true
        },

        email: {
            type: String
        },

      

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

branchSchema.index({
    cinema: 1,
    city: 1
});

export default model<IBranch>("Branch", branchSchema);