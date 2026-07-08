import React, { useState } from "react";
import { FlatList } from "react-native";
import TicketCard from "./TicketCard";

const DATA = [
  { day: "MON", date: "15", month: "JUL" },
  { day: "TUE", date: "16", month: "JUL" },
  { day: "WED", date: "17", month: "JUL" },
  { day: "THU", date: "18", month: "JUL" },
  { day: "FRI", date: "19", month: "JUL" },
  { day: "SAT", date: "20", month: "JUL" },
  { day: "SUN", date: "21", month: "JUL" },
];

export default function DateCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <FlatList
      horizontal
      data={DATA}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      renderItem={({ item, index }) => (
        <TicketCard
          item={item}
          selected={selectedIndex === index}
          onPress={() => setSelectedIndex(index)}
        />
      )}
    />
  );
}