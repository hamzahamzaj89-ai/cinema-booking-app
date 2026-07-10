import { View, Text, Pressable } from "react-native";
import React, { use, useEffect, useState } from "react";
import useBookingStore from "../store/bookingStore";
import Toast from "react-native-toast-message";
import clsx from "clsx";

const Seat = ({ item, key , seats}: any) => {
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


    if (item.status == "booked") {
        
        Toast.show({
  type: "error",
  text1: "This seat is already booked ",
  text2: "Please choose another.",
});
            
       return;
    }


   toggleSeat(item)
     

  }



  return (
    <Pressable
     onPress={handleSeats}
      key={key}


        className ={clsx(

           "w-8 h-8 rounded-lg justify-center items-center m-[3px]",
            item.status === "VIP" && "bg-amber-400",
            item.status === "available" && "bg-slate-600",
            item.status === "booked" && "bg-red-500",
            seats.includes(item) && "bg-violet-600"
          

        )}

    ></Pressable>
  );
};

export default Seat;
