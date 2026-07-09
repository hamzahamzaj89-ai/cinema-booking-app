import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LucideIcon, Ticket } from 'lucide-react-native'
interface Props {
   Icon: LucideIcon 
  onPress: () => void;
}
function CustomButton ({Icon, onPress}:Props) {

  
  return (
      <TouchableOpacity onPress={onPress} className="rounded-lg w-[83%] bg-violet-600 px-8 flex justify-center content-center align-middle h-12">
            <View className="flex-row items-center justify-center">
              <Icon size={18} color="white" />

              <Text className="ml-3 font-poppins-semibold text-lg text-white">
                Book Tickets
              </Text>
            </View>
          </TouchableOpacity>
  )
}

export default CustomButton