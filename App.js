import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Feedback from './components/common/Feedback';
import Menu from './components/common/Menu';
import Rate from './components/common/Rate';
import Setting from './components/common/Setting/Setting';
import Share from './components/common/Share';
import Dashboad from './components/home/Dashboad';
import { AppConstant } from './constants';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.statusBar}>
      </SafeAreaView>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: AppConstant.DEFAULT_APP_COLOR,
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
        initialRouteName="Trang chủ"
        drawerContent={(props) => <Menu {...props} />}
      >
        <Drawer.Screen 
          name="Trang chủ" 
          component={Dashboad} 
          options={{
            title: 'Trang chủ',
            drawerIcon: ({focused, size}) => (
              <Ionicons name={`ios-home`} size={size} color={focused ? '#7092FE' : '#000'} />
            ),
         }}
        />
        <Drawer.Screen 
          name="Chọn hạng bài thi" 
          component={Setting} 
          options={{
            title: 'Chọn hạng bài thi',
            drawerIcon: ({focused, size}) => (
              <Ionicons name={`ios-settings`} size={size} color={focused ? '#7092FE' : '#000'} />
            ),
         }}
        />
        <Drawer.Screen 
          name="Thông tin phản hồi" 
          component={Feedback} 
          options={{
            title: 'Thông tin phản hồi',
            drawerIcon: ({focused, size}) => (
              <Ionicons name={`ios-mail`} size={size} color={focused ? '#7092FE' : '#000'} />
            ),
         }}  
        />
        <Drawer.Screen 
          name="Chia sẻ ứng dụng" 
          component={Share} 
          options={{
            title: 'Chia sẻ ứng dụng',
            drawerIcon: ({focused, size}) => (
              <Ionicons name={`ios-share-social`} size={size} color={focused ? '#7092FE' : '#000'} />
            ),
         }}  
        />
        <Drawer.Screen 
          name="Đánh giá ứng dụng" 
          component={Rate} 
          options={{
            title: 'Đánh giá ứng dụng',
            drawerIcon: ({focused, size}) => (
              <AntDesign name={`like1`} size={size} color={focused ? '#7092FE' : '#000'} />
            ),
         }}  
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
  },
});
