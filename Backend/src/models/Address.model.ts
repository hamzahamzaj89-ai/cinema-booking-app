import { Schema, model, Document, Types } from "mongoose";

export interface IAddress extends Document {
    user:string;

    fullName: string;

    phone: string;

    city: string;

    area: string;

    address: string;


    label: "Home" | "Work" | "Other";

    isDefault: boolean;

    isActive: boolean;
}

const addressSchema = new Schema<IAddress>(
    {
        user: {
            type: String,
            required: true,
        },

        fullName: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        city: {
            type: String,
            required: true,
            trim: true
        },

        area: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

       

        label: {
            type: String,
            enum: ["Home", "Work", "Other"],
            default: "Home"
        },

        isDefault: {
            type: Boolean,
            default: false
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

// Get all addresses of a user
addressSchema.index({
    user: 1
});



export default model<IAddress>("Address", addressSchema);