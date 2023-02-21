import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavbarAdmin from '../Components/NavAdmin'

const AdminHome = () => {
    return (
        <View>
            <NavbarAdmin />
            <Text>Welcome to Home</Text>
        </View>
    )
}

export default AdminHome

const styles = StyleSheet.create({})