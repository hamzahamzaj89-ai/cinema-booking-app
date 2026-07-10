import { View, Text, Pressable } from "react-native";
import React from "react";
import useBookingStore from "../store/bookingStore";
import Toast from "react-native-toast-message";


const Seat = ({ item, key }: any) => {
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
      className={`
w-8
h-8
rounded-lg
justify-center
items-center
m-[3px]



${
  item.status === "VIP"
    ? "bg-amber-400"
    : item.status === "available"
      ? "bg-slate-600"
      : "bg-red-500"
  
}


${
     checkSeat(item) && "bg-card"
    
}

` }
    ></Pressable>
  );
};

export default Seat;
