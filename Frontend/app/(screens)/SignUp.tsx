import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import { Lock, MailIcon, PersonStandingIcon, RectangleGogglesIcon, User } from 'lucide-react-native'
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/Auth/SocialButton'
import AuthFooter from '../components/Auth/AuthFooter'
import OTPModal from '../components/OTPModal'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'



interface Props  {
      name: string;
      email:string;
      password:string
  }


const SignUp = ({onPress} : {onPress:() => void}) => {


  
  const [loading , setLoading] = useState(false)


   

  
  const [isVisible , setIsVisible ] = useState(false)
  const [formData , setFormData] = useState<Props>({
    name: "",
    email: "",
    password: ""
  });


  const handleSignUp = () => {

     
  }




   const handleVerification = (code:string) => {
      
    }



  return (
    <View className='flex-1'>

         <InputField
               Icon={User}
               label='Username'
               Placeholder='Please enter the username'
               onValueChange={(text) =>  {setFormData({...formData , name: text})}}
              />

          <InputField
               Icon={MailIcon}
               label='Email'
               Placeholder='Please enter the email'
               onValueChange={(text) =>  {setFormData({...formData , email : text})}}
              />

               <InputField
               Icon={Lock}
               label='Password'
               Placeholder='Please enter the password'
               onValueChange={(text) =>  {setFormData({...formData , password: text})}}
              />





                 <View className='w-[100%] px-1'>
                  <CustomButton
                  text={"Sign Up"}
                  Icon={null}
                  disabled={loading}
                  onPress={() => {handleSignUp()}}
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
                                  text='Already have a account?'
                                  actionText='Sign In'
                                  onPress={() => {onPress()}}
                                  />










                <OTPModal
                
                   isVisible={isVisible}
                   onClose={() => setIsVisible(false)}
                   onVerify={(code) =>{handleVerification(code)} }
                />
    </View>
  )
}

export default SignUp