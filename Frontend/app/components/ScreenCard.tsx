import { Armchair } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import useBookingStore from "../store/bookingStore";

interface Props {
  item: any;
  selected: boolean;
  onPress: () => void;
}

export default function ScreenCard({
  item,
  selected,
  onPress,
}: Props) {


  
   const setScreen = useBookingStore((state) => state.setScreen)






  const handleScreen = () => {

     setScreen(item)

      onPress()

  }


  

  return (
       <Pressable onPress={handleScreen}>
      <View
        className={`mr-2 h-38 w-[100px] items-center justify-between rounded-lg border px-0 py-4 ${
          selected
            ? "border-[#8B5CF6] bg-[#1B1B31]"
            : " bg-[#1B1B31]"
        }`}
      >
        {/* Screen Name */}
        <Text
          className={`font-poppins-semibold text-sm ${
            selected ? "text-white" : "text-[#D8D8E5]"
          }`}
        >
          {item.name}
        </Text>

        {/* Seat Layout */}
        <View className="items-center">
          {[0, 1, 2].map((row) => (
            <View key={row} className="mb-1 flex-row">
              {[0, 1, 2, 3].map((seat) => (
                <Armchair
                  key={seat}
                  size={13}
                  strokeWidth={2}
                  color={selected ? "#A855F7" : "#646483"}
                  style={{ marginHorizontal: 2 }}
                />
              ))}
            </View>
          ))}
        </View>

        {/* Seat Count */}
        <View className="items-center">
          <Text
            className={`font-poppins-bold text-base ${
              selected ? "text-white" : "text-[#ECECF5]"
            }`}
          >
            {item.seats}
          </Text>

          <Text
            className={`font-poppins text-xs ${
              selected ? "text-white/70" : "text-[#8C8CA5]"
            }`}
          >
            Seats
          </Text>
        </View>
      </View>
    </Pressable>
  );
}