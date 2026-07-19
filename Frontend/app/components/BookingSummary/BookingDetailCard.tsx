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
import { formatTime, formattingDate } from "@/app/utils/convertingDate";
import { useBranchStore } from "@/app/store/branchStore";

export default function BookingDetailCard({}) {
         

    const bookingStore = useBookingStore();
    const branch = useBranchStore((state) => state.branch)
    

    if (!bookingStore) {
         
         return (
          <>

          <View className="mt-5 rounded-xl bg-field p-10 flex justify-start items-center">
                  <Text className="font-poppins-bold">No information about the Booking</Text>
          </View>
          
          
          </>
         )
    }


    const {month , day} = formattingDate(bookingStore.date as Date)
    const formattedTime = formatTime(bookingStore.time?.startTime as Date)
    const timeArray = formattedTime.split(" ")

  const  date = day + " " + month
  const time = timeArray[0] + " " +  timeArray[1];


  return (
    <View className=" mt-5 rounded-xl bg-field p-5">

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
        value={branch?.name}
      />


      <SummaryRow
        icon={<Clapperboard size={20} color="#8B5CF6" />}
        title="Cinema"
        value={"Nuplex Cinema"}
      />


      <SummaryRow
        icon={<Monitor size={20} color="#8B5CF6" />}
        title="Screen Room"
        value={bookingStore.screen?.name}
      />

    </View>
  );
}