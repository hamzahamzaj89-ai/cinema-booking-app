import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieInfoCard from '../components/BookingSummary/MovieInfoCard'
import BookingDetailCard from '../components/BookingSummary/BookingDetailCard'
import PaymentDetailCard from '../components/BookingSummary/PaymentDetailCard'
import CustomButton from '../components/CustomButton'
import { CreditCard } from 'lucide-react-native'
import { router } from 'expo-router'
import useMovieStore from '../store/movieStore'

const BookingSummary = () => {

  const selectedMovie = useMovieStore((state) => state.selectedMovie)

  




  const handleAddressPage = () => {

     
         


    router.push("/(pages)/AddressPage")


  }



  
  return (
    <View className='flex-1 bg-bg p-4'>
   

   <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{
        marginBottom: 40
      }}
   >


      <SafeAreaView>



        <MovieInfoCard
          title= {`${selectedMovie?.title}`}
          poster={`${process.env.EXPO_PUBLIC_TMDB_URL}${selectedMovie?.backdropPath}`}
          genre={selectedMovie?.genres as string[]}
          rating= {selectedMovie?.rating as number}
          runtime={selectedMovie?.runtime as number}
        />




          <BookingDetailCard/>


         <PaymentDetailCard/>
        



            <View className='flex flex-row mt-6  justify-center items-center'>

               <CustomButton
            Icon={CreditCard}
            onPress={() => handleAddressPage()}
          />
            </View>
      </SafeAreaView>

   </ScrollView>


    </View>
  )
}

export default BookingSummary