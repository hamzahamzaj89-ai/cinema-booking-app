import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ArrowRight } from "lucide-react-native";
import CustomButton from "../CustomButton";
import { router } from "expo-router";

interface Props {
  total: number;
  onProceed: () => void;
}

export default function BottomCheckout({
  total,
  onProceed,
}: Props) {
  return (
    <View
      className="absolute bottom-0 left-0 right-0   px-5 py-5"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 20,
        shadowOffset: {
          width: 0,
          height: -8,
        },
        elevation: 20,
      }}
    >



      <View className="flex-row items-center justify-between">

        {/* Total */}

        <View className="flex flex-col gap-y-0 mt-2">

          <Text className="font-poppins p-0 m-0 text-[0.9rem]   text-text">
            Grand Total
          </Text>

          <Text className=" font-poppins-bold text-[0.9rem] mb-[3px] text-[#8B5CF6]">
            ${total.toFixed(2)}
          </Text>

        </View>

        {/* Button */}



        <View className=" px-0 py-0 ">
             <CustomButton 
               Icon={ArrowRight}
               onPress={onProceed}
             />
        </View>

     
      </View>

    </View>
  );
}