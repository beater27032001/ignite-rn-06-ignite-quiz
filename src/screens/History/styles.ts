import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    flexGrow: 1,
    padding: 32,
  },
  swipeblaRemove: {
    width: 90,
    height: 90,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeContainer:{
    width: "100%",
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    height: 90,
    marginBottom: 12
  }
});
