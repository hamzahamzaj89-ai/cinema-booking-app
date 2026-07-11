import { Schema, model, Document } from "mongoose";
//interfaces
interface ISeat {
     
    seatId: string;
    status: "VIP" | "Premium" | "Standard";
    bookingStatus: "booked" | "available"
}



interface IRow {
    
     row: string,
     seats: (ISeat| null)[]

}



export interface ISeatLayout extends Document {
    name: string;

    seatLayout: (IRow | null)[][];

    totalSeats: number;

    isActive: boolean;
}


//Schemas



const seatSchema = new Schema<ISeat>(
    {
        seatId: String,

        bookingStatus: {
            type: String,
            enum : ["booked" , "available"]

        },

        status: {
            type: String,
            enum: ["VIP", "Premium", "Standard"]
        }
    },
    {
        _id: false
    }
);


const rowSchema = new Schema<IRow>(
    {
        row: {
            type: String,
            required: true 
        },

        seats: [{
            type: seatSchema,
            default: null
        }]
    },
    {
        _id: false
    }
);

const seatLayoutSchema = new Schema<ISeatLayout>(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },

        seatLayout: [
            
                {
                    type: rowSchema,
                    default: null
                }
            
        ],

        totalSeats: {
            type: Number,
            required: true
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

export default model<ISeatLayout>("SeatLayout", seatLayoutSchema);