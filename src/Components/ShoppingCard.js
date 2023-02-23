import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import React, { useState } from 'react';



const ShoppingCard = () => {
    const [num, setNum] = useState(1000)
    return (
        <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{
                    width: 110, height: 70, borderRadius: 20, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                }} source={{ uri: 'https://media.istockphoto.com/id/165835419/photo/large-group-of-canned-food-sitting-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=KZTuXHShupJ8ID-fql5DhUEL5__YhFJ2K2YgxDu8kJM=' }} />
                <Text>Item Name</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="minus" color="black" />
                <Text style={{ backgroundColor: "#D3D3D3", paddingHorizontal: 8, fontSize: 12, color: "black", marginHorizontal: 2 }}>
                    {num}
                </Text>
                <Icon name="plus" color="black" />
            </View>

            <Text>$25.00</Text>


        </View>






    )
}

export default ShoppingCard

const styles = StyleSheet.create({})