import { Schema, model, Document, Types } from "mongoose";

export interface IBookedSeat {
    seatId: string;
    status: "VIP" | "Premium" | "Standard";
    price: number;
}

export interface IBooking extends Document {
    user: Types.ObjectId;

    showtime: Types.ObjectId;

    movie: Types.ObjectId;

    branch: Types.ObjectId;

    screen: Types.ObjectId;

    seats: IBookedSeat[];

    totalAmount: number;

    paymentMethod: "stripe" | "cash";

    paymentIntentId?: string;

    paymentStatus:
        | "pending"
        | "processing"
        | "paid"
        | "failed"
        | "refunded";

    bookingStatus:
        | "pending"
        | "confirmed"
        | "cancelled"
        | "expired";

    expiresAt: Date;

    bookedAt: Date;
    
    date: string;
    transactionId?: string;

    isActive: boolean;
}

const bookedSeatSchema = new Schema<IBookedSeat>(
    {
        seatId: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["VIP", "Premium", "Standard"],
            required: true
        },

        price: {
            type: Number,
            required: true
        }
    },
    {
        _id: false
    }
);

const bookingSchema = new Schema<IBooking>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },
        

        showtime: {
            type: Schema.Types.ObjectId,
            ref: "Showtime",
            required: true,
            index: true
        },

        movie: {
            type: Schema.Types.ObjectId,
            ref: "Movie",
            required: true
        },

        branch: {
            type: Schema.Types.ObjectId,
            ref: "Branch",
            required: true
        },

        screen: {
            type: Schema.Types.ObjectId,
            ref: "Screen",
            required: true
        },

        seats: {
            type: [bookedSeatSchema],
            required: true
        },

        totalAmount: {
            type: Number,
            required: true
        },

        paymentMethod: {
            type: String,
            enum: ["stripe", "cash"],
            default: "stripe"
        },

        paymentIntentId: {
            type: String
        },

        paymentStatus: {
            type: String,
            enum: [
                "pending",
                "processing",
                "paid",
                "failed",
                "refunded"
            ],
            default: "pending"
        },

        bookingStatus: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "cancelled",
                "expired"
            ],
            default: "pending"
        },

        expiresAt: {
            type: Date,
            required: true
        },

        bookedAt: {
            type: Date,
            default: Date.now
        },


        date: {
            type: String,
            required: true,
        },

        transactionId: {
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

/* ===========================
        INDEXES
=========================== */

// Find bookings of a showtime
bookingSchema.index({
    showtime: 1
});

// Find user's bookings
bookingSchema.index({
    user: 1,
    createdAt: -1
});

bookingSchema.index({
    date: 1,
    movie: 1,
    user: 1
})



// Helps query seat conflicts
bookingSchema.index({
    showtime: 1,
    "seats.seatId": 1
});

export default model<IBooking>("Booking", bookingSchema);