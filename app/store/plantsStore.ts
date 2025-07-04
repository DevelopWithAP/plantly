import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequency: number;
  lastWateredAt?: number;
};

type PlantState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (name: string, wateringFrequency: number) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: (name: string, wateringFrequency: number) => {
        return set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: String(state.nextId),
                name,
                wateringFrequency,
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAt: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),

    {
      name: "plantly-plant-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
