import { Schema, model, Document, Types } from "mongoose";

export interface ICinema extends Document {
    name: string;

    logo: string;

    description?: string;

    website?: string;

    email?: string;

    phone?: string;


    isActive: boolean;
}

const cinemaSchema = new Schema<ICinema>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        logo: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        website: {
            type: String
        },

        email: {
            type: String
        },

        phone: {
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



cinemaSchema.index({
    name: 1
});

export default model<ICinema>("Cinema", cinemaSchema);