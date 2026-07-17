import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { green } from "react-native-reanimated/lib/typescript/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "../store/authStore";

export default function TabLayout() {





  return (

    <Tabs
      screenOptions={{
        headerShown: false,

        // 🔥 Tab bar style (rounded floating design)
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#0B0C1B",
          borderTopWidth: 0,
          height: 85,
          display: "flex", 
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop:7,
          
          
          ...styles.shadow,
        },
      }}
    >
      <Tabs.Screen
        name="Home"

        
        options={{
          title: "Home",
          headerShown: false,
           tabBarActiveTintColor: 'green',
          
          tabBarIcon: ({ color, size , focused }) => (
            <Ionicons name="home-outline" size={28}   color={focused ? "#7c3aed": "#9B9BB5"} />
          ),

          tabBarLabel: ({ focused, color }) => (
      <Text
        style={{
          fontSize: 12,
          fontWeight: focused ? "700" : "500",
          color: !focused ? "#9B9BB5": '#7c3aed',
        }}
      >
        Home
      </Text>
          ),



        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
              tabBarIcon: ({ color, size , focused }) => (
            <Ionicons name="person-outline" size={28}   color={focused ? "#7c3aed": "#9B9BB5"} />
          ),

          tabBarLabel: ({ focused, color }) => (
      <Text
        style={{
          fontSize: 12,
          fontWeight: focused ? "700" : "500",
          color: !focused ? "#9B9BB5": '#7c3aed',
          marginLeft: 5,
        }}
      >
          profile
      </Text>
          ),

        }}
      />




         <Tabs.Screen
        name="Favourites"
        options={{
          title: "Profile",
              tabBarIcon: ({ color, size , focused }) => (
            <Ionicons name="heart-outline" size={28}   color={focused ? "#7c3aed": "#9B9BB5"} />
          ),

          tabBarLabel: ({ focused, color }) => (
      <Text
        style={{
          fontSize: 12,
          fontWeight: focused ? "700" : "500",
          color: !focused ? "#9B9BB5": '#7c3aed',
        }}
      >
        favourites
      </Text>
          ),

        }}
      />
    </Tabs>

  );
}



const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  iconContainer: {
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  activeIcon: {
    backgroundColor: "#4F46E5",
  },
});