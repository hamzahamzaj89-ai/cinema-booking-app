import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Linking from "expo-linking";

import { supabase } from "@/app/lib/supabase";

export default function Callback() {

  useEffect(() => {



    async function handleCallback() {

        

      const url = await Linking.getInitialURL();

      if (!url) return;

      const { queryParams } = Linking.parse(url);

      const code = queryParams?.code as string;

      if (code) {
        await supabase.auth.exchangeCodeForSession(code);
      }
    }


    handleCallback();

  }, []);


  return (
    <View
      style={{
        flex:1,
        backgroundColor: "#0B0C1B",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <ActivityIndicator size="large"/>
    </View>
  );
}