import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SatHach from "../components/SatHach";
import Test from "../components/Test";
import { DEFAULT_APP_COLOR } from "../constants";

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
        component={SatHach}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SatHachScreen;
