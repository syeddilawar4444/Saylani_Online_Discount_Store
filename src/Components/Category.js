import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
// import NavbarAdmin from '../Components/NavAdmin';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Category = () => {
    const img1 =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdopf3iLiIiQuBLexpctGkTw3ywqhaKIl9zg&usqp=CAU';

    let arr = [
        {
            name: "Vegetable"
            ,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdopf3iLiIiQuBLexpctGkTw3ywqhaKIl9zg&usqp=CAU'
        }
    ]

    return (
        <View
            style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 20,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#65BD50",
                gap: 40
            }}>
            <Image source={{ uri: arr[0].img }} style={{ width: 40, height: 40, borderRadius: 50 }} />
            <Text style={{ fontSize: 18, color: "#65BD50", fontWeight: "700" }} >{arr[0].name}</Text>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({});
