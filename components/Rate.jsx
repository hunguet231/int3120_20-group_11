import { View, Text, StyleSheet } from "react-native";
import * as React from "react";

const Rate = () => {
  return (
    <View style={styles.rate}>
      <Text>Rate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    marginLeft: 15,
    marginTop: 20,
  },
});

export default Rate;
