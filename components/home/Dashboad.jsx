import * as React from "react";
import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { options } from "../../utils/options";
import OptionBox from "./OptionBox";

const Dashboad = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <FlatGrid
        style={styles.list}
        itemDimension={130}
        data={options}
        renderItem={({ item }) => (
          <OptionBox
            imageUrl={item.image}
            textButton={item.text}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: "100%",
  },
  list: {
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});

export default Dashboad;
