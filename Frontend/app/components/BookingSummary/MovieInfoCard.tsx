import React from "react";
import { Image, Text, View } from "react-native";
import {
  Clock3,
  Star,
} from "lucide-react-native";
import { convertMinutes } from "@/app/utils/convertingDate";

interface Props {
  poster: string;
  title: string;
  genre: String[];
  rating: number;
  runtime: number;
}

export default function MovieInfoCard({
  poster,
  title,
  genre,
  rating,
  runtime,
}: Props) {


    

  return (
    <View className="mx-1 rounded-xl rounded-tr-none bg-field ">

      <View className="flex-row  ">

        {/* Poster */}

        <Image
          source={{
            uri: poster,
          }}
          className=" h-36 rounded-tl-xl  rounded-bl-"
           style={{ aspectRatio: 2.3 / 3 }}
          resizeMode="cover"
        />

        {/* Details */}

        <View className="ml-2 flex-1 justify-between p-3 pl-1">

          <View>

            <Text
              numberOfLines={1}
              className="font-poppins-bold text-2xl text-white"
            >
              {title}
            </Text>

               <View  className="flex flex-row  flex-nowrap gap-2 pr-3">
                
            {
              genre.slice(0, 3).map((text) => (
                  <>
                    <Text className="mt-0  text-sm text-text font-poppins">
             • {text}
            </Text>  
                  
                  </>
              ))
            }
               </View>

            

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
              color="#3b82f6"
              style={{
                marginBottom: 2
              }}
            />

            <Text className="ml-2 font-poppins text-text mt-[2px]">
              {convertMinutes(runtime)}
            </Text>

          </View>

        </View>

      </View>

    </View>
  );
}