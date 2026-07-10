import React from "react";
import { View, Text } from "react-native";

export default function CurvedScreen() {
  return (
    <View className="items-center justify-center py-6">
      {/* Screen Label */}
      <Text className="mb-4 font-poppins-medium text-xs tracking-[6px] text-[#7B7F9E]">
        SCREEN
      </Text>

      {/* Shadow */}
      <View
        style={{
          width: 320,
          height: 18,
          borderTopWidth: 3,
          borderColor: "rgba(139,92,246,0.18)",
          borderTopLeftRadius: 220,
          borderTopRightRadius: 220,
          shadowColor: "#8B5CF6",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 14,
          elevation: 12,
        }}
      />

      {/* Main Curve */}
      <View
        style={{
          marginTop: -18,
          width: 300,
          height: 18,
          borderTopWidth: 4,
          borderColor: "#D8DAE5",
          borderTopLeftRadius: 220,
          borderTopRightRadius: 220,
        }}
      />

      {/* Soft Glow */}
      <View
        style={{
          marginTop: -18,
          width: 285,
          height: 16,
          borderTopWidth: 2,
          borderColor: "rgba(255,255,255,0.18)",
          borderTopLeftRadius: 200,
          borderTopRightRadius: 200,
        }}
      />
    </View>
  );
}