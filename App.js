import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./containers/Home";
import { Test } from "./containers/Test";
import { List } from "./containers/List";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="List">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Test" component={Test} />
        <Drawer.Screen name="List" component={List} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
