import { TouchableOpacity, View, Text } from "react-native";
import CustomButton from "../CustomButton";

interface BranchFooterProps {
  onConfirm: () => Promise<void>;
}

export default function BranchFooter({
  onConfirm,
}: BranchFooterProps) {

   




  return (
    <View className="mt-3">

      {/* Divider */}

      <View className="mb-6 h-[1px] bg-[#28283B]" />

      {/* Buttons */}

      <View className="flex-row">

        {/* Cancel */}

         <CustomButton
         
         onPress={ () => onConfirm()} 
         text={"confirm"}

         />
        

      </View>

    </View>
  );
}