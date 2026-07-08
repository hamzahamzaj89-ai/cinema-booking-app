import { View, Text, Image } from 'react-native'
import React from 'react'
import { Star } from 'lucide-react-native'

const MovieHeader = () => {
  return (
    <View className="mx-5 mt-6 flex-row rounded-3xl bg-[#141425] p-4">

    <Image
        source={{uri: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",}}
        className="h-32 w-24 rounded-2xl"
        resizeMode='cover'
    />

    <View className="ml-4 flex-1 justify-center">

        <Text className="font-poppins-bold text-2xl text-white">
            Oppenheimer
        </Text>

        <View className="mt-2 flex-row items-center">

            <Star
                size={16}
                color="#FFD54F"
                fill="#FFD54F"
            />

            <Text className="ml-2 font-poppins-semibold text-white">
                4.8
            </Text>

        </View>

        <Text className="mt-3 font-poppins text-[#9B9BB5]">
            Biography • Drama • History
        </Text>

    </View>

</View>


  )
}

export default MovieHeader