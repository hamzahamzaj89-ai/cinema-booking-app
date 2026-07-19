import { TouchableOpacity, View, Text } from "react-native";
import { Building2, X } from "lucide-react-native";

interface BranchHeaderProps {
  onClose: () => void;
}

export default function BranchHeader({
  onClose,
}: BranchHeaderProps) {
  return (
    <View className="flex-row items-start justify-between mb-0">

      {/* Left */}

      <View className="flex-row items-center flex-1">

        <View className="p-4 py-4 items-center justify-center rounded-2xl bg-[#8B5CF6]/10">

          <Building2
            size={28}
            color="#8B5CF6"
          />

        </View>

        <View className="ml-3 flex-1">

          <Text className="font-poppins-bold text-xl text-white">
            Select Branch
          </Text>

          <Text className="mt-0 font-poppins text-sm text-text">
            Choose your preferred cinema branch
          </Text>

        </View>

      </View>

      {/* Close */}

        <View className="pt-3 flex flex-col justify-center items-center">
             <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClose}
        className="h-11 w-11 flex items-center justify-center rounded-full bg-[#8B5CF6]/10"
      >
        <X
          size={25}
          color="#D7D7E5"
          strokeWidth={3}
        />
      </TouchableOpacity>
        </View>

    </View>
  );
}