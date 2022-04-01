import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DEFAULT_APP_COLOR } from "../constants";
import Test from "../components/Test";

const Stack = createNativeStackNavigator();

const SatHachScreen = () => {
  return (
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
        name="SatHachScreen"
        component={Test}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SatHachScreen;
