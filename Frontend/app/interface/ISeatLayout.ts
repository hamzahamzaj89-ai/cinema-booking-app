export interface ISeat {
    seatId: string;
    bookingStatus: "available" | "booked" ;
    status: "VIP" | "Premium" | "Standard";
}

export interface ISeatRow {
    row: string;
    seats: (ISeat | null)[];


}





export interface IPrice {
      
        seatType: "VIP" | "Premium" | "Standard";
    price: number

}



export interface ISeatByPrice extends ISeat {

  price: number
}