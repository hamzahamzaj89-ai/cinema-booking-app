import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

interface SkeletonProps {
  width: number | string;
  height: number;
  borderRadius?: number;
}

export default function Skeleton({
  width,
  height,
  borderRadius = 12,
}: SkeletonProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1200,
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.35, 1]),
  }));

  return (
    <Animated.View
      style={[
        styles.skeleton,
        animatedStyle,
        {
          width: width as any,
          height,
          borderRadius,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#2A2D42",
  },
});