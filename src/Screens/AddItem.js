import { Image, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import React, { useState } from 'react'
// import * as ImagePicker from 'expo-image-picker';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import NavbarAdmin from '../Components/NavAdmin';


const AddItem = () => {

    const [image, setImage] = useState(null);

    // const pickImage = async () => {
    //     // No permissions request is necessary for launching the image library
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });
    //     console.log(result);

    //     if (!result.canceled) {
    //         setImage(result.assets[0].uri);
    //     }

    // }
    return (
        <>
            <View>
                <NavbarAdmin />
            </View>
            <View>
                <Text onPress={()=>{Alert.alert("add item page")}}>AddItem</Text>

                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </>
    )
}

export default AddItem

const styles = StyleSheet.create({})