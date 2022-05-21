import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { Text, Linking } from "react-native";
import { AppConstant } from "../../constants";
import Dashboad from "../home/Dashboad";
import Menu from "./Menu";
import Rate from "./Rate";
import Setting from "./setting-type-exam/Setting";

const Drawer = ({ navigation }) => {
  const Drawer = createDrawerNavigator();

  const onRating = (e) => {
    e.preventDefault();
    Linking.openURL(
      "https://play.google.com/store/apps/details?id=com.vietcoder.gplxmaynew"
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppConstant.DEFAULT_APP_COLOR,
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 15,
          fontWeight: "600",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
      initialRouteName="Home"
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Dashboad}
        options={{
          headerTitle: "Ôn thi GPLX máy",
          drawerLabel: "Trang chủ",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-home"
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chọn hạng bài thi"
        component={Setting}
        options={{
          title: "Chọn hạng bài thi",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-settings"
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Thông tin phản hồi"
        component={Feedback}
        options={{
          title: "Thông tin phản hồi",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-mail"
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Chia sẻ ứng dụng"
        component={Share}
        options={{
          title: "Chia sẻ ứng dụng",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-share-social"
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Đánh giá ứng dụng"
        component={Rate}
        options={{
          title: "Đánh giá ứng dụng",
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="like1"
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
          drawerLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: "500",
                color: focused ? "#7092FE" : "rgba(28, 28, 30, 0.68)",
              }}
              onPress={onRating}
            >
              Đánh giá ứng dụng
            </Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;
