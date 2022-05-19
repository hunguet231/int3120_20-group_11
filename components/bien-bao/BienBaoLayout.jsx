import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Record from "./Record";

const BienBaoLayout = ({ data = [] }) => {
  return (
    <ScrollView style={styles.root}>
      {data.map((item, index) => (
        <Record item={item} key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
  },
});

export default BienBaoLayout;
