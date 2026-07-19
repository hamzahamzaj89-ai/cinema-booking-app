import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateCarousel from '../components/DateCarousel'
import { LinearGradient } from "expo-linear-gradient";
import MovieHeader from '../components/MovieHeader';
import Divider from '../components/Divider';
import { TimeCarousel } from '../components/TimeCarousel';
import { ScreenCarousel } from '../components/ScreenCarousel';
import CustomButton from '../components/CustomButton';
import { Armchair } from 'lucide-react-native';
import { router } from 'expo-router';
import { useFetch } from '../hooks/useFetch';
import { getShowTimes } from '../services/showTime.service';
import { useBranchStore } from '../store/branchStore';
import useMovieStore from '../store/movieStore';
import { IShowTimeByDate } from '../interface/IShowTimeDetail';
import Loader from '../components/Loader';
import { useShowtimes } from '../hooks/useShowTimes';
import useShowTime from '../hooks/useShowTime';
import { usePriceStore } from '../store/priceStore';
import useBookingStore from '../store/bookingStore';

const movieDetail = () => {


    const branch = useBranchStore((state) => state.branch )
    const movie =useMovieStore((state) => state.selectedMovie)
    const time = useBookingStore((state) => state.time)

    //callbacks
    const fetchShowTimes = useCallback(() => {
    return getShowTimes(branch?._id , movie?._id );
}, [branch?._id, movie?._id]);





 //hooks
    const {data:showTimes , loading , error } = useFetch<IShowTimeByDate>({fetchFunction:fetchShowTimes , enabled: (!!branch && !!movie)})


          



        if (loading) {
               return <Loader/>
        } 

     






        const handleSeatBoking = () => {



           router.push("/(pages)/SeatsBooking")

        }




  return (

    <SafeAreaView
  edges={["bottom"]}
  className="flex-1 bg-[#0B0C1B]"
>
    <View className='w-[100%] relative h-[100%] bg-bg  pt-0 overflow-hidden  '> 
 

        <MovieHeader movie={movie}/>



        <View className='pt-0'></View>
      {showTimes.length > 0 && (
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
      }}
      contentContainerStyle={{
        paddingBottom: 0,
      }}
    >


        {showTimes.length > 0 && (<View className=' flex gap-y-2 p-4 pr-0'>
         
         <View  className='pl-0'>

             <Text className='text-white font-poppins-bold text-[1.3rem] '>Select Date</Text>
         </View>


         <DateCarousel showTimes={showTimes}/>

      </View>)}



    

         
          <View className=' flex gap-y-2 p-4 pt-2 pr-0'>
         
         <View  className='pl-0 flex flex-col gap-y-2'>

             <Text className='text-white font-poppins-bold text-[1.3rem] '>Select Time</Text>

               <TimeCarousel showTimes={showTimes}/>
         </View>


      </View>


    

        <View className=' flex gap-y-2 p-4 pt-2 pr-0'>
         
         <View  className='pl-0 flex flex-col gap-y-2'>

             <Text className='text-white font-poppins-bold text-[1.3rem] '>Select Screen</Text>

               <ScreenCarousel showTimes={showTimes}/>
         </View>


      </View>

     

       
      
    
     </ScrollView>)}

           <View className='flex justify-center content-center mb-8 w-[100%] items-center mt-0 px-4 '>

                    <CustomButton Icon={Armchair} onPress={() => handleSeatBoking()}/>

            
            
            </View>    
    </View>


    </SafeAreaView>
  )
}

export default movieDetail