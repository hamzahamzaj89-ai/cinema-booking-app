import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Building2, ChevronRight, MapPin } from "lucide-react-native";
import { GestureResponderEvent } from "react-native-modal";

export default function Header({onPress} : {onPress: () => void}) {
  return (
    <View className=" rounded-3xl   p-5 pt-2 mx-3 mr-0 pr-2">
      {/* Header */}

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className=" ml-2 items-center justify-center rounded-lg bg-">
            <Building2 size={30} color="#3b82f6" strokeWidth={2}/>
          </View>

          <View className="ml-3">
            <Text className="mt-[-3px] font-poppins-semibold text-lg text-white">
              Centoras Mall
            </Text>
               <View className="flex flex-row gap-x-2">
            <Text className="mt-[0px] font-poppins text-sm text-text">
              Blue Area, Islamabad
            </Text>
               </View>
            
          </View>
        </View>

        <TouchableOpacity
          onPress={(event:GestureResponderEvent ) => onPress()}
          activeOpacity={0.85}
          className="rounded-lg bg-violet px-5 py-2  border-0 border-violet-600 "
        >
          <View className="flex-row items-center">
            <Text className="font-poppins-semibold text-blue-500 ">Change</Text>

            <ChevronRight size={18} color="#3b82f6" strokeWidth={3} style={{ marginLeft: 4 }} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Location */}

      
    </View>
  );
}
