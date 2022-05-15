import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AppConstant } from "../constants";
import CauHoi from "./sat-hach/CauHoi";
import ChonCauHoi from "./sat-hach/ChonCauHoi";
import Drawer from "./menu/Drawer";
import LyThuyet from "./ly-thuyet/LyThuyet";
import SatHach from "./sat-hach/SatHach";
import BienBao from "./bien-bao/BienBao";
import Meo from "./meo/Meo";
import CauSai from "./cac-cau-sai/CauSai";
import Result from "./Result";

const { Navigator, Screen } = createStackNavigator();

function AppNavigator() {
  return (
    <Navigator initialRouteName="Trang chủ">
      <Screen
        name="Trang chủ"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Thi sát hạch" component={SatHach} options={options} />
      <Screen name="Học lý thuyết" component={LyThuyet} options={options} />
      <Screen name="Biển báo đường bộ" component={BienBao} options={options} />
      <Screen name="Các câu sai" component={CauSai} options={options} />
      <Screen name="Mẹo" component={Meo} options={options} />
      <Screen name="Câu hỏi" component={CauHoi} options={options} />
      <Screen
        name="Chọn câu hỏi"
        component={ChonCauHoi}
        options={(options, { headerShown: false })}
      />
      <Screen name="Kết quả" component={Result} options={options} />
    </Navigator>
  );
}

const options = {
  headerStyle: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
  },
  headerTitleStyle: {
    color: "#fff",
    fontSize: 15,
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
};

export default AppNavigator;
