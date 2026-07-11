import mongoose, { Schema, Document, Types } from "mongoose";



interface price {
    seatType: "VIP" | "Premium" | "Standard";
    price: number
}



const priceSchema = new Schema({
    seatType: {
        type: String,
        enum: ["VIP" , "Premium" , "Standard"]
    },

    price: {
        type: Number,
    
    }



}, 
     {
        _id: false
    }
)

export interface IShowtime extends Document {
    movie: Types.ObjectId;

    branch: Types.ObjectId;

    screen: Types.ObjectId;

    date: Date;

    startTime: Date;

    endTime: Date;

    price: number;

    language: string;

    format: "2D" | "3D" | "IMAX" | "4DX";

    availableSeats: number;

    bookedSeats: number;

    status: "scheduled" | "running" | "completed" | "cancelled";

    isActive: boolean;
}

const showTimeSchema = new Schema<IShowtime>(
    {
        movie: {
            type: Schema.Types.ObjectId,
            ref: "Movie",
            required: true,
            
        },

        branch: {
            type: Schema.Types.ObjectId,
            ref: "Branch",
            required: true,
        },

        screen: {
            type: Schema.Types.ObjectId,
            ref: "Screen",
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        startTime: {
            type: Date,
            required: true,
        },

        endTime: {
            type: Date,
            required: true,
        },

        price:[{
            type : priceSchema,
            default: null


        }],

        language: {
            type: String,
            default: "English",
        },

        format: {
            type: String,
            enum: ["2D", "3D", "IMAX", "4DX"],
            default: "2D",
        },

        availableSeats: {
            type: Number,
            required: true,
        },

        bookedSeats: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: [
                "coming Soon",
                "running",
                "completed",
            ],
            default: "scheduled",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);



showTimeSchema.index({
    startTime: 1,
});


showTimeSchema.index({

    date: 1

})

showTimeSchema.index({
    screen: 1,
    date: 1,
    startTime: 1
});




export default mongoose.model<IShowtime>(
    "ShowTime",
    showTimeSchema
);