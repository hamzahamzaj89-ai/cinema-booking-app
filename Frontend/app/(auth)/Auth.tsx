import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthHero from '../components/Auth/AuthHeader'
import AuthCard from '../components/Auth/AuthCard'
import InputField from '../components/InputField'
import { Key, Lock, Mail, MailIcon, RectangleGogglesIcon } from 'lucide-react-native'
import CustomButton from '../components/CustomButton'
import SocialButton from '../components/Auth/SocialButton'
import ToggleButton from '../components/Auth/ToggleButon'
import SignIn from '../(screens)/SignIn'
import SignUp from '../(screens)/SignUp'

const Auth = () => {



  const [authScreen , setAuthScreen] = useState("Sign In")



  return (
    <View className='flex-1 bg-bg'>
          <AuthHero
          backgroundImage={"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"}
          title={"CineVerse"}
          logo={"../../assets/logo.png"}
          subtitle='Book Tickets Now'
          />




            <View
                 className="flex-1 mt-[-45px] bg-bg rounded-t-[35px] px-7 pt-8 "
                 
               >



                 <ToggleButton
                  onPress={(text) => {setAuthScreen(text)}}
                  AuthScreen={authScreen}
                 />

                 <View  className='flex-1 '>
        {authScreen === "Sign In" && <SignIn onPress={() => {setAuthScreen("Sign Up")}}/>}
                {authScreen == "Sign Up" && <SignUp onPress={() => {setAuthScreen("Sign In")}}/>}
                 </View>
                

          </View>
    </View>
  )
}

export default Auth