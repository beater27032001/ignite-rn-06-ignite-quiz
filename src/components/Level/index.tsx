import { Pressable, PressableProps, Text, View } from 'react-native';
import Animated,{ useSharedValue, useAnimatedStyle, withTiming, interpolateColor } from 'react-native-reanimated';

import { THEME } from '../../styles/theme';
import { styles } from './styles';
import React, { useEffect } from 'react';

const TYPE_COLORS = {
  EASY: THEME.COLORS.BRAND_LIGHT,
  HARD: THEME.COLORS.DANGER_LIGHT,
  MEDIUM: THEME.COLORS.WARNING_LIGHT,
}

type Props = PressableProps & {
  title: string;
  isChecked?: boolean;
  type?: keyof typeof TYPE_COLORS;
}

export function Level({ title, type = 'EASY', isChecked = false, ...rest }: Props) {
  const scale = useSharedValue(1);
  const checked = useSharedValue(0)

  const COLOR = TYPE_COLORS[type];

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    }
  })

  function onPressIn() {
    scale.value = withTiming(1.1)
  }

  function onPressOut() {
    scale.value = withTiming(1)
  }

  useEffect(() => {
    checked.value = isChecked ? 1 : 0
  },[isChecked])

  return (
    <Pressable {...rest} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={
        [
          styles.container,
          animatedContainerStyle,
          { borderColor: COLOR }
        ]
      }>
        <Text style={
          [
            styles.title,
            { color: isChecked ? THEME.COLORS.GREY_100 : COLOR }
          ]}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
}