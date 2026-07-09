import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import TimeCard from "./Timecard";
import ScreenCard from "./ScreenCard";



export  function ScreenCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(2);


const screens = [
  { name: "Screen 1", seats: 120 },
  { name: "Screen 2", seats: 98 },
  { name: "Screen 3", seats: 75 },
  { name: "Screen 4", seats: 60 },
];


  return (


    




    <FlatList
      horizontal
      data={screens}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 0,
      }}
      renderItem={({ item, index }) => (
        <ScreenCard
          item={item}
          selected={selectedIndex === index}
          onPress={() => setSelectedIndex(index)}
        />
      )}
    />


  );


}