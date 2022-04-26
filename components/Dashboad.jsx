import * as React from "react";
import { StyleSheet, View } from "react-native";
import { options } from "../constants";
import OptionBox from "./OptionBox";

const Dashboad = ({ navigation }) => {
  return (
    <View style={styles.main}>
      {options.map((opt, index) => (
        <OptionBox
          key={index}
          imageUrl={opt.image}
          textButton={opt.text}
          onPress={() => navigation.navigate(opt.screen)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Dashboad;
