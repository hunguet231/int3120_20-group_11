import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppConstant } from './constants';
import Drawer from './components/common/Drawer';
import AppNavigator from './components/AppNavigator';

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
         <SafeAreaView style={styles.statusBar}>
          </SafeAreaView>
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
