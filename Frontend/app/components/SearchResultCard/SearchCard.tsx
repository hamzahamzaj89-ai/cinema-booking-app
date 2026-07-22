import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Clock3, Search, Star } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInDown,
  FadeOutUp,
} from "react-native-reanimated";
import { searchShowTimeMovies } from "@/app/services/searchShowTimesMovies.services";
import { useBranchStore } from "@/app/store/branchStore";
import { useInfiniteSearch } from "@/app/hooks/useInfiniteSearch";
import LoadMoreLoader from "../LoadMoreLoader";
import { IShowTime } from "@/app/interface/IShowTime";
import Loader from "../Loader";
import { useDebounce } from "@/app/hooks/useDebounce";

const movies = [
  {
    id: "1",
    title: "Dune: Part Two",
    poster:
      "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    genres: ["Sci-Fi", "Adventure"],
    rating: 8.6,
    status: "now_showing",
  },
  {
    id: "2",
    title: "Deadpool & Wolverine",
    poster:
      "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    genres: ["Action", "Comedy"],
    rating: 8.2,
    status: "coming_soon",
  },
  {
    id: "3",
    title: "Mission Impossible",
    poster:
      "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    genres: ["Action", "Thriller"],
    rating: 8.1,
    status: "now_showing",
  },
  {
    id: "4",
    title: "Kung Fu Panda 4",
    poster:
      "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    genres: ["Animation", "Comedy"],
    rating: 7.9,
    status: "now_showing",
  },
  {
    id: "5",
    title: "Mufasa",
    poster:
      "https://image.tmdb.org/t/p/w500/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    genres: ["Adventure", "Drama"],
    rating: 7.8,
    status: "coming_soon",
  },
];

export default function SearchResult({search}: {search:string}) {

  const branch = useBranchStore((state) => state.branch)


  const debounceSearch = useDebounce(search , 2000)

   //useCallbacks 

   const fetchSearchShowTimesMovies = useCallback( (page:number) => {

          return  searchShowTimeMovies(branch?._id , page , debounceSearch)


   } , [branch , debounceSearch])


   //hooks
    
   const {
    data,
    loading,
    loadingMore,
    refresh,
    refreshing,
    loadMore,
} = useInfiniteSearch<IShowTime>({
    fetchFunction: fetchSearchShowTimesMovies,
    enabled: !!branch
});



  return (
<Animated.View
    entering={FadeIn.duration(180)}
    exiting={FadeOut.duration(150)}
       className="absolute left-0 right-0  py-10 pt-6 flex justify-center bg-bg    border-0  px-2 overflow-hidden"   
     style={{ maxHeight: 560, top: 140, zIndex: 9999, }}
>
      {/* Glow */}

    <Animated.View
    entering={FadeInDown.springify()
        
        }
    exiting={FadeOutUp.duration(20)}
    className="flex rounded-2xl"
   
    
>
          
      {/* Handle */}

      

      {/* Header */}

      <View className="flex-row items-center justify-between px-5 pt-5 pb-4">
        <View className="flex-row items-center">
          <Search size={24} color="white" />

          <Text className="ml-3 font-poppins-bold text-2xl text-white">
            Search Results
          </Text>
        </View>

        <Text className="font-poppins mt-1 text-[#8D8DA5]">
          {data.length} Results
        </Text>
      </View>


      {loading && <Loader/>}

     <FlatList
    data={data}
    keyExtractor={(item) => item?._id}
    onEndReached={loadMore}
    onRefresh={refresh}
    refreshing={refreshing}
    ListFooterComponent={loadingMore ? <LoadMoreLoader /> : null}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 18,
    }}
    renderItem={({ item, index }) => (

        <Animated.View
            entering={FadeInDown
                .delay(index * 120)
                .duration(220)}
        >

            <Pressable
                className="mb-4 overflow-hidden rounded-2xl "
                
            >

                <View className="flex-row p-3">

                    <Image
                        source={{
                            uri: `${process.env.EXPO_PUBLIC_TMDB_URL}${item.backdropPath}`,
                        }}
                        className="h-28 w-20 rounded-lg"
                    />

                    <View className="ml-4 flex-1 justify-between">

                        <View>

                            <Text
                                numberOfLines={1}
                                className="font-poppins-semibold text-[18px] text-white"
                            >
                                {item.title}
                            </Text>

                            <Text
                                numberOfLines={1}
                                className="mt-1 font-poppins text-sm text-[#8C8CA6]"
                            >
                                {item.genres.join(" • ")}
                            </Text>

                        </View>

                        <View className="mt-2 flex-row items-center justify-between">

                            <View className="flex-row items-center">

                                <Star
                                    size={15}
                                    color="#FFD54A"
                                    fill="#FFD54A"
                                />

                                <Text className="ml-2 font-poppins-medium text-base text-white">
                                    {item.rating}
                                </Text>

                            </View>

                            <View
                                className={`rounded-full px-4 py-2 ${
                                    item.status === "now_showing"
                                        ? "bg-[#163B27]"
                                        : "bg-[#35214B]"
                                }`}
                            >

                                <Text
                                    className={`font-poppins-semibold text-[11px] ${
                                        item.status === "now_showing"
                                            ? "text-[#46F081]"
                                            : "text-[#D49DFF]"
                                    }`}
                                >
                                    {new Date(item.firstShowTimeStart) > new Date()
                                        ? "coming_soon"
                                        : new Date(item.lastShowTimeStart) > new Date() ? "now_showing" : "no_show"}
                                </Text>

                            </View>

                        </View>

                    </View>

                </View>

            </Pressable>

        </Animated.View>

    )}
 
/>
      </Animated.View>


      
    </Animated.View>
  );
}