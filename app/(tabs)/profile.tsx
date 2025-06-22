import { View, StyleSheet } from "react-native";
import PlantlyButton from "../components/PlantlyButton";
import { theme } from "../theme/theme";
import { useUserStore } from "../store/userStore";

export default function ProfileSreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colorGreen,
    },
  });
  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}
