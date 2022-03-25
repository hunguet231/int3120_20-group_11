import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const OptionBox = ({imageUrl, textButton}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
    >
      <Image source={imageUrl} style={styles.image} />
      <TouchableRipple
        style={styles.button}
        onPress={()=>{}}
        rippleColor="rgba(0, 0, 0, .32)" 
        
      ><Text style={styles.text}>{textButton}</Text>
      </TouchableRipple>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: 'rgb(149, 157, 165)',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 24,
    borderRadius: 5,
    width: 160,
    height: 160,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'stretch',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#f2f2f2',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
    marginTop: 0,
  },
  button: {
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    backgroundColor: '#eee',
    borderRadius: 11,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
  }
});

export default OptionBox
