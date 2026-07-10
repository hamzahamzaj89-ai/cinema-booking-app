import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!loaded) return null;

  return(<>
  
        <Stack screenOptions={{ headerShown: false }} />

        <Toast />
  
  </>) 
}