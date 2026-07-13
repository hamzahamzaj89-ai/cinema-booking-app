import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LucideIcon } from 'lucide-react-native'
import clsx from 'clsx';
import FontAwesome from "react-native-vector-icons/FontAwesome";



interface Props {

text: string;
      Icon: LucideIcon;
      color:string;
      onPress: () => void

}
const SocialButton = ({
   text,
   Icon,
   onPress,
   color
}:Props) => {
  return (
    <TouchableOpacity className={clsx("flex flex-row rounded-lg  mt-3 py-3 justify-center items-center ",
        color
    )} >
    <View>
<FontAwesome
  name="google"
  size={20}
  color="black"
/>    </View>
      <Text className='font-poppins-semibold ml-3 mt-[3px] text-black'>{text}</Text>
    </TouchableOpacity>
  )
}

export default SocialButton