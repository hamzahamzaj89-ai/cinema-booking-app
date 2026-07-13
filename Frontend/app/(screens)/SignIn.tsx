import { View, Text } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import { Lock, MailIcon, RectangleGogglesIcon } from 'lucide-react-native'
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/Auth/SocialButton'
import AuthFooter from '../components/Auth/AuthFooter'
import Auth from '../(auth)/Auth'

const SignIn = ({onPress} : {onPress:() => void}) => {
  return (
    <View className='flex-1 '>

                <InputField
               Icon={MailIcon}
               label='Email'
               Placeholder='Please enter the email'
               onValueChange={(text) =>  {}}
              />

               <InputField
               Icon={Lock}
               label='Password'
               Placeholder='Please enter the password'
               onValueChange={(text) =>  {}}
              />





                 <View className='w-[100%] px-1'>
                  <CustomButton
                  text={"Sign In"}
                  Icon={null}
                  onPress={() => {}}
                  />
                 </View>




                 <View className='w-[100%] px-1'>
                  <SocialButton
                  text={"Continue wit Google"}
                  onPress={() => {}}
                  Icon={RectangleGogglesIcon}
                  color={"bg-white"}
                  />
                 </View>



                 <AuthFooter
                 text='Create a account?'
                 actionText='Sign Up'
                 onPress={() => {onPress()}}
                 />

    </View>
  )
}

export default SignIn