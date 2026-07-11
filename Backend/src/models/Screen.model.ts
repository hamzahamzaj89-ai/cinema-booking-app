import { Schema, model, Document, Types } from "mongoose";

export interface IScreen extends Document {
    branch: Types.ObjectId;

    name: string;

    screenNumber: number;


    seatLayout: Types.ObjectId;

    screenType: "2D" | "3D" | "IMAX" | "4DX";

    isActive: boolean;
}

const screenSchema = new Schema<IScreen>(
    {
        branch: {
            type: Schema.Types.ObjectId,
            ref: "Branch",
            required: true,
            index: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        screenNumber: {
            type: Number,
            required: true
        },

       

        seatLayout: {
              type: Schema.Types.ObjectId,
              ref: "SeatLayout"
        },

        screenType: {
            type: String,
            enum: ["2D", "3D", "IMAX", "4DX"],
            default: "2D"
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

screenSchema.index({
    branch: 1,
    screenNumber: 1
});

export default model<IScreen>("Screen", screenSchema);