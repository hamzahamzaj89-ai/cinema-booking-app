import { View, Text, Pressable } from "react-native";
import React, { use, useEffect, useState } from "react";
import useBookingStore from "../store/bookingStore";
import Toast from "react-native-toast-message";
import clsx from "clsx";
import { IPrice, ISeat, ISeatByPrice } from "../interface/ISeatLayout";
import { SeatType } from "../store/priceStore";



interface Props {
  item : ISeat | null;
  key:number ;
  seats: ISeatByPrice[];
  prices: Record<SeatType , number>

}

const Seat = ({ item, key , seats , prices}: Props) => {





  if (item == null) {
    return (
      <>
        <View className="w-[5] bg-transparent"></View>
      </>
    );
  }

  

  const toggleSeat= useBookingStore(
  (state) => 

    state?.toggleSeat

);

 
  const checkSeat= useBookingStore(
  (state) => 

    state?.checkSeat

);




  const handleSeats = () => {


    if (item.bookingStatus == "booked") {
        
        Toast.show({
  type: "error",
  text1: "This seat is already booked ",
  text2: "Please choose another.",
});
            
       return;
    }


   toggleSeat({...item , price:prices[item.status]})
     

  }



  return (
    <Pressable
     onPress={handleSeats}
      key={key}


        className ={clsx(

           "w-8 h-8 rounded-lg justify-center items-center m-[3px]",
            item.bookingStatus === "booked" && "bg-red-500",
            item.bookingStatus === "available" && ( (item.status === "VIP"  &&   "bg-amber-400")  || (item.status === "Premium" || item.status === "Standard") && "bg-slate-600" )    ,
            seats.find((seat) => seat.seatId === item.seatId) &&  "bg-blue-500"
          

        )}

    ></Pressable>
  );
};

export default Seat;
