import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Armchair } from "lucide-react-native";
import useBookingStore from "../store/bookingStore";




export default function SeatSummary() {


    const [totalPrice , setTotalPrice] = useState(0)

    const seats = useBookingStore((state)=> 
         state.seats
    )

  
    useEffect(() => {

     
const totalPrice2 = seats.reduce(
  (total, seat) => total + seat.price,
  0
);


setTotalPrice(totalPrice2)

    }, [seats])


    


  return (
    <View className="mx-5 rounded-xl bg-field  mt-4  p-5 ">

      {/* Header */}
      <View className="mb-5 flex-row items-center">
        <View className="h-11 w-11 items-center justify-center rounded-2xl bg-[#8B5CF6]/15">
          <Armchair
            size={22}
            color="#3b82f6"
          />
        </View>

        <Text className="ml-3 font-poppins-bold text-[1.1rem] text-lg text-text">
          Seat Summary
        </Text>
      </View>

      {/* Selected Seats */}
      <Text className="mb-2 font-poppins text-xs tracking-[2px] text-[#8C8CA5]">
        SELECTED SEATS
      </Text>

      <View className="mb-2 flex-row flex-wrap">
        {seats.length > 0 && seats.map((seat:any) => (
          <View
            key={seat.seatId}
            className="mr-2 mb-2 rounded-lg bg-[#8B5CF6]/15 px-4 py-2"
          >
            <Text className="font-poppins-semibold text-[#3b82f6]">
              {seat.seatId}
            </Text>
          </View>
        ))}
      </View>

      {/* Divider */}

      {/* Footer */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-poppins text-xs text-[#8C8CA5]">
            Total Seats
          </Text>

          <Text className="font-poppins-bold text-xl text-white">
            {seats.length}
          </Text>
        </View>

        <View className="items-end">
          <Text className="font-poppins text-xs text-[#8C8CA5]">
            Total Price
          </Text>

          <Text className="font-poppins-bold text-2xl text-[#3b82f6]">
            ${totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
}