import { View, Text, StyleSheet } from "react-native";
import * as React from 'react';

const Feedback = () => {
  return (
    <View style={styles.feedback}>
      <Text>Feedback</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  feedback: {
    marginLeft: 15,
    marginTop: 20,
  }
});

export default Feedback