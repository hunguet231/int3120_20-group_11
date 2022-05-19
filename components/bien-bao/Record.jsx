import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Record = ({ item }) => {
  return (
    <View style={styles.record}>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  record: {
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
  },
  title: {
    fontWeight: "600",
    marginBottom: 5,
    fontSize: 15,
  },
  content: {
    fontSize: 15,
  },
});

export default Record;
