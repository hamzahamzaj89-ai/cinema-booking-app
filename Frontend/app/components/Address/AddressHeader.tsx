import { ChevronLeft, Plus } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onBack: () => void;
  onAddAddress: () => void;
}

export default function AddressHeader({ onBack, onAddAddress }: Props) {
  return (
    <View className="mb-6 mt-1 flex-row justify-between items-center ">
      <View className="flex flex-row justify-center items-center ">
        <TouchableOpacity
          onPress={onBack}
          className="h-12 w-12 items-center justify-center rounded-full "
        >
          <ChevronLeft size={29} color="white" />
        </TouchableOpacity>

      </View>

        <View className="mt-2">

          <TouchableOpacity
        onPress={onAddAddress}
        className="flex-row items-center rounded-md bg-selectedCard  px-4 py-3   bg-violet-600"
      >
        <Plus
          size={18}
          color="white"
          strokeWidth={3}
          style={{
            marginBottom: 4
          }}
          className="mb-2 font-bold"
        />

        <Text className="ml-2 font-poppins-semibold mt-[-2px]   text-white">
          Add New
        </Text>
      </TouchableOpacity>
        </View>
    </View>
  );
}
