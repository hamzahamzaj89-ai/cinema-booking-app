import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native-modal';

interface Props {
  onPress: () => void;
  onChangeText: (text:string) => void
}


const SearchBar = ({onPress , onChangeText}: Props ) => {


  const handlePress = () => {


       onPress()
  }


    return (
    <View className="flex-row items-center gap-3 px-2 mt-1">
      {/* Search Bar */}
      <View className="flex-1 flex-row items-center bg-[#13152b] rounded-lg px-4 h-[3.3rem]">
        <Ionicons
          name="search"
          size={22}
          color="#8B90A5"
        />

        <TextInput
          placeholder="Search movies..."
          placeholderTextColor="#8B90A5"
          className="flex-1 ml-3 text-white text-base"
          onChangeText={(text) => onChangeText(text)}
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity onPress={() => handlePress()} className="w-14 h-[3.1rem] rounded-md bg-buttonbg items-center justify-center shadow-lg">
        <Ionicons
          name="options-outline"
          size={24}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </View>
  );
}
 

export default SearchBar