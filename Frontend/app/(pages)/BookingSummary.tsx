import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieInfoCard from '../components/BookingSummary/MovieInfoCard'
import BookingDetailCard from '../components/BookingSummary/BookingDetailCard'
import PaymentDetailCard from '../components/BookingSummary/PaymentDetailCard'
import CustomButton from '../components/CustomButton'
import { CreditCard } from 'lucide-react-native'
import { router } from 'expo-router'

const BookingSummary = () => {
  return (
    <View className='flex-1 bg-bg p-4'>
   

   <ScrollView 
      showsVerticalScrollIndicator={false}
   >


      <SafeAreaView>



        <MovieInfoCard
          title='Deadpool & Wolverine'
          poster="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
          genre="• Action • comedy"
          rating= {4}
          runtime='2h 35min'


        
        />




          <BookingDetailCard/>


         <PaymentDetailCard/>
        



            <View className='flex flex-row mt-6  justify-center items-center'>

               <CustomButton
            Icon={CreditCard}
            onPress={() => router.push("/(pages)/AddressPage")}
          />
            </View>
      </SafeAreaView>

   </ScrollView>


    </View>
  )
}

export default BookingSummary