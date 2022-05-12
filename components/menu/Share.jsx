import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Share = () => {
  return (
    <View style={styles.share}>
      <Text>Share</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  share: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default Share;
