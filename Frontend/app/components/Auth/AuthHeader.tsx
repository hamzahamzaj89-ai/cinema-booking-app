import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage: any;
  logo: any;
}

export default function AuthHero({
  title,
  subtitle,
  backgroundImage,
  logo,
}: Props) {
  return (
    <View className="h-[300px] overflow-hidden ">

      <ImageBackground
        source={{
            uri: backgroundImage
        }}
        resizeMode="cover"
        className="flex-1"
      >
        {/* Dark Overlay */}


        {/* Bottom Gradient */}


            <LinearGradient
  colors={[
    "rgba(0,0,0,0.0)",
    "rgba(0,0,0,0.4)",
    "rgba(0,0,0,0.5)",
    "rgba(0,0,0,0.6)",
    "rgba(0,0,0,1)",
  ]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  className="absolute inset-0 rounded-3xl"
/>


      

        {/* Content */}

        <View className="flex-1 justify-end pt-8 px-8 pr-0 pl-3 pb-16">

          <View className="flex-row relative items-center">

            {/* Logo */}

            <Image
              source={require("../../assets/logo.png")}
              className="h-24 w-24"
              resizeMode="contain"
            />




            {/* Name */}

            <View className="ml-0 flex-1 ">

              <Text className="font-poppins-bold   text-3xl text-violet-600">
                {title}
              </Text>

              <Text numberOfLines={2} className="mt-0 font-poppins text-gray-300">
                 Lorem ipsum dolor sit amet, elit its adipisicing consectetur  . 
              </Text>

            </View>

          </View>

          
  

        </View>

      </ImageBackground>

    </View>
  );
}