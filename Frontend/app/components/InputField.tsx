import React from "react";
import {
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";
import { LucideIcon } from "lucide-react-native";

interface Props extends TextInputProps {
  label: string;
  Icon: LucideIcon;
  onValueChange: (text:string) => void;
  Placeholder: string
}

export default function InputField({
  label,
  Icon,
  onValueChange,
  Placeholder
  
}: Props) {
  return (
    <View className="mb-5">

      {/* Label */}

      <Text className="mb-2 ml-1 font-poppins-medium text-sm text-[#A3A3C2]">
        {label}
      </Text>

      {/* Input */}

      <View className="h-16 flex-row items-center rounded-lg  bg-field   px-5">

        {/* Icon */}

        <View className="mr-2">

            <Icon size={21} color="#7c3aed" strokeWidth={2}/>

          </View>

        {/* Text Input */}

        <TextInput
          placeholder={Placeholder}
          className="flex-1 font-poppins text-base   placeholder:text-text  text-text pt-4"
          selectionColor="#8B5CF6"

            style={{
    height: 56,
    textAlignVertical: "center",
  }}
          onChangeText={onValueChange}
        />

      </View>

    </View>
  );
}