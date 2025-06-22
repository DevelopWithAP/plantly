import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import PlantlyButton from "./components/PlantlyButton";
import { theme } from "../app/theme/theme";
import { useUserStore } from "./store/userStore";
import { useRouter } from "expo-router";
import PlantylImage from "./components/PlantlyImage";

export default function OnboardingScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: theme.colorWhite,
    },
    heading: {
      fontSize: 42,
      color: theme.colorWhite,
      fontWeight: "bold",
      marginBottom: 12,
      textAlign: "center",
    },
    tagline: {
      fontSize: 24,
      color: theme.colorLimeGreen,
      textAlign: "center",
    },
  });

  const router = useRouter();
  const toggleHasOnboraded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHasOnboraded();
    router.replace("/");
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
    >
      <StatusBar style="dark" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantylImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
}
