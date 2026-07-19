import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Check } from "lucide-react-native";

interface Props {
  selectedGenres: string[];
  onToggle: (genre: string) => void;
}

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Family",
  "History",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War",
];

export default function GenreSelector({
  selectedGenres,
  onToggle,
}: Props) {
  return (
    <View className="mt-8">

      <Text className="mb-5 font-poppins-semibold text-xl text-white">
        Genres
      </Text>

      <View className="flex-row flex-wrap">

        {genres.map((genre) => {

          const selected = selectedGenres.includes(genre);

          return (

            <TouchableOpacity
              key={genre}
              activeOpacity={0.85}
              onPress={() => onToggle(genre)}
              className={`mr-3 mb-3 flex-row items-center rounded-full px-5 py-3 ${
                selected
                  ? "bg-[#4F8CFF]"
                  : "bg-[#1B1B31]"
              }`}
            >

              {selected && (
                <Check
                  size={15}
                  color="white"
                  strokeWidth={3}
                  style={{ marginRight: 6 }}
                />
              )}

              <Text
                className={`font-poppins-medium text-[14px] ${
                  selected
                    ? "text-white"
                    : "text-[#D5D8E8]"
                }`}
              >
                {genre}
              </Text>

            </TouchableOpacity>

          );

        })}

      </View>

    </View>
  );
}