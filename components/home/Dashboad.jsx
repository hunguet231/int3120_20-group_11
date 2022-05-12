import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { options } from "../../utils/options";
import OptionBox from "./OptionBox";

const Dashboad = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.main}>
        {options.map((opt, index) => (
          <OptionBox
            key={index}
            imageUrl={opt.image}
            textButton={opt.text}
            navigation={navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: "#fff",
    height: "calc(100vh - 64px)",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Dashboad;
