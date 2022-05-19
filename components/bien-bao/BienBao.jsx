import React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AppConstant } from "../../constants";
import { labelsType1, labelsType2, labelsType3 } from "../../utils/bien-bao";
import BienBaoLayout from "./BienBaoLayout";

const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <BienBaoLayout data={labelsType1} />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <BienBaoLayout data={labelsType2} />
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1 }}>
    <BienBaoLayout data={labelsType3} />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route }) => (
      <Text
        style={{
          textTransform: "none",
          color: "#fff",
          fontSize: 15,
          fontWeight: "500",
        }}
      >
        {route.title}
      </Text>
    )}
    style={{ backgroundColor: AppConstant.DEFAULT_APP_COLOR }}
    indicatorStyle={{ backgroundColor: "white" }}
  />
);

const BienBao = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Biển báo cấm" },
    { key: "second", title: "Biển hiệu lệnh" },
    { key: "third", title: "Biển nguy hiểm" },
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

export default BienBao;
