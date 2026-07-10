import React from "react";
import {
  TextInput,
  View,
} from "react-native";

interface Props {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function AddressInput({
  icon,
  placeholder,
  value,
  onChangeText,
}: Props) {
  return (
    <View className="mb-4 flex-row items-center rounded-lg border  bg-[#1B1B31] px-5">

       <View className="mb-[1px]">
        {icon}
       </View>

      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#8C8CA5"
        onChangeText={onChangeText}
        
        className="ml-4 flex-1 py-5 pt-6 pb-4  h-[100%]  font-poppins text-base  text-white"
      />

    </View>
  );
}