import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Amplify from "aws-amplify";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppNavigator from "./components/AppNavigator";
import { AppConstant } from "./constants";
import awsExports from "./src/aws-exports";

Amplify.configure(awsExports);
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.statusBar} />
        <AppNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
  },
});
