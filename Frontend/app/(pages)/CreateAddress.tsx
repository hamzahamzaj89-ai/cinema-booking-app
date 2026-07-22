import React, { useCallback, useEffect, useState } from "react";
import {
  
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Building2,
  ChevronLeft,
  Globe,
  House,
  Mailbox,
  MapPinned,
  Phone,
  Save,
  UserRound,
} from "lucide-react-native";

import AddressHeader from "../components/Address/AddressHeader";
import AddressInput from "../components/Address/AddressInput";
import LabelChip from "../components/Address/LabelChip";
import SectionTitle from "../components/Address/SectionTitle";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { IAddress, IAddressFormData } from "../interface/IAddress";
import { createUserAddress } from "../services/create.address.service";
import { useFetch } from "../hooks/useFetch";
import useAddressStore from "../store/addressStore";
import useAuthStore from "../store/authStore";
import { Session } from "@supabase/supabase-js";
import { usePost } from "../hooks/usePost";
import clsx from "clsx";
import DefaultSelector from "../components/Address/DefaultSelector";

export default function CreateAddress({ navigation }: any) {


  const [isDefault, setIsDefault] = useState(true);

  const addAddress = useAddressStore((state) => state.addAddress)
  const session = useAuthStore((state) => state.session)

  const [form, setForm] = useState<IAddressFormData>({
    fullName: "",
    phone: "",
    city: "",
    isDefault: false,
    area: "",
    address: "",
    label: "Home"

  });



   //callBack

   const useCreateUserAddress = useCallback((data: IAddressFormData) => {
      
            return createUserAddress(data , session as Session)

   } ,[])




   //hook

   const {loading , error , postData , data:address } = usePost<IAddress , IAddressFormData>({fetchFunction: useCreateUserAddress })


   


   useEffect(() => {

   address  && addAddress(address)

   } , [address])




  
  return (
    <View className="flex-1 bg-bg ">
        <SafeAreaView style={{ flex: 1 }}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B0B14"
      />

      <View className="px-3">

        <AddressHeader
          onBack={() => router.back()}
          onAddAddress={() => {}}
        />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >

        <SectionTitle title="Personal Information" />

        <AddressInput
          icon={<UserRound color="#3b82f6" />}
          placeholder="Full Name"
          value={form.fullName}
          onChangeText={(v) => setForm({...form , fullName: v})}
        />

        <AddressInput
          icon={<Phone color="#3b82f6" />}
          placeholder="Phone Number"
          value={form.phone}
          onChangeText={(v) => setForm({...form , phone: v})}
        />

        <SectionTitle title="Address Information" />

       
        <AddressInput
          icon={<Building2 color="#3b82f6" />}
          placeholder="City"
          value={form.city}
          onChangeText={(v) => setForm({...form , city: v})}
        />

        <AddressInput
          icon={<MapPinned color="#3b82f6" />}
          placeholder="Area / Society"
          value={form.area}
          onChangeText={(v) => setForm({...form, area: v})}
        />

        <AddressInput
          icon={<House color="#3b82f6" />}
          placeholder=" Address"
          value={form.address}
          onChangeText={(v) => setForm({...form , address: v})}
        />

       


        <SectionTitle title="Save As" />

        <View className="flex-row">

          <LabelChip
            title="Home"
            selected={form.label === "Home"}
            onPress={() => setForm({...form, label: "Home"})}
          />

          <LabelChip
            title="Office"
            selected={form.label === "Office"}
            onPress={() => setForm({...form, label: "Office"})}
          />

          <LabelChip
            title="Other"
            selected={form.label === "Other"}
            onPress={() => setForm({...form, label: "Other"})}
          />

        </View>


           <DefaultSelector 
           
           value={form.isDefault}
           onChange={(value) => setForm({...form , isDefault: value} )}
           />

        

     
      </ScrollView>


            
            <View className="px-4 ">
                  <CustomButton 
                  Icon={Save}
                  disabled={loading}
                  onPress={() => {postData(form)}}
                  
                  />
            </View>

    </SafeAreaView>
    </View>
    
  );
}