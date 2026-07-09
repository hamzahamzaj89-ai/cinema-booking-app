import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Star,
  Calendar,
  Clock3,
  Ticket,
  BadgeInfo,
  Heart,
} from "lucide-react-native";

import { BlurView } from "expo-blur";
import { router } from "expo-router";
import CustomButton from "./CustomButton";






export default function MovieCard({movie}: {movie:any}) {
  return (
    <View className="w-full flex-col rounded-3xl border border-[#2B2B45] bg-[#141425] p-3">

      {/* Poster */}
      <View className="relative object-cover">
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
          }}
          className="h-[16rem] object-cover rounded-2xl"
          resizeMode="cover"
        />

        <View className="absolute left-2 top-2 rounded-full bg-[#2A2030]/90 px-3 py-2 flex-row items-center">
          <View className="mr-2 h-2.5 w-2.5 rounded-full bg-red-500" />
          <Text className="font-poppins-medium text-xs text-white">
            Now Showing
          </Text>
        </View>


    
         <View className=" absolute right-2 top-0 flex-row items-center rounded-2xl o px-4 py-2">
            <Star size={18} color="#FACC15" fill="#FACC15" />
            <Text className="ml-1 font-poppins-semibold text-lg text-white">
              4.8
            </Text>
          </View>
      </View>

      {/* Right Side */}
      <View className="ml-1 mt-3 flex-1 justify-between">

        {/* Rating */}
        <View className="flex-row justify-end">
         
        </View>

        {/* Movie Info */}
        <View className="w-[100%]">
          <Text  numberOfLines={2} className="font-poppins-bold w-[100%] text-ellipsis text-4xl text-white">
            Oppenheimer
          </Text>

          <Text className="mt-3 font-poppins text-base text-[#9B9BB5]">
            Biography • Drama • History • 3h 0m
          </Text>

          <Text
            numberOfLines={3}
            className="mt-5 leading-7 font-poppins text-base text-[#8C8CA6]"
          >
            The story of J. Robert Oppenheimer's role in the
            development of the atomic bomb during World War II.
          </Text>
        </View>

        {/* Divider */}
        <View className="my-5  h-[1px] bg-[#2B2B45]" />

        {/* Bottom */}
        <View className="flex-row px-2 justify-between items-center ">

          {/* Release */}
          <View className="flex-row  items-center">
            <View className="rounded-2xl bg-[#232338] p-3">
              <Calendar size={20} color="#8B5CF6" />
            </View>

            <View className="ml-3">
              <Text className="font-poppins-medium text-white">
                21 Jul 2023
              </Text>

              <Text className="font-poppins text-xs text-[#8C8CA6]">
                Release Date
              </Text>
            </View>
          </View>

         

          {/* Duration */}
          <View className="flex-row items-center">
            <View className="rounded-full border border-violet-500 p-2">
              <Clock3 size={18} color="#8B5CF6" />
            </View>

            <View className="ml-3">
              <Text className="font-poppins-medium text-white">
                3h 0m
              </Text>

              <Text className="font-poppins text-xs text-[#8C8CA6]">
                Duration
              </Text>
            </View>
          </View>


       
      

        </View>


           <View  className="mt-5 flex flex-row gap-x-2">
                {/* Button */}
          
           <CustomButton Icon={Ticket} onPress={() => router.push("/(pages)/movieDetail")}/>


           <TouchableOpacity
              activeOpacity={0.8}
              className="h-12 w-12 items-center justify-center rounded-lg mb-2  border-[#8B5CF6] bg-[#1B1B31]"
         >
             <Heart
              size={22}
              color="#8B5CF6"
              strokeWidth={2.2}
            />

           </TouchableOpacity>
          </View>

      </View>
    </View>
  );
}