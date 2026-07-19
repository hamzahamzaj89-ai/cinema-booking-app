import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LucideIcon, Ticket } from 'lucide-react-native'
import clsx from 'clsx';
interface Props {
   Icon?: LucideIcon | null;
   text?: string | null;
   disabled?: boolean | null;
  onPress: () => void;
}
function CustomButton ({Icon, onPress , text , disabled}:Props) {

  
  return (
      <TouchableOpacity disabled={disabled ? disabled : false} onPress={onPress} className="rounded-lg w-[100%] bg-violet-600 px-8 flex justify-center content-center align-middle h-12">
            <View className="flex-row items-center justify-center">
              {Icon && (<Icon size={18} color="white" />)} 
                 {text ? (<Text   className={
                clsx(" font-poppins text-lg text-white",
                  Icon && "ml-3"
                )
              }>
                {text}
              </Text>) : (<Text   className={
                clsx(" font-poppins text-lg text-white",
                  Icon && "ml-3"
                )
              }>
                Book Tickets
              </Text>)}
            </View>
          </TouchableOpacity>
  )
}

export default CustomButton