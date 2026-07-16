import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Text } from "react-native";
import TimeCard from "./Timecard";
import useBookingStore from "../store/bookingStore";
import { IShowTimeByDate } from "../interface/IShowTimeDetail";
import { useIndexStore } from "../store/indexStore";



export  function TimeCarousel( {showTimes}: {showTimes:IShowTimeByDate[]| []}) {


  const setTime = useBookingStore((state) => state.setTime);
  
   const time = useBookingStore((state) => state.time)
   const dateIndex = useIndexStore((state) => state.dateIndex)
     const screenIndex = useIndexStore((state) => state.screenIndex)

  const timeIndex = useIndexStore((state) => state.timeIndex)

  useEffect(() => {

         setTime(showTimes[dateIndex]?.screens[screenIndex]?.showTimes[timeIndex])
      
  } ,[timeIndex]) 
 





  return (

    <FlatList
      horizontal
      data={showTimes[dateIndex]?.screens[screenIndex]?.showTimes}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 0,
      }}
      renderItem={({ item, index }) => (
        <TimeCard
          item={item}
          index = {index}
          selected={timeIndex == index}
          onPress={() => {}}
        />
      )}
    />


  );


}