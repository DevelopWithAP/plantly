import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme/theme";

export default function OnboardingScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colorWhite,
    },
    text: {
      fontSize: 24,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
}
