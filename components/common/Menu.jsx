import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

const Menu = (props) => {
  return (
    <DrawerContentScrollView 
      contentContainerStyle={{ paddingTop: 0 }}
      {...props} >
      <Image source={require('../../assets/menu.jpg')} style={{ width: '100%', height: 150, marginBottom: 5 }}/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 0,
    paddingRight: 0,
  }
});

export default Menu