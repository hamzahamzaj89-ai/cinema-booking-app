import React, { useEffect, useMemo, useState } from "react";
import {
  
  StatusBar,
  View,
  FlatList,
} from "react-native";

import { addresses } from "../data/Address";

import AddressHeader from "../components/Address/AddressHeader";
import AddressCard from "../components/Address/AddressCard";
import BottomCheckoutBar from "../components/Address/BottomCheckOut";
import EmptyAddress from "../components/Address/EmptyAddress";
import useBookingStore from "../store/bookingStore";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddressPage() {

  const getGrandTotal = useBookingStore((state) => state.getGrandTotal)

  const [selectedAddress, setSelectedAddress] = useState(
    addresses.find((item) => item.isDefault)?.id ??
      addresses[0]?.id
  );






  const grandTotal = getGrandTotal();
 




  return (
      <>
      
         <View className="flex-1 bg-[#0B0B14]">


            <SafeAreaView>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B0B14"
      />

      <View className="flex-1 px-3">

        {/* Header */}

        <AddressHeader
          onBack={() => router.back()}
          onAddAddress={() =>
            router.push("/(screens)/CreateAddress")
          }
        />

        {/* Empty State */}

        {addresses.length === 0 ? (
          <EmptyAddress
            onAddAddress={() =>
              router.push("/(screens)/CreateAddress")
            }
          />
        ) : (
          <>
            <FlatList
              data={addresses}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 150,
              }}
              renderItem={({ item }) => (
                <AddressCard
                  address={item}
                  selected={
                    item.id === selectedAddress
                  }
                  onPress={() =>
                    setSelectedAddress(item.id)
                  }
                />
              )}
            />

            <BottomCheckoutBar
              total={grandTotal}
              onProceed={() =>  {}}
            />
          </>
        )}

      </View>

    </SafeAreaView>
         </View>
      </>
  );
}