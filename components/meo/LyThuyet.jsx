import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { MeoLyThuyet } from "../../utils/meo-ly-thuyet.js";
import Record from "./Record";

const LyThuyet = () => {
  return (
    <ScrollView>
      {MeoLyThuyet.map((set) => (
        <Record title={set.title}>
          {set.data.map((item, index) => (
            <View key={index}>
              <Text
                style={[styles.item, index % 2 == 0 ? styles.even : styles.odd]}
              >
                {item.content}
              </Text>
            </View>
          ))}
        </Record>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  odd: {
    backgroundColor: "#E6FBFE",
  },
  even: {
    backgroundColor: "#fff",
  },
});

export default LyThuyet;
