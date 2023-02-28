import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import NavbarAdmin from '../Components/NavAdmin';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDown from '../Components/DropDown';
import CustomDropdown from '../Components/CustomDropdown';

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
                <ScrollView style={{ paddingHorizontal: 10 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={{ color: '#464773', fontSize: 25 }}>Add New Item</Text>

                    <View
                        style={
                            {
                                // flex: 0.
                                paddingHorizontal: 10,
                                // height: 800,
                                marginTop: 10,
                                // backgroundColor: "red"
                            }
                        }>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#D9D9D9',
                                height: 200,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 20,
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
                                backgroundColor: '#D9D9D9',
                                borderRadius: 20,
                                color: '#054516',
                                paddingHorizontal: 20,
                                marginVertical: 14,
                                fontSize: 16,
                            }}
                        />
                        <CustomDropdown />
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            onSubmitEditing={() => {
                                // emailInputRef.current.focus();
                            }}
                            maxLength={24}
                            blurOnSubmit={false}
                            placeholder="Describe Item"
                            style={{
                                backgroundColor: '#D9D9D9',
                                borderRadius: 20,
                                color: '#054516',
                                paddingHorizontal: 20,
                                marginVertical: 14,
                                fontSize: 16,
                                // textAlign: "justify"
                                verticalAlign: 'top',
                            }}
                        />
                        {/* <DropDown /> */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 22 }}>Unit Name:</Text>
                            <TextInput
                                onSubmitEditing={() => {
                                    // emailInputRef.current.focus();
                                }}
                                maxLength={24}
                                blurOnSubmit={false}
                                placeholder="Pcs./Kg/Dozen"
                                style={{
                                    width: "60%",
                                    backgroundColor: '#D9D9D9',
                                    borderRadius: 20,
                                    color: '#054516',
                                    paddingHorizontal: 20,
                                    // marginVertical: 14,
                                    fontSize: 16,
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 22 }}>Unit Price:</Text>
                            <TextInput
                                onSubmitEditing={() => {
                                    // emailInputRef.current.focus();
                                }}
                                maxLength={24}
                                blurOnSubmit={false}
                                placeholder="$4.55"
                                style={{
                                    width: "60%",
                                    backgroundColor: '#D9D9D9',
                                    borderRadius: 20,
                                    color: '#054516',
                                    paddingHorizontal: 20,
                                    marginVertical: 14,
                                    fontSize: 16,
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default AddItem;

const styles = StyleSheet.create({});
