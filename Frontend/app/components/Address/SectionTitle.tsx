import React from "react";
import { Text } from "react-native";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <Text className="mb-3 mt-6 font-poppins-semibold text-sm tracking-[1px] text-white uppercase">
      {title}
    </Text>
  );
}