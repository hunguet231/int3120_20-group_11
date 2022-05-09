import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { AppConstant } from '../constants';
import CauHoi from './CauHoi';
import ChonCauHoi from './ChonCauHoi';
import SatHach from './SatHach';
import Drawer from './common/Drawer';

const { Navigator, Screen } = createStackNavigator();

function AppNavigator() {
  return (
    <Navigator initialRouteName="TrangChu">
      <Screen
        name="TrangChu"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Thi sát hạch" component={SatHach} options={options} />
      <Screen name="Câu hỏi" component={CauHoi} options={options} />
      <Screen
        name="Chọn câu hỏi"
        component={ChonCauHoi}
        options={(options, { headerShown: false })}
      />
    </Navigator>
  );
}

const options = {
  headerStyle: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
};

export default AppNavigator;
