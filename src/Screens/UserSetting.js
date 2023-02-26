import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import OrderView from '../Components/OrderView';

const UserSetting = () => {
  const img =
    'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo-thumbnail.png';
  const [showCheck, setShowCheck] = useState('');
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          color: 'skyblue',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: 2,
        }}>
        Settings
      </Text>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={{uri: img}}
          />
        </View>

        <View
          style={{
            width: '67%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <TextInput
            maxLength={24}
            style={{fontSize: 20}}
            placeholder="Update Full Name"
            onChangeText={e => setShowCheck(e)}
          />
          {showCheck.length > 10 ? (
            <Icons name="check" color="red" size={30} />
          ) : (
            ''
          )}
        </View>
      </View>

      <View style={{paddingHorizontal: 10}}>
        <Text
          style={{
            fontSize: 23,
            letterSpacing: 2,
            color: '#003275',
            fontWeight: 'bold',
          }}>
          Orders
        </Text>
      </View>

      <OrderView />
      <OrderView />

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingVertical: 13,
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 10,
          
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            letterSpacing: 3,
            fontWeight: 'bold',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserSetting;

const styles = StyleSheet.create({});
