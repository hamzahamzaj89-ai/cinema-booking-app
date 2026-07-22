import { Heart, Star } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IShowTime } from "../interface/IShowTime";
import { convertMinutes } from "../utils/convertingDate";

export default function FavouriteCard({movie}: {movie:IShowTime}) {


    const fullYear = new Date(movie.releaseDate).getFullYear()
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="mb-4 flex-row overflow-hidden p-4 py-4 rounded-2xl bg-field"
    >
      {/* Poster */}
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_TMDB_URL}${movie.backdropPath}`,
        }}
        className="h-full w-28 rounded-lg"
        resizeMode="cover"
      />

      {/* Content */}
      <View className="flex-1 justify-between  pl-3 py-3 pt-2">
        <View className="relative top-[-20px]">
           <View className="relative top-[-10px]">
             <View className="flex-row items-start justify-between">
            <Text
              numberOfLines={1}
              className="flex-1 pr-3  font-poppins-semibold text-lg text-white"
            >
              {movie.title}
            </Text>

            <Heart
              size={20}
              color=""
              fill="#3b82f6"
              style={{
                marginTop: 4
              }}
            />
          </View>

          <View className="mt-1 flex-row items-center">
            <Star
              size={14}
              color="#FACC15"
              fill="#FACC15"
            />

            <Text className="ml-1 text-xs font-medium text-[#FACC15]">
              {movie.rating}
            </Text>

            <Text className="mx-2 text-gray-500">•</Text>

            <Text className="text-xs text-gray-400">
               {fullYear}
            </Text>

            <Text className="mx-2 text-gray-500">•</Text>

            <Text className="text-xs text-gray-400">
              {convertMinutes(movie.runtime)}
            </Text>
          </View>

          <View className="mt-1 mb-2 flex-row flex-wrap text-text ">
             <Text numberOfLines={1} className="text-text text-xs  font-poppins">
                • {movie.genres.slice(0,3).join("  • ")}
             </Text>
          </View>
           </View>

          <Text
            numberOfLines={2}
            className="mt-2 text-xs leading-5 text-gray-400"
          >
           {movie.overview}
          </Text>
        </View>

       
      </View>
    </TouchableOpacity>
  );
}