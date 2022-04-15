import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './common/Drawer'
import * as React from 'react';
import SatHach from './SatHach';
import CauHoi from './CauHoi';
import ChonCauHoi from './ChonCauHoi';


const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
    return (
            <Navigator  initialRouteName="TrangChu"  screenOptions={{
                headerShown: false
              }}>
                <Screen name="TrangChu" component={Drawer}/>
                <Screen name="SatHach" component={SatHach}/>
                <Screen name="CauHoi" component={CauHoi}/>
                <Screen name="ChonCauHoi" component={ChonCauHoi}/>
            </Navigator>
    )};
  
  export default AppNavigator;