import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function MovieCardSkeleton() {
  return (
    <View className="w-full rounded-3xl border border-[#2B2B45] bg-[#141425] p-3">

      {/* Poster */}

      <View className="relative">

        <Skeleton
          width="100%"
          height={256}
          borderRadius={18}
        />

        {/* Status Badge */}

        <View className="absolute left-3 top-3">
          <Skeleton
            width={90}
            height={32}
            borderRadius={20}
          />
        </View>

        {/* Rating */}

        <View className="absolute right-3 top-3">
          <Skeleton
            width={55}
            height={28}
            borderRadius={14}
          />
        </View>

      </View>

      {/* Content */}

      <View className="mt-5">

        {/* Movie Title */}

        <Skeleton
          width="85%"
          height={38}
          borderRadius={10}
        />

        {/* Genres */}

        <View className="mt-5 flex-row">
          <Skeleton
            width={70}
            height={16}
            borderRadius={8}
          />

          <View className="ml-3">
            <Skeleton
              width={80}
              height={16}
              borderRadius={8}
            />
          </View>

          <View className="ml-3">
            <Skeleton
              width={65}
              height={16}
              borderRadius={8}
            />
          </View>
        </View>

        {/* Overview */}

        <View className="mt-6">

          <Skeleton
            width="100%"
            height={14}
            borderRadius={8}
          />

          <View className="mt-3" />

          <Skeleton
            width="95%"
            height={14}
            borderRadius={8}
          />

          <View className="mt-3" />

          <Skeleton
            width="80%"
            height={14}
            borderRadius={8}
          />

        </View>

      </View>

      {/* Divider */}

      <View className="my-6 h-[1px] bg-[#2B2B45]" />

      {/* Bottom Info */}

      <View className="flex-row justify-between">

        {/* Release */}

        <View className="flex-row items-center">

          <Skeleton
            width={46}
            height={46}
            borderRadius={16}
          />

          <View className="ml-3">

            <Skeleton
              width={90}
              height={15}
            />

            <View className="mt-2" />

            <Skeleton
              width={65}
              height={12}
            />

          </View>

        </View>

        {/* Duration */}

        <View className="flex-row items-center">

          <Skeleton
            width={42}
            height={42}
            borderRadius={21}
          />

          <View className="ml-3">

            <Skeleton
              width={70}
              height={15}
            />

            <View className="mt-2" />

            <Skeleton
              width={55}
              height={12}
            />

          </View>

        </View>

      </View>

      {/* Buttons */}

      <View className="mt-6 flex-row items-center">

        <Skeleton
          width="82%"
          height={48}
          borderRadius={12}
        />

        <View className="ml-3">

          <Skeleton
            width={48}
            height={48}
            borderRadius={12}
          />

        </View>

      </View>

    </View>
  );
}