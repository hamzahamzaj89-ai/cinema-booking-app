import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IShowTime } from '../interface/IShowTime'
import { IScreen, IScreenShowTime } from '../interface/IShowTimeDetail'

const useShowTime = (showTime:IShowTime) => {


     const [dates , setDates] = useState<string[] | []>([])
     const [times , setTimes] = useState<IScreen[] | []>([])
     const [screen , setScreen] = useState<IScreenShowTime[] | []>([])




    const convertData = () => {
        
        



       

    }




   useEffect(() => {

         if (!showTime) {
                  return
         }


         convertData()
   } , [showTime,  ])






}

export default useShowTime