import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import clsx from 'clsx';

const Category = ({selectedCategory, setSelectedCategory}: {selectedCategory:String , setSelectedCategory:any}) => {


    const movieGenres = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
  "Romance",
  "Adventure",
  "Fantasy",
  "Animation",
];




  return (
    <View className='flex flex-col gap-y-2 pl-2 mt-[20px] mb-[10px] '>


        <View className='w-[100%] flex px-1 justify-start content-start'>
          
          <Text className='font-bold text-white text-[1.3rem] font-poppins'>Genre</Text>

        </View>


        <FlatList
      data={movieGenres}
      horizontal={true}
         style={{
          marginTop: 4,
         }}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Pressable onPress={() => setSelectedCategory(item)} className={clsx("bg-field px-5 h-10 rounded-lg items-center justify-center   mr-3 ",
            selectedCategory === item &&  'bg-none bg-blue-500',

        )}>
            
            <Text className={`  text-primaryText    ${(selectedCategory === item) && 'text-white'} `}>
                {item}
            </Text>
          
            
        </Pressable>
      )}
    />
    </View>
  )
}

export default Category