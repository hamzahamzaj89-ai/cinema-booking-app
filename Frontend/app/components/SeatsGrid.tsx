import { View, Text } from 'react-native'
import React from 'react'
import {seatLayout} from "../data/Seats"
import Seat from './Seat'
const SeatsGrid = () => {
  return (
    <View className='flex flex-col gap-y-[3px] w-[100%] h-auto mt-10 px-1 justify-center items-center '>
       {

            seatLayout.map((item , index1) => (

          
              <>
              <View key={index1} className='flex  gap-x-0 flex-row'>

              
              {item.seats.map((seat , index) => (

                      <Seat key={index} item={seat}/>

              ))}
              
               </View>
             </>


            ))

       }
    </View>
  )
}

export default SeatsGrid