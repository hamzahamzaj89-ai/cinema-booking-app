import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import { Lock, MailIcon, PersonStandingIcon, RectangleGogglesIcon, User } from 'lucide-react-native'
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/Auth/SocialButton'
import AuthFooter from '../components/Auth/AuthFooter'
import OTPModal from '../components/OTPModal'
import { useSignUp } from '@clerk/clerk-expo'
import { signUpUser } from '../services/SignUpService'


interface Props  {
      name: string;
      email:string;
      password:string
  }


const SignUp = ({onPress} : {onPress:() => void}) => {
  const { signUp, isLoaded } = useSignUp();



  
  const [isVisible , setIsVisible ] = useState(false)
  const [formData , setFormData] = useState<Props>({
    name: "",
    email: "",
    password: ""
  });


  const handleSignUp = () => {


    const {name , email , password} = formData

      signUpUser(
           {
               signUp,
               isLoaded,
               name,
               email,
               password
               


            
           }
 )


 setIsVisible(true)

     
  }

  return (
    <View className='flex-1'>

         <InputField
               Icon={User}
               label='Username'
               Placeholder='Please enter the username'
               onValueChange={(text) =>  {}}
              />

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
                  text={"Sign Up"}
                  Icon={null}
                  onPress={() => {handleSignUp}}
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
                   onVerify={(code) =>{} }
                />
    </View>
  )
}

export default SignUp