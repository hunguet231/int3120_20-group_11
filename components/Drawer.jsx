import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as React from "react";
import { DEFAULT_APP_COLOR } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import SatHachScreen from "../screens/SatHachScreen";
import Feedback from "./Feedback";
import Rate from "./Rate";
import Setting from "./Setting/Setting";
import Share from "./Share";
import { Image } from "react-native";

const Drawer = ({ navigation }) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: DEFAULT_APP_COLOR,
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerTintColor: "#fff",
      }}
      initialRouteName="Trang chủ"
      drawerContent={(props) => {
        const filteredProps = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter((routeName) => {
              routeName !== "Thi sát hạch";
            }),
            routes: props.state.routes.filter(
              (route) => route.name !== "Thi sát hạch"
            ),
          },
        };

        return (
          <DrawerContentScrollView
            contentContainerStyle={{ paddingTop: 0 }}
            {...filteredProps}
          >
            <Image
              source={require("../assets/menu.jpg")}
              style={{ width: "100%", height: 150, marginBottom: 5 }}
            />
            <DrawerItemList {...filteredProps} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          drawerLabel: "Trang chủ",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={`ios-home`}
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Chọn hạng bài thi"
        component={Setting}
        options={{
          drawerLabel: "Chọn hạng bài thi",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={`ios-settings`}
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Thông tin phản hồi"
        component={Feedback}
        options={{
          drawerLabel: "Thông tin phản hồi",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={`ios-mail`}
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chia sẻ ứng dụng"
        component={Share}
        options={{
          drawerLabel: "Chia sẻ ứng dụng",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={`ios-share-social`}
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Đánh giá ứng dụng"
        component={Rate}
        options={{
          drawerLabel: "Đánh giá ứng dụng",
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name={`like1`}
              size={size}
              color={focused ? "#7092FE" : "#000"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Thi sát hạch"
        component={SatHachScreen}
        options={{
          drawerLabel: "Thi sát hạch",
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;
