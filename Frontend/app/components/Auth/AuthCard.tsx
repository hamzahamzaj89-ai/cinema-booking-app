import React from "react";
import { View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <View
      className="flex-1 mt-[-45px] bg-bg rounded-t-[35px] px-7 pt-8"
      

      
    >
      {children}
    </View>
  );
}