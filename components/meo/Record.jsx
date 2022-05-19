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
    backgroundColor: "#e2e2e2",
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6,
    width: "100%",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default Record;
