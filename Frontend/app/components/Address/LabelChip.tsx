import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";

interface Props {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export default function LabelChip({
  title,
  selected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className={`mr-3 rounded-lg  px-6 py-3 ${
        selected
          ? "border-[#8B5CF6] bg-[#3b82f6]"
          : "border-[#2B2B42] bg-[#1B1B31]"
      }`}
    >
      <Text
        className={`font-poppins-medium ${
          selected ? "text-white" : "text-[#8C8CA5]"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}