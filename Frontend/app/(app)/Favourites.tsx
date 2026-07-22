import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import useAuthStore from "../store/authStore";
import { getUserFavoritesMovies } from "../services/getFavouritesMovies.service";
import { Session } from "@supabase/supabase-js";
import { useInfiniteFetch } from "../hooks/useinfiniteFetch";
import FavouriteCardLoader from "../components/Skeletons/FavouriteCardLoader";
import FavoriteCard from "../components/FavouriteCard";
import LoadMoreLoader from "../components/LoadMoreLoader";
import FavouriteCard from "../components/FavouriteCard";

const Favourites = () => {
  const session = useAuthStore((state) => state.session);

  //callbacks

  const fetchUserFavouritesMovies = useCallback(() => {
    return getUserFavoritesMovies(session as Session);
  }, [session]);

  const {
    loading,
    error,
    data: favorites,
    loadMore,
    refresh,
    refreshing,
    loadingMore,
  } = useInfiniteFetch<any>({
    fetchFunction: fetchUserFavouritesMovies,
    enabled: !!session,
  });



  console.log(favorites)
  return (
    <View className="flex flex-1  bg-bg px-4">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 ">
          <View className="w-[100%] h-[60px] mb-4  flex justify-center items-start content-center p-3 ">
            <Text className="text-[30px] font-poppins-bold  text-white  ">
              Favourites
            </Text>
          </View>

       
               <ScrollView className="flex-1">

                 <FlatList
                  data={favorites}
                  onRefresh={refresh}
                  onEndReached={loadMore}
                  keyExtractor={(item) => item._id.toString()}
                  renderItem={({ item }) => <FavouriteCard movie={item.movieId} />}
                  numColumns={1}
                  refreshing={refreshing}

                  ListFooterComponent={loadingMore ? <LoadMoreLoader /> : null}
                    
             
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingTop: 5,
                    paddingBottom: 100,
                  }}
                />

               </ScrollView>
            

         

        </View>
      </SafeAreaView>
    </View>
  );
};

export default Favourites;
