import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from '../Counter';
import { mystore } from '../redux/store';
import { Provider } from 'react-redux';
import Cart from '../Cart';

const addprovider = ({navigation}) => {
  return (
  <Provider store={mystore}>
    <Cart navigation={navigation}/>
  </Provider>
  )
};

export default addprovider;

const styles = StyleSheet.create({});
