
 export interface IBookedSeat {
    seatId: string;
    status: "VIP" | "Premium" | "Standard";
    price: number;
}



export interface ISeat {
     
    seatId: string;
    status: "VIP" | "Premium" | "Standard";
    bookingStatus: "booked" | "available"
}



export interface IRow {
    
     row: string,
     seats: (ISeat| null)[]

}


