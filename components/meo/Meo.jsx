import React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AppConstant } from "../../constants";
import LyThuyet from "./LyThuyet";
import ThucHanh from "./ThucHanh";

const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <LyThuyet />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <ThucHanh />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route }) => (
      <Text style={{ textTransform: "normal", color: "#fff" }}>
        {route.title}
      </Text>
    )}
    style={{ backgroundColor: AppConstant.DEFAULT_APP_COLOR }}
    indicatorStyle={{ backgroundColor: "white" }}
  />
);

const Meo = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Lý thuyết" },
    { key: "second", title: "Thực hành" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default Meo;
