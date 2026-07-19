import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import useBookingStore from "../store/bookingStore";
import { useIndexStore } from "../store/indexStore";
import { formatTime } from "../utils/convertingDate";
import { IScreenShowTime } from "../interface/IShowTimeDetail";

interface Props {
  item: IScreenShowTime;
  selected: boolean;
  onPress: () => void;
  index: number;
}

export default function TimeCard({
  item,
  selected,
  index,
  onPress,
}: Props) {


    const setTimeIndex = useIndexStore((state) => state.setTimeIndex)

     const handleTime = () => {

       if (selected ){
        return
       }


     setTimeIndex(index)
  }
  




    const time =  formatTime(item.startTime)

    const [number , status] = time.split(" ")

  return (
    <Pressable onPress={handleTime}>

      <View
        className={`relative mr-2  h-[60px] w-24 items-center justify-center rounded-lg ${
          selected ? "bg-[#8B5CF6]" : "bg-[#1B1B31]"
        }`}
      >
      

        <Text
          className={`text-xs tracking-[1px] font-poppins-semibold text-[1.1rem] text-[#9B9BB5] ${
            selected ? "text-white" : "text-[#9B9BB5]"
          }`}
        >
          {number}
        </Text>


        <Text
          className={`mt-1 text-xs tracking-[2px] font-poppins-semibold text-[#9B9BB5]  ${
            selected ? "text-white" : "text-[#B794F4]"
          }`}
        >
          {status}
        </Text>

       
      </View>
    </Pressable>
  );
}