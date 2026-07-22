import {
  BriefcaseBusiness,
  CheckCircle2,
  Circle,
  CircleCheck,
  House,
  MapPinned,
} from "lucide-react-native";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Address } from "../../types/address";
import clsx from "clsx";
import { IAddress } from "@/app/interface/IAddress";

interface Props {
  address: IAddress;
  selected: boolean;
  onPress: () => void;
}

export default function AddressCard({ address, selected, onPress }: Props) {
  const fullAddress = `${address.address}, ${address.city}, Pakistan`;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className={clsx(
        "mb-4 rounded-xl  p-5 ",

        selected ? " bg-field"  : " bg-field",
        selected ? " border-[3px] border-blue-500": ""
      )}
    >
      <View className="flex-row justify-between">
        <View className="flex-row items-center">
          <View className=" items-center justify-center rounded-2xl bg-">
            {address.label === "Home" ? (
              <House color="#3b82f6" size={32} />
            ) : (
              <BriefcaseBusiness color="#3b82f6" size={32} />
            )}
          </View>

          <View className="ml-4">
            <Text className="font-poppins-semibold text-lg text-white">
              {address.label}
            </Text>

            <Text className="text-[#8C8CA5]">{address.fullName}</Text>
          </View>
        </View>

        {selected ?
<CircleCheck
  size={28}
  color="#3b82f6"
  strokeWidth={2.5}
/>  : <Circle
  size={28}
  color="#3b82f6"
/>}
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
