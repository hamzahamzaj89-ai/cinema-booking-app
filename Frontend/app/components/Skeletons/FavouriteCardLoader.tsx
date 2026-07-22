import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

export default function FavouriteCardLoader() {
  return (
    <View className="mb-4 flex-row overflow-hidden rounded-2xl bg-field">
      {/* Poster */}
      <Skeleton
        width={112}
        height={160}
        borderRadius={0}
      />

      {/* Content */}
      <View className="flex-1 justify-between px-4 py-3">
        <View>
          {/* Title + Heart */}
          <View className="flex-row items-start justify-between">
            <Skeleton
              width={170}
              height={20}
              borderRadius={6}
            />

            <Skeleton
              width={20}
              height={20}
              borderRadius={10}
            />
          </View>

          {/* Rating Row */}
          <View className="mt-3 flex-row items-center">
            <Skeleton
              width={80}
              height={12}
              borderRadius={6}
            />

            <View className="ml-3">
              <Skeleton
                width={55}
                height={12}
                borderRadius={6}
              />
            </View>

            <View className="ml-3">
              <Skeleton
                width={60}
                height={12}
                borderRadius={6}
              />
            </View>
          </View>

          {/* Genres */}
          <View className="mt-3">
            <Skeleton
              width={140}
              height={12}
              borderRadius={6}
            />
          </View>

          {/* Description */}
          <View className="mt-3">
            <Skeleton
              width={"100%"}
              height={12}
              borderRadius={6}
            />

            <View className="mt-2">
              <Skeleton
                width={"80%"}
                height={12}
                borderRadius={6}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}