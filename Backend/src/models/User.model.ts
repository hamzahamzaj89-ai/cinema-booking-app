import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    clerkId: string;

    name: string;

    email: string;

    avatar?: string;

    phone?: string;

    role: "user" | "admin";

    isActive: boolean;
}

const userSchema = new Schema<IUser>(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        avatar: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: "",
            trim: true
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
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

export default model<IUser>("User", userSchema);