import React, { useRef, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Modal from "react-native-modal";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
}

export default function OTPModal({
  isVisible,
  onClose,
  onVerify,
}: Props) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [focused, setFocused] = useState(-1);

  const inputs = useRef<TextInput[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    key: string,
    index: number
  ) => {
    if (key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.65}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={onClose}
      useNativeDriver
    >
      <View className="rounded-xl  bg-[#171727] p-6">

        {/* Header */}

        <Text className="text-center font-poppins-bold text-2xl text-white">
          Verify OTP
        </Text>

        <Text className="mt-2 text-center font-poppins text-[#9D9DB8]">
          Enter the 6 digit verification code sent to your email.
        </Text>

        {/* OTP */}

        <View className="mt-8 flex-row gap-x-1 justify-center">

          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputs.current[index] = ref;
              }}
              value={digit}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              className={`h-16 w-[45px] rounded-md border bg-[#1F2033] text-center text-xl font-poppins-semibold text-white ${
                focused === index
                  ? "border-[#8B5CF6]"
                  : "border-[#30324A]"
              }`}
              selectionColor="#8B5CF6"
              onFocus={() => setFocused(index)}
              onBlur={() => setFocused(-1)}
              onChangeText={(text) =>
                handleChange(text, index)
              }
              onKeyPress={({ nativeEvent }) =>
                handleBackspace(
                  nativeEvent.key,
                  index
                )
              }
            />
          ))}

        </View>

        {/* Buttons */}

        <View className="mt-10 flex-row">

          <TouchableOpacity
            onPress={onClose}
            className="mr-2 flex-1 items-center justify-center rounded-lg bg-card py-[12px]"
          >
            <Text className="font-poppins-semibold text-[#9D9DB8]">
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              onVerify(otp.join(""))
            }
            className="ml-2 flex-1 items-center justify-center rounded-lg bg-violet-600 py-[12px]"
          >
            <Text className="font-poppins-semibold text-white">
              Verify
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
}