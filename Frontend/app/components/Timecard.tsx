import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  item: any;
  selected: boolean;
  onPress: () => void;
}

export default function TimeCard({
  item,
  selected,
  onPress,
}: Props) {


  return (
    <Pressable onPress={onPress}>

      <View
        className={`relative mr-2  h-[60px] w-24 items-center justify-center rounded-lg ${
          selected ? "bg-[#8B5CF6]" : "bg-[#1B1B31]"
        }`}
      >
      {/* Left Cut */}
              <View className="absolute -left-2 h-5 w-5 rounded-full bg-[#0B0B14]" />
      
              {/* Right Cut */}
              <View className="absolute -right-2 h-5 w-5 rounded-full bg-[#0B0B14]" />

        <Text
          className={`text-xs tracking-[1px] font-poppins-semibold text-[1.1rem] text-[#9B9BB5] ${
            selected ? "text-white" : "text-[#9B9BB5]"
          }`}
        >
          {item.time}
        </Text>


        <Text
          className={`mt-1 text-xs tracking-[2px] font-poppins-semibold text-[#9B9BB5]  ${
            selected ? "text-white" : "text-[#B794F4]"
          }`}
        >
          {item.status}
        </Text>

       
      </View>
    </Pressable>
  );
}