import "../global.css"


import {  ActivityIndicator, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, router } from "expo-router";

const App = () => {

  const [loggedIn , setLoggedIn] = useState(false);
  const [pending , setPending] = useState(true)
     
   useEffect(() => {
    const timer = setTimeout(() => {
       setPending(false)
     setLoggedIn(true);

        console.log("hello");

        

    }, 3000);



  }, []);



    useEffect(() => {
    if (!pending) {
      if (loggedIn) {
        router.replace("/(app)/Home");
      } else {
        router.replace("/(auth)/SignIn");
      }
    }
  }, [loggedIn, pending]);

     




  return (
    <View>

        {pending && <ActivityIndicator/>}
    </View>
  )
}

export default App

