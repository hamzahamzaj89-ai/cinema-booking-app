import React from "react";
import { View } from "react-native";

import Skeleton from "./Skeleton";

export default function AddressCardLoader() {
  return (
    <View className="mb-4 rounded-xl bg-field p-5">
      {/* Header */}
      <View className="flex-row justify-between">
        <View className="flex-row items-center">
          {/* Icon */}
          <Skeleton
            width={32}
            height={32}
            borderRadius={16}
          />

          <View className="ml-4">
            {/* Label */}
            <Skeleton
              width={90}
              height={18}
              borderRadius={6}
            />

            <View className="mt-2">
              {/* Name */}
              <Skeleton
                width={120}
                height={14}
                borderRadius={6}
              />
            </View>
          </View>
        </View>

        {/* Selected Circle */}
        <Skeleton
          width={28}
          height={28}
          borderRadius={14}
        />
      </View>

      {/* Address */}
      <View className="mt-5 flex-row">
        {/* Location Icon */}
        <Skeleton
          width={18}
          height={18}
          borderRadius={9}
        />

        <View className="ml-3 flex-1">
          <Skeleton
            width={"100%"}
            height={14}
            borderRadius={6}
          />

          <View className="mt-2">
            <Skeleton
              width={"75%"}
              height={14}
              borderRadius={6}
            />
          </View>
        </View>
      </View>
    </View>
  );
}