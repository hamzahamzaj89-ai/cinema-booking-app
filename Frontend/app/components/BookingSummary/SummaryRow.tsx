import React from "react";
import { Text, View } from "react-native";
import SelectedSeats from "./SelectedSeats";


interface Seats {
    id:String;
    status: String;
    price: number;

}
interface Props {
  icon: React.ReactNode;
  title: string;
  value: any;
}





export default function SummaryRow({
  icon,
  title,
  value,
}: Props) {






  return (
    <View className="flex-row   items-center py-2">

      <View className="h-11 w-11 items-center justify-center rounded-2xl bg-[#25253A]">
        {icon}
      </View>

      <View className="ml-4 flex-1">

        <Text className="font-poppins text-xs tracking-[1px] text-[#8C8CA5]">
          {title}
        </Text>



        {title == "Seats" ?  ( <View className="mb-0 mt-1 flex-row flex-wrap">
                {value.length > 0 && value?.map((seat:any) => (
                  <View
                    key={seat.id}
                    className="mr-2 mb-2 rounded-lg bg-[#8B5CF6]/15 px-4 py-2"
                  >
                    <Text className="font-poppins-semibold text-[#8B5CF6]">
                      {seat.id}
                    </Text>
                  </View>
                ))}
              </View>
        ) : (
         

        <Text className="mt-1 font-poppins-medium text-base text-white">
          {value}
        </Text>

        ) }


     

      </View>

    </View>
  );
}