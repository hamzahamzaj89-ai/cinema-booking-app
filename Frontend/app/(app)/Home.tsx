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
import { movies } from '../data/movieData';
import MovieCard from '../components/movieCard';

const Home = () => {

    const [selectedCategory , setSelectedCategory] = useState<String>("Action");

 

  return (
         <View className='flex flex-1  bg-bg' >
      <SafeAreaView style={{ flex: 1 }}>
         <View className='w-full' style={{ flex: 1,  }}>
            <Header/>


            <FlatList
    data={movies}
    keyExtractor={(item) => item.id.toString()}
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