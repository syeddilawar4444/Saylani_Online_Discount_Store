import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Product = () => {
  const data = [
    {
      name: 'Grocery',
      img: 'https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8=',
    },
  ];
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
        ,
        marginVertical:10
      }}>
      <View>
        <Image
          style={{width: 130, height: 70, borderRadius: 20}}
          source={{uri: data[0].img}}
        />
      </View>
      <View style={{flex:2,marginLeft:5}}>
        <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>
          Apple
        </Text>
        <Text
          style={{
            paddingLeft: 10,
            fontSize: 16,
            color: 'gray',
            fontWeight: '600',
          }}>
          1.0 Kg
        </Text>
      </View>
      <Text style={{fontSize: 18, color: 'gray'}}>$21.10</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
