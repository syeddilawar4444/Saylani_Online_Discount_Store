import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavbarAdmin from '../Components/NavAdmin'
import Product from '../Components/Product'

const AdminHome = ({ navigation }) => {
    return (
        <View>
            <NavbarAdmin />
            <View style={{ paddingHorizontal: 10 }}>

                <Text style={{ color: "#464773", fontSize: 25 }} onPress={() => { navigation.navigate("Order") }}>All Products</Text>

                <Product />



            </View>
        </View>
    )
}

export default AdminHome

const styles = StyleSheet.create({})