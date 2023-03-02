import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import AdminOrder from "../Components/AdminOrder"
import NavbarAdmin from '../Components/NavAdmin';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const AdminOrders = () => {
    const img1 =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdopf3iLiIiQuBLexpctGkTw3ywqhaKIl9zg&usqp=CAU';

    return (
        <>
            <NavbarAdmin />
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: "#024F9D", fontWeight: "700" }} >Orders</Text>
                <AdminOrder />
            </View>
        </>

    );
};

export default AdminOrders;

const styles = StyleSheet.create({});
