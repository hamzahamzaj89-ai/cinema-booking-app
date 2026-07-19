import React, { useEffect, useMemo, useRef } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { X } from "lucide-react-native";

import DateSelector from "./DateSelector";
import PeriodSelector from "./PeriodSelector";
import GenreSelector from "./GenreSelector";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import CustomButton from "../CustomButton";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const dates = [
  { day: "Mon", date: 14, fullDate: "2026-07-14" },
  { day: "Tue", date: 15, fullDate: "2026-07-15" },
  { day: "Wed", date: 16, fullDate: "2026-07-16" },
 
];

export default function ShowTimeFilterModal({
  visible,
  onClose,
}: Props) {


  const bottomSheetRef = useRef<BottomSheet>(null);


  const snapPoints = useMemo(() => ["40%", "100%"], []);

  useEffect(() => {

    if (visible)  {
      bottomSheetRef.current?.expand()
    } else {
      bottomSheetRef.current?.close()
    }



  } , [visible])




  return (
<BottomSheet
    ref={bottomSheetRef}
    index={-1}
    snapPoints={snapPoints}
      enablePanDownToClose
  backgroundStyle={{
    backgroundColor: "#0B0C1B",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 90
  }}
  handleIndicatorStyle={{
    backgroundColor: "#5A5E7A",
    width: 50,
    height: 5,
  }}
    onClose={() => {
        onClose()
    }}
>
      <BottomSheetScrollView
          contentContainerStyle={{
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 90,
    }}
    showsVerticalScrollIndicator={false}
      >
        {/* Handle */}

         <View className="pb-0 flex-1 ">
            <View className="mb-5 items-center ">
          <View className="h-1.5 w-14 rounded-full bg-[#3C4058]" />
        </View>

        {/* Header */}

        <View className="mb-2 flex-row items-center justify-between">

          <Text className="font-poppins-bold text-2xl text-white">
            Filters
          </Text>

          <View className="flex-row items-center">

            <TouchableOpacity
              activeOpacity={0.8}
              className="mr-4"
            >
              <Text className="font-poppins-medium text-[#4F8CFF]">
                Clear All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onClose}
              className="h-10 w-10 items-center justify-center rounded-full bg-[#1D2032]"
            >
              <X
                size={20}
                color="white"
              />
            </TouchableOpacity>

          </View>

        </View>

        {/* Body */}

        <View className="mt-3">

          <DateSelector
            dates={dates}
            selectedIndex={0}
            onSelect={() => {}}
          />

          <PeriodSelector
            selectedPeriods={[]}
            onToggle={() => {}}
          />

          <GenreSelector
            selectedGenres={[]}
            onToggle={() => {}}
          />

        </View>

        {/* Footer */}

        <View className="mb-5 mt-8">

          <CustomButton
            text="Apply Filters"
            onPress={() => {}}
          />

        </View>
         </View>

      </BottomSheetScrollView>
    </BottomSheet>
  );
}