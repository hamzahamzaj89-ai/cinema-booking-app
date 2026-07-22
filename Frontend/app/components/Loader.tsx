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
       <View
             className="flex-1 bg-bg justify-center content-center items-center p-5"
        >

            <ActivityIndicator
                size="large"
                color="#8B5CF6"
            />

        </View>

      
      
      
      </>
  );
}