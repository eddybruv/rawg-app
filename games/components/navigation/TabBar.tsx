import React from "react";
import { BottomNavigation } from "react-native-paper";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";

const TabBar = ({
  state,
  descriptors,
  insets,
  navigation,
}: BottomTabBarProps) => {
  return (
    <BottomNavigation.Bar
      // shifting={true}
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: "tabPress",
          canPreventDefault: true,
          target: route.key,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }
        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;

        return label;
      }}
    />
  );
};

export default TabBar;
