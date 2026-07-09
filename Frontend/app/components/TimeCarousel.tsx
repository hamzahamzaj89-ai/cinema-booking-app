import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import TimeCard from "./Timecard";



export  function TimeCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(2);


  
 const showTimes = [
  {
    id: 1,
    time: "09:00",
    status: "AM",
  },
  {
    id: 2,
    time: "10:30",
    status: "AM",
  },
  {
    id: 3,
    time: "12:00",
    status: "PM",
  },
  {
    id: 4,
    time: "01:30",
    status: "PM",
  },
  {
    id: 5,
    time: "03:00",
    status: "PM",
  },
  {
    id: 6,
    time: "04:45",
    status: "PM",
  },
  {
    id: 7,
    time: "06:30",
    status: "PM",
  },
  {
    id: 8,
    time: "08:15",
    status: "PM",
  },
  {
    id: 9,
    time: "10:00",
    status: "PM",
  },
];



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
        <TimeCard
          item={item}
          selected={selectedIndex === index}
          onPress={() => setSelectedIndex(index)}
        />
      )}
    />


  );


}