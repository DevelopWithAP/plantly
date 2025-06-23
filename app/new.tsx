import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import PlantlyImage from "./components/PlantlyImage";
import { theme } from "./theme/theme";
import PlantlyButton from "./components/PlantlyButton";
import { usePlantStore } from "./store/plantsStore";
import { useRouter } from "expo-router";

export default function NewScreen() {
  const router = useRouter();
  const addPlant = usePlantStore((state) => state.addPlant);

  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>();

  const handleSubmit = () => {
    if (!name) return Alert.alert("Valdation error", "Give your plant a name");
    if (!days)
      return Alert.alert(
        "Validation error",
        `How often does ${name} need watering?`,
      );
    if (Number.isNaN(Number(days)))
      return Alert.alert(
        "Validation error",
        "Watering frequency must be a number",
      );
    addPlant(name, Number(days));
    router.back();
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colorWhite,
    },
    contentContainer: {
      paddingTop: 24,
      paddingBottom: 100,
      paddingHorizontal: 24,
    },
    input: {
      marginBottom: 24,
      borderWidth: 2,
      borderRadius: 6,
      borderColor: theme.colorLightGrey,
      padding: 10,
      fontSize: 18,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    centered: {
      alignItems: "center",
    },
  });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.centered}>
        <PlantlyImage />
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        onChangeText={setName}
        style={styles.input}
        value={name}
        placeholder="E.g. Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency</Text>
      <TextInput
        onChangeText={setDays}
        style={styles.input}
        value={days}
        placeholder="E.g. 3"
        autoCapitalize="words"
        keyboardType="number-pad"
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </ScrollView>
  );
}
