import * as React from 'react';
// eslint-disable-next-line import/namespace
import { StyleSheet, Text, View } from 'react-native';

const TypeExamItem = ({ title, desc, checked }) => {
  return (
    <View style={styles.type}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  type: {
    marginLeft: 15,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    paddingBottom: 10,
    flex: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  desc: {
    color: '#7B7878',
    marginTop: 3,
  },
});

export default TypeExamItem;
