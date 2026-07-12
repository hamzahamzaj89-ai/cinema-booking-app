import React from "react";
import { Image, Text, View } from "react-native";
import {
  Clock3,
  Star,
} from "lucide-react-native";

interface Props {
  poster: string;
  title: string;
  genre: string;
  rating: number;
  runtime: string;
}

export default function MovieInfoCard({
  poster,
  title,
  genre,
  rating,
  runtime,
}: Props) {


  return (
    <View className="mx-1 rounded-xl bg-field p-3">

      <View className="flex-row ">

        {/* Poster */}

        <Image
          source={{
            uri: poster,
          }}
          className="h-36 w-28 rounded-lg"
          resizeMode="cover"
        />

        {/* Details */}

        <View className="ml-3 flex-1 justify-between">

          <View>

            <Text
              numberOfLines={2}
              className="font-poppins-bold text-2xl text-white"
            >
              {title}
            </Text>

            <Text className="mt-1 text-sm text-text font-poppins">
              {genre}
            </Text>

          </View>

          {/* Rating */}

          <View className="flex-row items-center">

            <Star
              size={18}
              color="#FBBF24"
              fill="#FBBF24"
            />

            <Text className="ml-[4px] mt-[1px] font-poppins text-text">
              {rating}
            </Text>

            <Text className="ml-[6px] mt-[1px] text-text font-poppins">
              IMDb
            </Text>

          </View>

          {/* Runtime */}

          <View className="flex-row items-center">

            <Clock3
              size={17}
              color="#8B5CF6"
            />

            <Text className="ml-2 font-poppins text-text mt-[2px]">
              {runtime}
            </Text>

          </View>

        </View>

      </View>

    </View>
  );
}