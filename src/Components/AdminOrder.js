import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderView = () => {
  const img =
    'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo-thumbnail.png';
  const [showCheck, setShowCheck] = useState('');
  return (
    <View style={{ paddingHorizontal: 22, marginTop: 10 }}>
      {/* main heading */}
      <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
        Syed Dilawar Hussain
      </Text>

      {/* innerside contact number */}
      <View style={{ paddingHorizontal: 5 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Text style={[styles.text, { fontStyle: 'italic' }]}>
            just now - pending
          </Text>
          <Text style={styles.text}>03181195330</Text>
        </View>

        <View>
          <Text>2x3 item Name</Text>
          <Text>2x3 item Name</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={[styles.text, { fontSize: 17, fontWeight: 'bold' }]}>
            Total
          </Text>
          <Text style={{ fontSize: 17, color: "green", fontWeight: "bold" }}>$185</Text>
        </View>

      </View>

      {/* 2px gray line */}
      <View
        style={{
          borderBottomColor: '#a8a8a8',
          borderBottomWidth: 3,
        }}
      />

    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
  },
});
