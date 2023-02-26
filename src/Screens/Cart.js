import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Pressable,Alert, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ShoppingCard from '../Components/ShoppingCard';

import React,{useRef} from 'react';

const Cart = () => {

  const email = useRef("");
  const phoneNumber = useRef("");
  const shippingAddress = useRef("");


  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  

  return (
    <View style={{paddingHorizontal: 10, flex: 1, backgroundColor: 'white'}}>
      <View style={{alignSelf: 'flex-end'}}>
        <Icon name="user" size={20} />
      </View>
      {/* shopping heading and delete Icon */}
      <View style={{paddingHorizontal: 8, flex: 1}}>
        <Text style={{fontSize: 25, color: 'lightblue'}}>Shopping</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'green',
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Cart
          </Text>
          <MaterialIcons name="delete-outline" size={25} color="red" />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          data={data}
          renderItem={({item}) => <ShoppingCard title={item.title} />}
          // keyExtractor={item => item.id}
        />
        {/* <ScrollView
          showsVerticalScrollIndicator={true}
          scrollEnabled={tru}
          contentContainerStyle={{height:300}}>
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />

          <ShoppingCard />

        </ScrollView> */}
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />

        {/* shipping Form */}
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>Total</Text>
            <Text style={[styles.text]}>$185</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              maxLength={24}
              blurOnSubmit={false}
              selectionColor="lightgray"
              // textAlign={"center"}
              // value={username}
              // enterKeyHint={"next"}
              // onChangeText={(e) => setUsername(e)}
              placeholder="FullName"
              placeholderTextColor={'gray'}
              onSubmitEditing={()=>{
                email.current.focus()
              }}
              returnKeyType="next"
              style={{
                // backgroundColor: "#e0e0e0",
                // borderRadius: 50,
                color: '#054516',
                paddingHorizontal: 10,
                width: '77%',
                paddingVertical: 8,
                marginTop: 14,
                fontSize: 20,
                // width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                letterSpacing: 3,
              }}
            />
            <TextInput
            ref={email}
              maxLength={24}
              blurOnSubmit={false}
              selectionColor="lightgray"
              onSubmitEditing={()=>{
                phoneNumber.current.focus()
              }}
              returnKeyType="next"

              // value={username}
              // enterKeyHint={"next"}
              // onChangeText={(e) => setUsername(e)}
              placeholder="Email Address"
              placeholderTextColor={'gray'}
              style={{
                color: '#054516',
                paddingHorizontal: 10,
                width: '77%',
                paddingVertical: 8,
                marginTop: 14,
                fontSize: 20,
                // width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                letterSpacing: 3,
              }}
            />
            <TextInput
              maxLength={24}
              blurOnSubmit={false}
              ref={phoneNumber}
              // value={username}
              selectionColor="lightgray"
              onSubmitEditing={()=>{
                shippingAddress.current.focus()
              }}
          

              // enterKeyHint={"next"}
              // onChangeText={(e) => setUsername(e)}
              placeholder="Phone Number"
              placeholderTextColor={'gray'}
              style={{
                // backgroundColor: "#e0e0e0",
                // borderRadius: 50,
                color: '#054516',
                paddingHorizontal: 10,
                width: '77%',
                paddingVertical: 8,
                marginTop: 14,
                fontSize: 20,
                // width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                letterSpacing: 3,
              }}
            />
            <TextInput
              // maxLength={24}
              blurOnSubmit={false}
              selectionColor="lightgray"
              ref={shippingAddress}
              returnKeyType="done"
              // value={username}
              // enterKeyHint={"next"}
              // onChangeText={(e) => setUsername(e)}
              placeholder="Shipping Address"
              placeholderTextColor={'gray'}
              numberOfLines={3}
              multiline={true}
              style={{
                // backgroundColor: "#e0e0e0",
                // borderRadius: 50,
                color: '#054516',
                paddingHorizontal: 10,
                // borderWidth: 1,
                width: '77%',
                paddingVertical: 8,
                marginTop: 14,
                fontSize: 20,
                // width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                letterSpacing: 3,
                alignSelf: 'flex-start',
                alignItems:"center"              
              }}
            />
            <TouchableOpacity style={{backgroundColor:"green",paddingVertical:13,borderRadius:10,alignItems:"center",marginVertical:10}}>
              <Text style={{fontSize:18,color:"white",letterSpacing:3,fontWeight:"bold"}}>Place Order</Text>
            </TouchableOpacity>

              {/* <Button title='Dilawar' /> */}
            
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'black',
  },
});
