import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Cart from './Cart';
import {additemToCart, getDataMethod} from './redux/Action';

list = [
  {
    name: 'shoes 1',
    price: 'PAK 1073',
    image: 'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg',
  },
  {
    name: 'shoes 2',
    price: 'PAK 3050',
    image:
      'https://media.istockphoto.com/photos/elegant-black-leather-shoes-picture-id172417586?k=20&m=172417586&s=612x612&w=0&h=DDjvQhRgSYcH2F5rVt8iohGvkqCIteYuTCq3wpJuUi4=',
  },
  {
    name: 'shoes 3',
    price: 'PAK 2500',
    image: 'https://thumbs.dreamstime.com/b/vintage-red-shoes-23151148.jpg',
  },
  {
    name: 'shoes 4',
    price: 'PAK 2100',
    image: 'https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg',
  },
  {
    name: 'shoes 5',
    price: 'PAK 1400',
    image:
      'https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.2x.rsquare.w600.jpg',
  },
  {
    name: 'shoes 6',
    price: 'PAK 700',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0461fc94-4cb8-4d34-a50a-e9c0a18ef578/zoom-fly-5-road-running-shoes-lkx7Zp.png',
  },
  {
    name: 'shoes 7',
    price: 'PAK 800',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c20bb9e-48d2-44e4-bb2a-abe502b11b50/air-max-270-shoes-s1JpCx.png',
  },
  {
    name: 'shoes 8',
    price: 'PAK 2000',
    image:
      'https://storage.sg.content-cdn.io/cdn-cgi/image/width=550,height=412,quality=75,format=auto/in-resources/e671b7de-bcf9-4637-af5c-0ffe1c9d208a/Images/ProductImages/Source/1011B192_004_SR_RT_GLBnw.jpg',
  },
];
export default function Counter({navigation}) {
  const dispatch = useDispatch();
  const {results,cart} = useSelector(state => state.mainReducer);

console.log("counterr"  ,cart);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    console.log('data' + JSON.stringify(data));
    dispatch(getDataMethod(data));
    // dispatch(additemToCart(item));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 15,
              color: 'black',
              fontWeight: '800',
            }}>
            REDUX
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.cart}>Cart</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={results?.results}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderWidth: 0.2,
                  borderColor: '#8e8e8e',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <View style={{width: '60%', padding: 20}}>
                  <Text>{item.name?.first}</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>
                    {item.price}
                  </Text>
                  <View
                    style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                    <TouchableOpacity
                      onPress={() => dispatch(additemToCart(additemToCart))}
                      style={styles.cart}>
                      <Text style={{color: '#fff'}}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  source={{uri: item.picture?.medium}}
                  style={{
                    width: 100,
                    height: 90,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: '600',
    backgroundColor: 'green',
    color: '#fff',
    padding: 7,
    borderRadius: 10,
  },
});
