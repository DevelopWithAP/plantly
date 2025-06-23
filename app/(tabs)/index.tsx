import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/app/theme/theme";
import PlantCard from "../components/PlantCard";
// import { usePlantStore } from "../store/plantsStore";

export default function App() {
  // const allPlants = usePlantStore((state) => state.plants);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <PlantCard
        plant={{
          id: "1",
          name: "Plant",
          wateringFrequency: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
