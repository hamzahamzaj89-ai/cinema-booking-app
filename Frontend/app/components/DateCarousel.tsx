import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import TicketCard from "./TicketCard";
import { View } from "lucide-react-native";
import useBookingStore from "../store/bookingStore";
import { IShowTimeByDate } from "../interface/IShowTimeDetail";
import { useIndexStore } from "../store/indexStore";


export default function DateCarousel({showTimes}:{showTimes:IShowTimeByDate[] | []} ) {

  
  const date = useBookingStore((state) => state.date)
   const setDate = useBookingStore((state) => state.setDate)

   const dateIndex = useIndexStore((state) => state.dateIndex)


      useEffect(() => {



           setDate(showTimes[dateIndex]?.date)
           

      } , [dateIndex])



  return (


    




    <FlatList
      horizontal
      data={showTimes}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 0,
      }}
      renderItem={({ item, index }) => (
        <TicketCard
          item={item}
          index ={index}
          selected={dateIndex === index}
          onPress={() => {}}
        />
      )}
    />


  );
}