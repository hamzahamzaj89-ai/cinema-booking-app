import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CurvedScreen from "../components/CurvedScreen";
import SeatIndicator from "../components/SeatIndicator";
import SeatsGrid from "../components/SeatsGrid";
import SeatSummary from "../components/SeatSummary";
import CustomButton from "../components/CustomButton";
import { BadgeCheck } from "lucide-react-native";
import { router } from "expo-router";
import { SeatLayout } from "../services/SeatLayout.services";
import useBookingStore from "../store/bookingStore";
import { useFetch } from "../hooks/useFetch";
import { IPrice, ISeatRow } from "../interface/ISeatLayout";
import { SeatPrices } from "../services/SeatPrices.services";
import { SeatType, usePriceStore } from "../store/priceStore";

const SeatsBooking = () => {
  
  const time = useBookingStore((state) => state.time);
  const setPrices = usePriceStore((state) => state.setPrices)




  //callbacks
  const fetchSeatLayout = useCallback(() => {
    return SeatLayout(time?._id as string);
  }, [time]);

  const fetchPrices = useCallback(() => {
    return SeatPrices(time?._id as string);
  }, [time]);


  

  //hooks
  const {
    data: seatLayout,
    loading,
    error,
  } = useFetch<ISeatRow>({ fetchFunction: fetchSeatLayout, enabled: !!time });

  const { data: prices } = useFetch<IPrice>({
    fetchFunction: fetchPrices,
    enabled: !!time,
  });




  useEffect(() => {


    if (prices.length > 0) {

       const priceMap:Record<SeatType , number> = prices.reduce((acc:any, price) => {
      acc[price.seatType] = Number(price.price);
      return acc;
    }, {});

       setPrices(priceMap)
        

    }

  }, [prices]);




  return (
    <View className="bg-bg flex-1 relative pt-5">
      <ScrollView
        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <SafeAreaView>
          <CurvedScreen />

          <SeatIndicator />

          <SeatsGrid seatLayout={seatLayout} />

          <SeatSummary />

          <View className="w-[100%] flex justify-center items-center mt-6 px-4">
            <CustomButton
              Icon={BadgeCheck}
              onPress={() => router.push("/(pages)/BookingSummary")}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default SeatsBooking;
