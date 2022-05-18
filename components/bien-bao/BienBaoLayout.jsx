import React from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import { StyleSheet, View, Text, Image } from "react-native";

const BienBaoLayout = ({ data = [] }) => {
  return (
    <View style={styles.root}>
      {data.map((item, index) => (
        <View style={styles.item} key={index}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.text}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: "1px",
    width: "100%",
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default BienBaoLayout;
