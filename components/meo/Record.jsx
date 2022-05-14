import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Record = ({ title, children }) => {
  return (
    <View style={styles.record}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  record: {
    width: "100%",
  },
  title: {
    backgroundColor: "#F2F2F2",
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    width: "100%",
    fontWeight: "600",
  },
});

export default Record;
