import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ShoppingCard from '../Components/ShoppingCard';

import React from 'react'


const Cart = () => {
    return (

        <View style={{paddingHorizontal:10}}>

        <View style={{alignSelf:'flex-end'}}>
            <Icon name="user" size={20} />
        </View>
            {/* shopping heading and delete Icon */}
        <View style={{paddingHorizontal:8}}>
    
            <Text style={{fontSize:25,color:"lightblue"}}>Shopping</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:"green",fontSize:20,fontWeight:"bold",letterSpacing:2}}>Cart</Text>
            <MaterialIcons name="delete-outline" size={25} color="red" />
            </View>  
                      
        <ShoppingCard />

        </View>
        




    </View>

    )
}

export default Cart

const styles = StyleSheet.create({})