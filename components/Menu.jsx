import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as React from "react";
import { Image } from "react-native";

const Menu = (props) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ paddingTop: 0 }}
      {...props}
    >
      <Image
        source={require("../assets/menu.jpg")}
        style={{ width: "100%", height: 150, marginBottom: 5 }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default Menu;
