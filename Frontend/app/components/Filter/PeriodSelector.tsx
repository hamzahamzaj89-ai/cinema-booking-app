import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  Sunrise,
  Sun,
  Sunset,
  MoonStar,
} from "lucide-react-native";

export interface Period {
  id: string;
  title: string;
  icon: any;
}

interface Props {
  selectedPeriods: string[];
  onToggle: (id: string) => void;
}

const periods: Period[] = [
  {
    id: "morning",
    title: "Morning",
    icon: Sunrise,
  },
  {
    id: "afternoon",
    title: "Afternoon",
    icon: Sun,
  },
  {
    id: "evening",
    title: "Evening",
    icon: Sunset,
  },
  {
    id: "night",
    title: "Night",
    icon: MoonStar,
  },
];

export default function PeriodSelector({
  selectedPeriods,
  onToggle,
}: Props) {
  return (
    <View className="mt-8">

      <Text className="mb-4 font-poppins-semibold text-xl text-white">
        Time Period
      </Text>

      <FlatList
        data={periods}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 14,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {

          const selected = selectedPeriods.includes(item.id);

          const Icon = item.icon;

          return (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => onToggle(item.id)}
              className={`h-24 w-[48%] rounded-2xl  px-4 justify-center ${
                selected
                  ? "border-[#4F8CFF] "
                  : " bg-[#1B1B31]"
              }`}
            >
              <View className="flex-row items-center">

                <View
                  className={`h-12 w-12 items-center justify-center rounded-xl ${
                    selected
                      ? "bg-[#4F8CFF]/20"
                      : "bg-[#262A3E]"
                  }`}
                >
                  <Icon
                    size={22}
                    color={selected ? "#4F8CFF" : "#B2B8D6"}
                  />
                </View>

                <View className="ml-3 flex-1">

                  <Text
                    className={`font-poppins-semibold text-base ${
                      selected
                        ? "text-white"
                        : "text-[#D4D7E8]"
                    }`}
                  >
                    {item.title}
                  </Text>

                  <Text className="mt-1 font-poppins text-xs text-[#8F96B5]">
                    Show Times
                  </Text>

                </View>

              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}