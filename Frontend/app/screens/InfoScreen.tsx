import { Info, ChevronRight, ArrowBigRight, ArrowRight } from "lucide-react-native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";


interface Props {
    text : string;
    buttonText: string;
    onPress: () => void
}
export default function InfoScreen({text , buttonText , onPress} : Props) {
  return (
    <SafeAreaView className="flex-1 bg-bg px-6 justify-center">

      {/* Icon */}

      <View className="self-center h-24  w-24 items-center justify-center rounded-full bg-[#8B5CF6]/15">
        <Info
          size={42}
          color="#3b82f6"
        />
      </View>

      {/* Title */}

      <Text className="mt-8 text-center font-poppins-bold text-3xl text-white">
        Almost There
      </Text>

      {/* Description */}

      <Text className="mt-4 text-center font-poppins text-base leading-7 text-text">
        {text}
      </Text>

      {/* Button */}

      <View className="mt-5">
          <CustomButton
      text ={buttonText}
      onPress = {onPress}
      Icon = {ArrowRight}/>
      </View>
    </SafeAreaView>
  );
}