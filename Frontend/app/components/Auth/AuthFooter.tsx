import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  text: string;
  actionText: string;
  onPress: () => void;
}

export default function AuthFooter({
  text,
  actionText,
  onPress,
}: Props) {
  return (
    <View className="mt-3 flex-row items-center justify-center">

      <Text className="font-poppins text-[15px] text-[#8C8CA5]">
        {text}
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={(event) => {onPress()} }
      >
        <Text className="ml-1 font-poppins-semibold text-[15px] text-[#8B5CF6]">
          {actionText}
        </Text>
      </TouchableOpacity>

    </View>
  );
}