import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme/theme";

export default function ProfileSreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colorGreen,
    },
    text: { fontSize: 24 },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text} />
    </View>
  );
}
