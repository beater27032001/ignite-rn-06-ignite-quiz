import { ActivityIndicator, View } from "react-native";
import { THEME } from "../../styles/theme";

import { styles } from "./styles";
import React from "react";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.BRAND_LIGHT} />
    </View>
  );
}