import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const NavbarAdmin = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        borderBottomColor: '#adadad',
        borderBottomWidth: 3,
        paddingVertical: 10
      }}>
      <View
        style={{ flexDirection: 'row', alignItems: "center" }}>
        <View style={{ flex: 1.50, }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={{
              uri: 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo-thumbnail.png',
            }}
          />
        </View>

        <View style={{ flex: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#233f7a' }}>
            Syed Dilawar{' '}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>Admin</Text>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          navigation.navigate("Order")
        }}>
          <Image

            style={{ width: 40, height: 40 }}
            source={require('../assets/Order.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavbarAdmin;

const styles = StyleSheet.create({});
