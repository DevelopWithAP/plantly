import { View, StyleSheet, Button } from "react-native";
import { theme } from "../app/theme/theme";
import { useUserStore } from "./store/userStore";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colorWhite,
    },
  });

  const router = useRouter();
  const toggleHasOnboraded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHasOnboraded();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Button title="Let me in" onPress={handlePress} />
    </View>
  );
}
