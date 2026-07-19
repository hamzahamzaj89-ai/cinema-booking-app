import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Building2, Check, MapPin } from "lucide-react-native";
import clsx from "clsx";
import { IBranch } from "@/app/interface/IBranch";
import { GestureResponderEvent } from "react-native-modal";


interface BranchCardProps {
  branch: IBranch;
  selected: boolean;
  onPress : (branch:IBranch)=> void
}

export default function BranchCard({
  branch,
  selected,
  onPress
}: BranchCardProps) {






  return (

    <TouchableOpacity
      activeOpacity={0.9}
      onPress={(event: GestureResponderEvent) => {onPress(branch)}}
      className={  clsx(
        "flex-row items-center  rounded-2xl border  px-4 py-4",
          selected  ? "border-[#4F8CFF] border-[2px]  bg-[#0c0c1f]" : "border-[#1c2558] border-0 bg-[#151726] bg-[#0c0c1f]"
      )}
    >
      {/* Branch Icon */}

      <View className="px-3 py-3 items-center justify-center rounded-md bg-[#24273B]/30">
        <Building2
          size={22}
          color="#8B5CF6"
        />
      </View>

      {/* Information */}

      <View className="ml-2 flex-1">
        <Text
          numberOfLines={1}
          className="font-poppins-semibold text-[16px] text-white"
        >
          {branch.name}
        </Text>

        <View className="mt-1 flex-row items-center">
          <MapPin
            size={14}
            color="#8B5CF6"
            style={{
                marginBottom: 3
            }}
          />

          <Text
            numberOfLines={1}
            className="ml-2 flex-1 font-poppins text-[13px] text-text"
          >
            {branch.location}, {branch.city}
          </Text>
        </View>
      </View>

      {/* Selection */}

      <View
        className={`h-7 w-7 items-center justify-center rounded-full border-2 ${
          selected
            ? "border-[#4F8CFF] "
            : "border-[#6B7280]"
        }`}
      >
        {selected && (
          <Check
            size={14}
            color="white"
            strokeWidth={3}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}