import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  value: string;
  grandTotal?: boolean;
  discount?: boolean;
}

export default function PriceRow({
  title,
  value,
  grandTotal = false,
  discount = false,
}: Props) {
  return (
    <View className="flex-row items-center justify-between py-3">

      <Text
        className={`
        font-poppins
        ${grandTotal ? "text-lg font-poppins-bold text-white" : "text-[#8C8CA5]"}
        `}
      >
        {title}
      </Text>

      <Text
        className={`
        ${
          grandTotal
            ? "font-poppins-bold text-2xl text-[#3b82f6]"
            : discount
            ? "font-poppins-semibold text-[#22C55E]"
            : "font-poppins-semibold text-white"
        }
        `}
      >
        {value}
      </Text>

    </View>
  );
}