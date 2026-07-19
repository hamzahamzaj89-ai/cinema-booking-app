import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function BranchCardSkeleton() {
  return (
    <View className="mx-0 mb-4  flex-row justify-between w-[100%] items-center rounded-2xl  bg-[#0c0c1f] p-4 pr-12">

      <View className="flex flex-row gap-x-1">


         <View className="ml-1">
        <Skeleton
          width={48}
          height={48}
          borderRadius={14}
        />
      </View>

      <View className="ml-2 mt-1 flex-1">

        <Skeleton
          width={150}
          height={14}
        />

        <View className="mt-3" />

        <Skeleton
          width="70%"
          height={12}
        />

      </View>

      </View>

      <Skeleton
        width={28}
        height={28}
        borderRadius={14}
      />

     

    </View>
  );
}