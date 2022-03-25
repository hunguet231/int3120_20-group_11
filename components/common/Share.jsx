import { View, Text, StyleSheet } from "react-native";
import * as React from 'react';

const Share = () => {
  return (
    <View style={styles.share}>
      <Text>Share</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  share: {
    marginLeft: 15,
    marginTop: 20,
  }
});

export default Share