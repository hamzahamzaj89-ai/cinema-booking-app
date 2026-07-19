import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";

interface DateItem {
  day: string;
  date: number;
  fullDate: string;
}

interface Props {
  dates: DateItem[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function DateSelector({
  dates,
  selectedIndex,
  onSelect,
}: Props) {
  return (
    <View className="mt-5">

      <Text className="mb-4 font-poppins-semibold text-xl text-white">
        Date
      </Text>

      <BottomSheetScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: 20,
          }}
        >

          {dates.map((item, index) => {

            const selected = index === selectedIndex;

            return (
              <TouchableOpacity
                key={item.fullDate}
                activeOpacity={0.8}
                onPress={() => onSelect(index)}
                className={`mr-3 relative items-center justify-center rounded-2xl px-4 py-4 ${
                  selected
                    ? "bg-[#8B5CF6]"
                    : "bg-card"
                }`}
              >

                {/* Top Cut */}

                <View className="absolute top-2 left-[76%] h-3 w-3 rounded-full bg-[#0B0B14]" />

                <Text
                  className={`mt-2 font-poppins-semibold ${
                    selected
                      ? "text-white"
                      : "text-text"
                  }`}
                >
                  {item.day}
                </Text>

                <Text
                  className={`font-poppins-bold text-xl ${
                    selected
                      ? "text-white"
                      : "text-text"
                  }`}
                >
                  {item.date}
                </Text>

              </TouchableOpacity>
            );

          })}

        </ScrollView>

      </BottomSheetScrollView>

    </View>
  );
}