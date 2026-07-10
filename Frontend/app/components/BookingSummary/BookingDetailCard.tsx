import React from "react";
import { Text, View } from "react-native";
import {
  Armchair,
  CalendarDays,
  Clock3,
  Building2,
  Clapperboard,
  Monitor,
} from "lucide-react-native";

import SummaryRow from "./SummaryRow";
import useBookingStore from "@/app/store/bookingStore";

export default function BookingDetailCard({}) {
         

    const bookingStore = useBookingStore();


  const  date = bookingStore.date.date + " "+ bookingStore.date.month
  const time = bookingStore?.time.time + " " +  bookingStore.time.status;


  return (
    <View className=" mt-5 rounded-xl bg-[#1B1B31] p-5">

      {/* Header */}

      <Text className="mb-1 font-poppins-bold text-xl text-white">
        Booking Details
      </Text>

      <SummaryRow
        icon={<Armchair size={20} color="#8B5CF6" />}
        title="Seats"
        value={bookingStore.seats}
      />



      <View className="flex w-[100%]   gap-x-5 flex-col">
          <SummaryRow
        icon={<CalendarDays size={20} color="#8B5CF6" />}
        title="Date"
        value={date}
      />


      <SummaryRow
        icon={<Clock3 size={20} color="#8B5CF6" />}
        title="Showtime"
        value={time}
      />


      </View>


      

      <SummaryRow
        icon={<Building2 size={20} color="#8B5CF6" />}
        title="Branch"
        value={"Islamabad Branch"}
      />


      <SummaryRow
        icon={<Clapperboard size={20} color="#8B5CF6" />}
        title="Cinema"
        value={"Nuplex Cinema"}
      />


      <SummaryRow
        icon={<Monitor size={20} color="#8B5CF6" />}
        title="Screen Room"
        value={"Screen 4"}
      />

    </View>
  );
}