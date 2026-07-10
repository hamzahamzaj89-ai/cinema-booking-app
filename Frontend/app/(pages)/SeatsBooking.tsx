import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CurvedScreen from '../components/CurvedScreen'
import SeatIndicator from '../components/SeatIndicator'
import SeatsGrid from '../components/SeatsGrid'
import SeatSummary from '../components/SeatSummary'
import CustomButton from '../components/CustomButton'
import { BadgeCheck } from 'lucide-react-native'
import { router } from 'expo-router'

const SeatsBooking = () => {
  return (
    <View className='bg-bg flex-1 relative pt-5'>

      
            <ScrollView
            showsVerticalScrollIndicator={false}
              
            contentContainerStyle={{
              paddingBottom: 0,
            }}
          >
      <SafeAreaView>
            
              
          <CurvedScreen/>

          <SeatIndicator/>
       

          <SeatsGrid/>

          <SeatSummary/>

             <View className='w-[100%] flex justify-center items-center mt-6'>
                      <CustomButton Icon={BadgeCheck } onPress={() => router.push("/(pages)/BookingSummary")}/>

             </View>

      </SafeAreaView>

      </ScrollView>
    </View>
  )
}

export default SeatsBooking