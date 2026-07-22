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
import useAuthStore from '../store/authStore'

const BookingSummary = () => {

  const selectedMovie = useMovieStore((state) => state.selectedMovie)

   const session = useAuthStore((state) => state.session)




  const handleAddressPage = () => {
    

    
      
     
    router.push("/(pages)/AddressPage")


  }



  
  return (
    <View className='flex-1 bg-bg p-4 pb-0'>
   

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
        


       


           
      </SafeAreaView>

          </ScrollView>



 <View className='flex flex-row mt-0 relative bottom-10  justify-center items-center'>

               <CustomButton
            Icon={CreditCard}
            onPress={() => handleAddressPage()}
          />
            </View>


    </View>
  )
}

export default BookingSummary