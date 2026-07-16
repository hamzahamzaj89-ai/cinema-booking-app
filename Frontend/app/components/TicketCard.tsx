import React from "react";
import { Pressable, Text, View } from "react-native";
import useBookingStore from "../store/bookingStore";
import { formattingDate } from "../utils/convertingDate";
import { useIndexStore } from "../store/indexStore";

interface Props {
  item: any;
  selected: boolean;
  onPress: () => void;
  index:number
}

export default function TicketCard({
  item,
  selected,
  index ,
  onPress
}: Props) {



  const setDate = useBookingStore((state) => state.setDate)

  const setDateIndex = useIndexStore((state) => state.setDateIndex)
    





  const handleDate = () => {

      setDateIndex(index)
    


  }



    const {weekday , day , month} = formattingDate(item?.date)


  return (
    <Pressable onPress={handleDate}>
      <View
        className={`relative mr-2  h-32 w-24 items-center justify-center rounded-[20px] ${
          selected ? "bg-[#8B5CF6]" : "bg-[#1B1B31]"
        }`}
      >
        {/* Left Cut */}
        <View className="absolute -left-2 h-5 w-5 rounded-full bg-[#0B0B14]" />

        {/* Right Cut */}
        <View className="absolute -right-2 h-5 w-5 rounded-full bg-[#0B0B14]" />

        <Text
          className={`text-xs tracking-[2px] font-poppins ${
            selected ? "text-white/80" : "text-[#8E8EA4]"
          }`}
        >
          {weekday}
        </Text>

        <Text className="mt-1 text-4xl font-poppins-bold text-white">
          {day}
        </Text>

        <Text
          className={`mt-1 text-xs tracking-[2px] font-poppins ${
            selected ? "text-white" : "text-[#B794F4]"
          }`}
        >
          {month}
        </Text>

        <View
          className={`mt-3 h-2 w-2 rounded-full ${
            selected ? "bg-white" : "bg-[#8B5CF6]"
          }  `}
        />
      </View>
    </Pressable>
  );
}