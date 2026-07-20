import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import CustomCarousel from "../components/CustomCarousel";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import CustomButton from "../components/CustomButton";
import MovieCard from "../components/movieCard";
import { useShowtimes } from "../hooks/useShowTimes";
import Loader from "../components/Loader";
import { useInitializeBranch } from "../hooks/useInitializeBranch";
import BranchSelectionModal from "../components/BranchSelectionModal/BranchSelectionModal";
import { useBranchStore } from "../store/branchStore";
import { getShowTimesMovies } from "../services/showTimes.services";
import { useFetch } from "../hooks/useFetch";
import { IShowTime } from "../interface/IShowTime";
import MovieCardSkeleton from "../components/Skeletons/MovieCardSkeleton";
import ShowTimeFilterModal from "../components/Filter/ShowTimeFilterModal";
import { useInfiniteFetch } from "../hooks/useinfiniteFetch";
import LoadMoreLoader from "../components/LoadMoreLoader";
import SearchResult from "../components/SearchResultCard/SearchCard";

const Home = () => {
  useInitializeBranch();
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<String>("Action");
  const branch = useBranchStore((state) => state.branch);
  const [visible, setVisible] = useState(false);
  const [searchInput , setSearchInput] = useState<string>("")

  //calBacks

  const fetchShowTimeMovies = useCallback(
    (page: number) => {
      return getShowTimesMovies(branch?._id, page);
    },
    [branch?._id],
  );

  const {
    data: showTimesMovies,

    loading,

    loadingMore,

    loadMore,

    refresh,

    refreshing,
  } = useInfiniteFetch<IShowTime>({
    fetchFunction: fetchShowTimeMovies,
  });

  if (loading) {
    <Loader />;

    return;
  }

  

  return (
    <>
      <View className="flex flex-1  bg-bg">
        <SafeAreaView style={{ flex: 1 }}>
          <View className="w-full" style={{ flex: 1 }}>
            <Header onPress={() => setVisible(true)} />
                    {searchInput.trim() !== "" && <SearchResult/>}


            {loading && (
              <>
                <ScrollView
                  className="p-5 mb-10"
                  style={{ paddingBottom: 220, flex: 1 }}
                >
                  <SearchBar onChangeText={(text) => setSearchInput(text)} onPress={() => setFilterVisible(true)} />
                  <Category
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />

                  <View className="mt-4"></View>
                  <MovieCardSkeleton />
                  <View className="mb-24"></View>
                </ScrollView>
              </>
            )}

            {!loading && (
              <>
                <FlatList
                  data={showTimesMovies}
                  onRefresh={refresh}
                  onEndReached={loadMore}
                  keyExtractor={(item) => item._id.toString()}
                  renderItem={({ item }) => <MovieCard movie={item} />}
                  numColumns={1}
                  refreshing={refreshing}

                  ListFooterComponent={loadingMore ? <LoadMoreLoader /> : null}
                    
                  ListHeaderComponent={
                    <>
                      <SearchBar onChangeText={(text) => setSearchInput(text)}  onPress={() => setFilterVisible(true)} />
                       
                      <Category
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </>
                  }
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    paddingBottom: 100,
                    gap: 16,
                  }}
                />
              </>
            )}
          </View>
        </SafeAreaView>
      </View>

      <BranchSelectionModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />

      <ShowTimeFilterModal
        visible={filterVisible}
        onClose={() => {
          setFilterVisible(false);
        }}
      />
    </>
  );
};

export default Home;
