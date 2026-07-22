import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import useAuthStore from "../store/authStore";
import InfoPage from "../components/InfoPage";
import InfoScreen from "../screens/InfoScreen";
import { useFetch } from "../hooks/useFetch";
import { getUserAddresses } from "../services/address.services";
import { IAddress } from "../interface/IAddress";
import useAddressStore from "../store/addressStore";
import { Session } from "@supabase/supabase-js";
import AddressCardLoader from "../components/Skeletons/AddressCardLoader";

export default function AddressPage() {


  const session = useAuthStore((state) => state.session)

  const getGrandTotal = useBookingStore((state) => state.getGrandTotal)
  const selectedAddress = useAddressStore((state) => state.selectedAddress)
    const setSelectedAddress = useAddressStore((state) => state.setSelectedAddress)

  
  const setAddresses = useAddressStore((state) => state.setAddresses)
    const storeAddresses = useAddressStore((state) => state.addresses)

  //callBack

  const fetchUserAdresses = useCallback( 
    () => {
             
       return getUserAddresses(session as Session)
       
 
    } , [session]

  )

  const {data:addresses , loading , error} = useFetch<IAddress>({
     fetchFunction: fetchUserAdresses,
     enabled: storeAddresses.length > 0 ? false : true
  })



  //useEffect

   useEffect(() => {

              setAddresses(addresses)

  } ,[addresses]) 


  const grandTotal = getGrandTotal();




  if (!session) {

    return   <InfoScreen text="To continue Booking Please Sign In"  buttonText="SignIn" onPress={() => {router.replace("/(auth)/Auth")}}/>

  }


    
  if (loading) {
    return (
      <>
         <View className="flex-1 bg-bg p-4 py-10 ">


            <AddressHeader
          onBack={() => router.back()}
          onAddAddress={() =>
            router.push("/(pages)/CreateAddress")
          }
        />
          <AddressCardLoader/>
      <AddressCardLoader/>
      <AddressCardLoader/>
         </View>
      
      </>
    )
  }


 

  if (addresses.length === 0) {

         return   <InfoScreen text="Please Create A Address to Continue With Booking"  buttonText="Create Address" onPress={() => {router.push("/(pages)/CreateAddress")}}/>

  }





  return (
    
      
          <View className="flex-1 bg-bg py-10 pb-4">



        

      <View className="flex-1 px-3">

        {/* Header */}

        <AddressHeader
          onBack={() => router.back()}
          onAddAddress={() =>
            router.push("/(pages)/CreateAddress")
          }
        />


       
          <>
            <FlatList
              data={addresses}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 150,
              }}
              renderItem={({ item }) => (
                <AddressCard
                  address={item}
                  selected={
                    item._id === selectedAddress?._id
                  }
                  onPress={() =>
                    setSelectedAddress(item)
                  }
                />
              )}
            />

            <BottomCheckoutBar
              total={grandTotal}
              onProceed={() =>  {}}
            />
          </>

      </View>

          </View>
      
  );
}