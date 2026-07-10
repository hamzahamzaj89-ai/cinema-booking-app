import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
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

const movieDetail = () => {
  return (

    <SafeAreaView
  edges={["bottom"]}
  className="flex-1 bg-[#0B0C1B]"
>
    <View className='w-[100%] relative h-[100%] bg-bg  pt-0 overflow-hidden  '> 
 

        <MovieHeader/>



        <View className='pt-0'></View>

      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
      }}
      contentContainerStyle={{
        paddingBottom: 0,
      }}
    >
      <View className=' flex gap-y-2 p-4 pr-0'>
         
         <View  className='pl-0'>

             <Text className='text-white font-poppins-bold text-[1.3rem] '>Select Date</Text>
         </View>


         <DateCarousel/>

      </View>



    

         
          <View className=' flex gap-y-2 p-4 pt-2 pr-0'>
         
         <View  className='pl-0 flex flex-col gap-y-2'>

             <Text className='text-white font-poppins-bold text-[1.3rem] '>Select Time</Text>

               <TimeCarousel/>
         </View>


      </View>


    

        <View className=' flex gap-y-2 p-4 pt-2 pr-0'>
         
         <View  className='pl-0 flex flex-col gap-y-2'>

             <Text className='text-white font-poppins-bold text-[1.3rem] '>Select Screen</Text>

               <ScreenCarousel/>
         </View>


      </View>

     

       
      
    
     </ScrollView>

           <View className='flex justify-center content-center mb- w-[100%] items-center mt-4 px-4 '>

                    <CustomButton Icon={Armchair} onPress={() => router.push("/(pages)/SeatsBooking")}/>

            
            
            </View>    
    </View>


    </SafeAreaView>
  )
}

export default movieDetail