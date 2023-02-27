import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    TextInput,

} from 'react-native';
import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import NavbarAdmin from '../Components/NavAdmin';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDown from '../Components/DropDown';

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
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ color: '#464773', fontSize: 25 }}>Add New Item</Text>

                    <View
                        style={{
                            backgroundColor: 'red',
                            paddingHorizontal: 10,
                            height: 800,
                            marginTop: 10,
                        }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#D9D9D9',
                                height: 200,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 20
                            }}>
                            <Icon name="camera" size={60} style={{ opacity: 0.6 }} />
                        </TouchableOpacity>

                        <TextInput
                            autoFocus
                            onSubmitEditing={() => {
                                // emailInputRef.current.focus();
                            }}
                            maxLength={24}
                            blurOnSubmit={false}

                            placeholder="Item Name"
                            style={{
                                backgroundColor: "#D9D9D9",
                                borderRadius: 20,
                                color: "#054516",
                                paddingHorizontal: 20,
                                marginTop: 14,
                                fontSize: 16,
                            }}
                        />


                        <DropDown />


                    </View>
                </View>
            </View>
        </>
    );
};

export default AddItem;

const styles = StyleSheet.create({});
