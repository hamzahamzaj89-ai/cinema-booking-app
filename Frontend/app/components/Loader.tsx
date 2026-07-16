import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Modal from "react-native-modal";

interface Props {
  visible: boolean;
  text?: string;
}

export default function Loader() {


    let size = "large"

    
  return (
      <>

      <View className="bg-bg w-[100%] h-[100%] flex justify-center items-center">


             <ActivityIndicator   size={"large"}  color={"white"}/>


      </View>
      
      
      
      </>
  );
}