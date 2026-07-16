import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from "react-native-reanimated-carousel";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import CustomCarousel from '../components/CustomCarousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import CustomButton from '../components/CustomButton';
import MovieCard from '../components/movieCard';
import { useShowtimes } from '../hooks/useShowTimes';
import Loader from '../components/Loader';
import { useInitializeBranch } from '../hooks/useInitializeBranch';

const Home = () => {

    useInitializeBranch()

    const [selectedCategory , setSelectedCategory] = useState<String>("Action");
    
   

    const {loading , error , showTimesMovies } = useShowtimes();
    
      

    if (loading) {
         
      <Loader/>

        return 
    }


  return (
         <View className='flex flex-1  bg-bg' >
      <SafeAreaView style={{ flex: 1 }}>
         <View className='w-full' style={{ flex: 1,  }}>
            <Header/>


            <FlatList
    data={showTimesMovies}
    keyExtractor={(item) => item._id.toString()}
    renderItem={({ item }) => <MovieCard movie={item} />}
     numColumns={1}
    ListHeaderComponent={
      <>

       
        <SearchBar />
          <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>


            
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




         </View>
      </SafeAreaView>
    </View>
  )
}

export default Home