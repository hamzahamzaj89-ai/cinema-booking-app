import { AdIcon, ChevronLeft, createLucideIcon, Plus, PlusCircle } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../CustomButton";

interface Props {
  onBack: () => void;
  onAddAddress: () => void;
}

export default function AddressHeader({ onBack, onAddAddress }: Props) {
  return (
    <View className="mb-6 mt-1 flex-row justify-between items-center ">
      <View className="flex flex-row justify-center items-center mt-2">
        <TouchableOpacity
          onPress={onBack}
          className="h-12 w-12 items-center justify-center rounded-full  mb-1"
        >
          <ChevronLeft size={29} color="white" />
        </TouchableOpacity>

      </View>

        <View className="mt-2">
            <CustomButton
            text = {"Add Address"}
             Icon={PlusCircle}
             onPress={() => {onAddAddress()}}
            />
        </View>
    </View>
  );
}
