import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Feedback = () => {
  return (
    <View style={styles.feedback}>
      <Text>Feedback</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  feedback: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default Feedback;
