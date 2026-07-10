import {
  BriefcaseBusiness,
  CheckCircle2,
  House,
  MapPinned,
} from "lucide-react-native";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Address } from "../../types/address";
import clsx from "clsx";

interface Props {
  address: Address;
  selected: boolean;
  onPress: () => void;
}

export default function AddressCard({ address, selected, onPress }: Props) {
  const fullAddress = `${address.street}, ${address.area}, ${address.city}, ${address.country}`;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className={clsx(
        "mb-4 rounded-xl border p-5 ",

        selected ? "border-[#8B5CF6] bg-card"  : " bg-card",
      )}
    >
      <View className="flex-row justify-between">
        <View className="flex-row items-center">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#2A2A40]">
            {address.label === "Home" ? (
              <House color="#8B5CF6" size={22} />
            ) : (
              <BriefcaseBusiness color="#8B5CF6" size={22} />
            )}
          </View>

          <View className="ml-4">
            <Text className="font-poppins-semibold text-lg text-white">
              {address.label}
            </Text>

            <Text className="text-[#8C8CA5]">{address.fullName}</Text>
          </View>
        </View>

        {selected && <CheckCircle2 color="#8B5CF6" fill="#8B5CF6" />}
      </View>

      <View className="mt-5 flex-row">
        <MapPinned size={18} color="#8C8CA5" />

        <Text
          numberOfLines={2}
          className="ml-3 flex-1 leading-6 text-[#B0B0C3]"
        >
          {fullAddress}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
