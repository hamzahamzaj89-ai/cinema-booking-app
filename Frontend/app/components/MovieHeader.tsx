import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateCarousel from '../components/DateCarousel'
import { LinearGradient } from "expo-linear-gradient";

const MovieHeader = () => {
  return (
    
 

      

        
        <View className='w-[100%] h-[45vh]  rounded-lg overflow-hidden '>
             
              <ImageBackground
          source={{
            uri: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
          }}
          className="h-[100%] object-cover rounded-xl "
          resizeMode="cover"
        >



            <LinearGradient
           colors={[
             "#0B0C1B",
            "rgba(11,12,27,0.96)",
    "rgba(12,14,32,0.88)",
    "rgba(14,16,36,0.72)",
    "rgba(18,20,42,0.50)",
    "rgba(22,24,48,0.28)",
    "rgba(25,28,56,0.12)",
    "transparent",
  ]}
  locations={[0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1]}
  start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            className="absolute inset-0"
            />

         
        <View className='flex flex-col text-white font-poppins absolute p-4 top-[75%] gap-y-1 '>
              <Text className='text-white font-poppins-bold font-bold text-[1.9rem] ' numberOfLines={1} >Deadpool & Wolverine</Text>
               


               <View className='text-white flex flex-row gap-x-3 z-[9999] '>
                    <Text className='text-white'>• Action,comedy</Text>
                     <Text className='text-white'>• UA</Text>
                    <Text className='text-white'>• 2h 7m</Text>
                   
               </View>
        </View>


        </ImageBackground>

        </View>

      
    


    
  )
}

export default MovieHeader