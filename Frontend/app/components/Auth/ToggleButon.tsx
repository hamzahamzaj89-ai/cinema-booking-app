import { View, Text, Pressable } from 'react-native'
import React from 'react'
import clsx from 'clsx'


interface Props {
    AuthScreen:string;
    onPress : (text:string) => void
}
const ToggleButton = ({AuthScreen , onPress}:Props) => {
  return (
    <View className='flex flex-row px-1 h-14 mt-4 mb-7'>

     <Pressable onPress={() => onPress("Sign In")} className={
        clsx("flex-1 justify-center items-center bg-card rounded-tl-lg rounded-bl-lg",
            AuthScreen === "Sign In" && "bg-violet-700"

        )
     }>



      <Text className={
        clsx('font-poppins-semibold text-text mt-1',
            AuthScreen === "Sign In" && "text-white"
        )
      }>
          Sign In
      </Text>
          



     </Pressable>



     <Pressable onPress={() => onPress("Sign Up")} className={
        clsx("flex-1 justify-center items-center bg-card rounded-tr-lg rounded-br-lg",
            AuthScreen === "Sign Up" && "bg-violet-700"

        )
     } >


        <Text className={
        clsx('font-poppins-semibold text-text mt-1',
             AuthScreen === "Sign Up" && "text-white"
           

        )}>
            Sign Up
        </Text>

        


     </Pressable>


    </View>
  )
}

export default ToggleButton