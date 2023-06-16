import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from '../Counter';
import { mystore } from '../redux/store';
import { Provider } from 'react-redux';
import Cart from '../Cart';

const provider = ({navigation}) => {
  return (
  <Provider store={mystore}>
    <Counter navigation={navigation}/>
  </Provider>
  )
};

export default provider;

const styles = StyleSheet.create({});
