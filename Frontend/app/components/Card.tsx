import { View, Text, Image } from 'react-native'
import React from 'react'

const Card = ({image}:{image:string}) => {
  return (
    <View  className=' w-[160px] h-[240px] rounded-xl  '>


     <Image source={{uri: image}}  className='w-full h-full bg-red-700 rounded-lg '  />
          
           
    


    </View>
  )
}

export default Card