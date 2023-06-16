import { StyleSheet, Text, View ,TouchableOpacity ,FlatList,Image} from 'react-native'
import React,{useEffect ,useState}from 'react'
import { useDispatch } from 'react-redux';


list = [
    {
      name: 'Product',
      price: 'Rs 500/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAwuE0QnEhRpjVJ7ItmrA14hKM5nlzQC-0X1huJI&s'
    }
];

const Cart = ({navigation}) => {
  return (
    <View style={styles.mainView}>
    <View   style={{
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
       <Text  style={{fontSize: 30, marginLeft: 18,color: 'black',fontWeight: '800'}}>Counter</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cart}>Favourite</Text>
      </TouchableOpacity>
      </View>
      <FlatList
       data={cart?.cart}
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
          <View style={{width: '70%', padding: 20}}>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}
                      style={styles.cart}>
                      <Text style={{color: '#fff'}}>{item.price}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => dispatch(addition(counter))}>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  source={{uri: item.image}}
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
  )
}

export default Cart

const styles = StyleSheet.create({
  
  mainView:{
    flex: 1 ,
    backgroundColor:"lightpink",
   },
   cart: {
       fontSize: 20,
       marginRight: 20,
       fontWeight: '600',
       backgroundColor: 'lightblue',
       color: '#fff',
       padding: 7,
       borderRadius: 10,
     },

})