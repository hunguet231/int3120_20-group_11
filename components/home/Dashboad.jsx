import { ScrollView, StyleSheet, View } from "react-native";
import { options } from "../../utils/options";
import OptionBox from "./OptionBox";
import * as React from 'react';

const Dashboad = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.main}>
        {options.map((opt, index) => (
          <OptionBox key={index} imageUrl={opt.image} textButton={opt.text} screenName = {opt.screenName} navigation = {navigation} />
          ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default Dashboad
