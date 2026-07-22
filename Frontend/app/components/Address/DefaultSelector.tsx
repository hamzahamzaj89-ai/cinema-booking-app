import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import clsx from "clsx";

interface DefaultSelectorProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function DefaultSelector({
  value,
  onChange,
}: DefaultSelectorProps) {


      

  return (
    <View>
      <Text className="mb-3 font-poppins-medium text-base text-white">
        Set as Default Address
      </Text>

      <View className="flex-row rounded-xl bg-field p-1">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onChange(true)}
          className={clsx(
            "flex-1 items-center rounded-lg py-3",
            value && "bg-blue-500"
          )}
        >
          <Text
            className={clsx(
              "font-poppins-medium",
              value ? "text-white" : "text-[#8C8CA5]"
            )}
          >
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onChange(false)}
          className={clsx(
            "flex-1 items-center rounded-lg py-3",
            !value && "bg-blue-500"
          )}
        >
          <Text
            className={clsx(
              "font-poppins-medium",
              !value ? "text-white" : "text-[#8C8CA5]"
            )}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}