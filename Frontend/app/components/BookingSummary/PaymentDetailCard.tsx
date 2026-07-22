import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ReceiptText } from "lucide-react-native";

import PriceRow from "./PriceRow";
import useBookingStore from "@/app/store/bookingStore";


export default function PaymentDetailCard() {




  const bookingStore = useBookingStore();



     
    
     

      
  
      if (!bookingStore) {
           
           return (
            <>
  
            <View className="mt-5 rounded-xl bg-field p-10 flex justify-start items-center">
                    <Text className="font-poppins-bold">No information about the Booking</Text>
            </View>
            
            
            </>
           )
      }
  








  return (
    <View className=" mt-5 rounded-xl  p-5">

      {/* Header */}

      <View className="mb-4 flex-row items-center">

        <View className="h-11 w-11 items-center justify-center rounded-2xl bg-[#25253A]">

          <ReceiptText
            size={20}
            color="#8B5CF6"
          />

        </View>

        <Text className="ml-4 font-poppins-bold text-xl text-white">
          Payment Details
        </Text>

      </View>

      <PriceRow
        title="Ticket Price"
        value={`$${bookingStore.seats.reduce( (total, seat) => total + seat.price, 0).toFixed(2)}`}
      />


      <PriceRow
        title="Booking Fee"
        value={`$${bookingStore.bookingFee.toFixed(2)}`}
      />




      <PriceRow
        title="Tax"
        value={`$${bookingStore.tax.toFixed(2)}`}
      />

      {bookingStore.discount > 0 && (
        <>
          <View className="h-[1px] bg-[#2B2B42]" />

          <PriceRow
            title="Discount"
            value={`-$${bookingStore.discount.toFixed(2)}`}
            discount
          />
        </>
      )}


      <PriceRow
        title="Grand Total"
        value={`$${bookingStore.getGrandTotal().toFixed(2)}`}
        grandTotal
      />

    </View>
  );
}