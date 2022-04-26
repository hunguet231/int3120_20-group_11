import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboad from "../components/Dashboad";
import { NavigationContainer } from "@react-navigation/native";
import { DEFAULT_APP_COLOR } from "../constants";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: DEFAULT_APP_COLOR,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={Dashboad}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
