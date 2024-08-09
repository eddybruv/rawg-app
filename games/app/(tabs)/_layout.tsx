import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import TabBar from "@/components/navigation/TabBar";

const TabsLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color} size={size} name={"house-fire"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="collections"
        options={{
          tabBarLabel: "Collections",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color} size={size} name={"box-open"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color} size={size} name={"user-large"} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
