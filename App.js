import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Drawer from "./components/Drawer";
import { DEFAULT_APP_COLOR } from "./constants";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.statusBar}></SafeAreaView>
      <Drawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: DEFAULT_APP_COLOR,
  },
});
