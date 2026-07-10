import { View, Text } from 'react-native'
import React from 'react'
import useBookingStore from '@/app/store/bookingStore'
import { Armchair } from 'lucide-react-native'

const SelectedSeats = () => {


    const seats = useBookingStore((state) => state.seats)


  return (
    <View>

        {
         
        seats.map((item , index) => (

            <>
            
         <View className="mb-0 flex-row items-center">
        <View className="h-8 w-8 items-center justify-center rounded-xl bg-[#8B5CF6]/15">
          <Armchair
            size={22}
            color="#8B5CF6"
          />
        </View>

        <Text className="ml-3 font-poppins-bold text-[1.1rem] text-lg text-text">
          Seat Summary
        </Text>
      </View>
            
            </>
        ))


        }
    </View>
  )
}

export default SelectedSeats