import { View, Text, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from "react-native-reanimated-carousel";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const CustomCarousel = () => {


      const window = Dimensions.get("window");
      const width2 = window.width
        const [activeIndex, setActiveIndex] = useState(0);
      const data = [
           "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    ];
  return (
    <View>
       <Carousel
        loop
        width={width2}
        height={450}

        data={data}
         onSnapToItem={(index) => setActiveIndex(index)}
        scrollAnimationDuration={600}
        mode="parallax"
           modeConfig={{
          parallaxScrollingOffset: 120,
          parallaxScrollingScale: 0.93,
          
        }}
        renderItem={({ item ,index, animationValue  }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.9, 0.95, 0.9]
    );

    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.3 ,1, 0.3]
    );



    const height = interpolate(
    animationValue.value,
    [-1, 0, 1],
    [320, 360, 320]
  );

    const translateY = interpolate(
    animationValue.value,
    [-1, 0, 1],
    [100, 0, 100]
  );

 
    return {
      transform: [{ scale }, { translateY }],
      opacity,
      height
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Image
        source={{ uri: item }}
        className='h-[100%]'
        style={{
          width: width2 * 0.72,
          
          borderRadius: 20,
          alignSelf: "center",
        }}
      />
    </Animated.View>
  )
        }}
      />
    </View>
  )
}

export default CustomCarousel