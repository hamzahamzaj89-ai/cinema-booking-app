import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MapPinned, Plus } from "lucide-react-native";

interface Props {
  onAddAddress: () => void;
}

export default function EmptyAddress({
  onAddAddress,
}: Props) {




  return (
    <View className="flex-1 items-center justify-center px-8">

      <View className="h-28 w-28 items-center justify-center rounded-full bg-[#1B1B31]">

        <MapPinned
          size={45}
          color="#8B5CF6"
        />

      </View>

      <Text className="mt-8 font-poppins-bold text-2xl text-white">
        No Address Found
      </Text>

      <Text className="mt-3 text-center leading-6 text-text">
        Add your first delivery address to continue your booking.
      </Text>

      <TouchableOpacity
        onPress={onAddAddress}
        className="mt-8 flex-row items-center rounded-2xl bg-[#8B5CF6] px-7 py-4"
      >

        <Plus
          color="white"
          size={18}
        />

        <Text className="ml-2 font-poppins-semibold text-white">
          Add Address
        </Text>

      </TouchableOpacity>

    </View>
  );
}