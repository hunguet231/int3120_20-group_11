import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppConstant } from './constants';
import Drawer from './components/common/Drawer';

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.statusBar}>
      </SafeAreaView>
      <Drawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
  },
});
