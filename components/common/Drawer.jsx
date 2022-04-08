import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import Feedback from './Feedback';
import Rate from './Rate';
import Setting from './Setting/Setting';
import Share from './Share';
import { AppConstant } from '../../constants';
import Dashboad from '../home/Dashboad';
import SatHach from '../SatHach';
import CauHoi from '../CauHoi';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from "./Menu";

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
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
          component={CauHoi} 
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
  )
}

export default Drawer