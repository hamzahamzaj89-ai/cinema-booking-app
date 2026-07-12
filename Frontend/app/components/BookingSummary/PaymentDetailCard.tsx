import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ReceiptText } from "lucide-react-native";

import PriceRow from "./PriceRow";
import useBookingStore from "@/app/store/bookingStore";

interface Props {
  ticketPrice: number;
  bookingFee: number;
  serviceFee: number;
  tax: number;
  discount?: number;
}

export default function PaymentDetailCard() {


  const [ticketPrice , setTicketPrice] = useState(0)


    const seats = useBookingStore((state)=> 
         state.seats
    )

    const bookingFee  = useBookingStore((state) => state.bookingFee)
      const tax  = useBookingStore((state) => state.tax)
      const discount  = useBookingStore((state) => state.discount)


     const getGrandTotal  = useBookingStore((state) => state.getGrandTotal)
  
     const grandTotal = getGrandTotal();

     
    useEffect(() => {

     
const totalPrice2 = seats.reduce(
  (total, seat) => total + seat.price,
  0
);


setTicketPrice(totalPrice2)

    }, [seats])






  return (
    <View className=" mt-5 rounded-xl bg-field p-5">

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
        value={`$${ticketPrice.toFixed(2)}`}
      />


      <PriceRow
        title="Booking Fee"
        value={`$${bookingFee.toFixed(2)}`}
      />




      <PriceRow
        title="Tax"
        value={`$${tax.toFixed(2)}`}
      />

      {discount > 0 && (
        <>
          <View className="h-[1px] bg-[#2B2B42]" />

          <PriceRow
            title="Discount"
            value={`-$${discount.toFixed(2)}`}
            discount
          />
        </>
      )}


      <PriceRow
        title="Grand Total"
        value={`$${grandTotal.toFixed(2)}`}
        grandTotal
      />

    </View>
  );
}