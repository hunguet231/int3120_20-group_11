import * as React from 'react';
// eslint-disable-next-line import/namespace
import { View, Text, StyleSheet } from 'react-native';

const Rate = () => {
  return (
    <View style={styles.rate}>
      <Text>Rate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default Rate;
