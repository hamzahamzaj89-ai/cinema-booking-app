import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <View className='w-[100%] flex justify-center content-center items-center'>

         <TouchableOpacity className='w-[92%] p-[12px] flex justify-center items-center rounded-lg bg-primaryDark '>

             <Text className='font-bold text-black text-[15px] '>
                Filter
             </Text>
              

         </TouchableOpacity>
     </View>
  )
}

export default CustomButton