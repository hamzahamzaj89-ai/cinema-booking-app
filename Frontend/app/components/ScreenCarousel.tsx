import React, { useEffect, useId, useState } from "react";
import { FlatList, Text } from "react-native";
import TimeCard from "./Timecard";
import ScreenCard from "./ScreenCard";
import { IShowTimeByDate } from "../interface/IShowTimeDetail";
import useBookingStore from "../store/bookingStore";
import { useIndexStore } from "../store/indexStore";



export  function ScreenCarousel({showTimes}: {showTimes:IShowTimeByDate[]|[]}) {
  const screen = useBookingStore((state) => state.screen)

  const setScreen = useBookingStore((state) => state.setScreen)
  const screenIndex = useIndexStore((state) => state.screenIndex)
  const dateIndex = useIndexStore((state) => state.dateIndex)



  useEffect(() => {

   
           setScreen(showTimes[dateIndex]?.screens[screenIndex]?.screen)


  } ,[screenIndex]) 
  




  return (


    




    <FlatList
      horizontal
      data={showTimes[dateIndex]?.screens}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 0,
      }}
      renderItem={({ item, index }) => (
        <ScreenCard
          item={item}
          index = {index}
          selected={screenIndex == index}
          onPress={() => {}}
        />
      )}
    />


  );


}