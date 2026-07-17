import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Seat from './Seat'
import useBookingStore from '../store/bookingStore'
import { ISeatRow } from '../interface/ISeatLayout'
import { usePriceStore } from '../store/priceStore'
const SeatsGrid = ({seatLayout}: {seatLayout: ISeatRow[]}) => {


  const seats = useBookingStore((state) => state.seats)
  const prices = usePriceStore((state) => state.prices)


    const [Seats , setSeats] = useState<any>([]);


  useEffect(() => {

      setSeats(seats)

  },[seats])


 


  return (
    <View className='flex flex-col gap-y-[3px] w-[100%] h-auto mt-10 px-1 justify-center items-center '>
       {

            seatLayout.map((item , index1) => (

          
              <>
              <View key={index1} className='flex  gap-x-0 flex-row'>

              
              {item.seats.map((seat , index) => (

                      <Seat key={index} item={seat} seats={Seats} prices={prices}/>

              ))}
              
               </View>
             </>


            ))

       }
    </View>
  )
}

export default SeatsGrid