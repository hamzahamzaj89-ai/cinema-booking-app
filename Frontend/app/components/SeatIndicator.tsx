import { View, Text } from 'react-native'
import React from 'react'

const SeatIndicator = () => {
  return (
<View className="flex-row justify-center gap-6 mt-6">

    <View className="flex-row items-center">
        <View className="w-4 h-4 rounded bg-slate-600 mr-2"/>
        <Text className="text-white">Available</Text>
    </View>

    <View className="flex-row items-center">
        <View className="w-4 h-4 rounded bg-blue-500 mr-2"/>
        <Text className="text-white">Selected</Text>
    </View>

    <View className="flex-row items-center">
        <View className="w-4 h-4 rounded bg-red-500 mr-2"/>
        <Text className="text-white">Booked</Text>
    </View>

    <View className="flex-row items-center">
        <View className="w-4 h-4 rounded bg-amber-400 mr-2"/>
        <Text className="text-white">VIP</Text>
    </View>

</View>
  )
}

export default SeatIndicator