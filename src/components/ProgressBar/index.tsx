import { View } from "react-native";

import { styles } from "./styles";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(percentage);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    };
  });

  useEffect(() => {
    sharedProgress.value = withTiming(percentage);
  }, [current]);

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.progress, styleAnimated]} />
    </View>
  );
}
