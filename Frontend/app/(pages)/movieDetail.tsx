import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateCarousel from '../components/DateCarousel'

const movieDetail = () => {
  return (
    <View className='w-[100%] h-[100%] bg-bg'> 

     <SafeAreaView style={{flex: 1}}>
 
    <DateCarousel/>
 


     </SafeAreaView>
    </View>
  )
}

export default movieDetail