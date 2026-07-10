import React, { useState } from "react";
import {
  
  ScrollView,
  StatusBar,
  Switch,
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

export default function CreateAddress({ navigation }: any) {

  const [label, setLabel] = useState("Home");

  const [isDefault, setIsDefault] = useState(true);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    country: "",
    city: "",
    area: "",
    street: "",
    apartment: "",
    postalCode: "",
  });

  const update = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return (
    <View className="flex-1 bg-bg">
        <SafeAreaView className="flex-1">

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
          icon={<UserRound color="#8B5CF6" />}
          placeholder="Full Name"
          value={form.fullName}
          onChangeText={(v) => update("fullName", v)}
        />

        <AddressInput
          icon={<Phone color="#8B5CF6" />}
          placeholder="Phone Number"
          value={form.phone}
          onChangeText={(v) => update("phone", v)}
        />

        <SectionTitle title="Address Information" />

       
        <AddressInput
          icon={<Building2 color="#8B5CF6" />}
          placeholder="City"
          value={form.city}
          onChangeText={(v) => update("city", v)}
        />

        <AddressInput
          icon={<MapPinned color="#8B5CF6" />}
          placeholder="Area / Society"
          value={form.area}
          onChangeText={(v) => update("area", v)}
        />

        <AddressInput
          icon={<House color="#8B5CF6" />}
          placeholder="Street Address"
          value={form.street}
          onChangeText={(v) => update("street", v)}
        />

       

        <AddressInput
          icon={<Mailbox color="#8B5CF6" />}
          placeholder="Postal Code"
          value={form.postalCode}
          onChangeText={(v) => update("postalCode", v)}
        />

        <SectionTitle title="Save As" />

        <View className="flex-row">

          <LabelChip
            title="Home"
            selected={label === "Home"}
            onPress={() => setLabel("Home")}
          />

          <LabelChip
            title="Office"
            selected={label === "Office"}
            onPress={() => setLabel("Office")}
          />

          <LabelChip
            title="Other"
            selected={label === "Other"}
            onPress={() => setLabel("Other")}
          />

        </View>

        

     
      </ScrollView>


            
            <View className="px-4 ">
                  <CustomButton 
                  Icon={Save}
                  onPress={() => {}}
                  
                  />
            </View>

    </SafeAreaView>
    </View>
    
  );
}