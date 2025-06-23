import { View, StyleSheet, Text } from "react-native";
import { theme } from "../theme/theme";
import PlantlyImage from "./PlantlyImage";
import { PlantType } from "../store/plantsStore";

type Props = {
  plant: PlantType;
};

export default function PLantCard({ plant }: Props) {
  return (
    <View>
      <PlantlyImage size={100} />
      <View>
        <Text>{plant.name}</Text>
        <Text>Water every {plant.wateringFrequency} days</Text>
      </View>
    </View>
  );
}
