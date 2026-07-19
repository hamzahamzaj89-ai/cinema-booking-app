import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import * as NavigationBar from "expo-navigation-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useEffect } from "react";
import AuthProvider from "./Providers/authPovider";
import ProtectedRoutes from "./Providers/ProtectedRoutes";
import useAuthStore from "./store/authStore";

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const session = useAuthStore((state) => state.session)

    useEffect(() => {
    async function hideNavigationBar() {
      await NavigationBar.setVisibilityAsync("hidden");
    }

    hideNavigationBar();
  }, []);

  if (!loaded) return null;





    console.log(!!session)


  return(<>



       <AuthProvider>

                        <ProtectedRoutes>

                          <GestureHandlerRootView style={{ flex: 1 }}>

                          <Stack screenOptions={{headerShown: false}}/>


                          </GestureHandlerRootView>
                 
                        </ProtectedRoutes>

              

    

    


            <Toast />

       </AuthProvider>






        
       



  
  </>) 
}