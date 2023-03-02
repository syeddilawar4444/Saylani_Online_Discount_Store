import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';
import React, { useState } from 'react';
import NavbarAdmin from '../Components/NavAdmin';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../Components/Category';

const AdminAccount = () => {
    const img =
        'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo-thumbnail.png';

    const [showCheck, setShowCheck] = useState('');

    const data = [1, 23, 4, 5]

    return (
        <View style={{ paddingHorizontal: 10 }}>
            {/* <NavbarAdmin /> */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="ios-chevron-back" size={28} style={{ flex: 0.15 }} />
                <Text
                    style={{
                        fontSize: 24,
                        color: '#024F9D',
                        flex: 2,
                        fontWeight: 'bold',

                        textAlign: 'center',
                    }}>
                    Setting
                </Text>
            </View>

            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10,
                }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                        source={{ uri: img }}
                    />
                </View>

                <View
                    style={{
                        width: '67%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                    }}>
                    <TextInput
                        maxLength={24}
                        style={{ fontSize: 20, fontWeight: 'bold' }}
                        placeholder="Update Full Name"
                        placeholderTextColor={'#D4D3D3'}
                        onChangeText={e => setShowCheck(e)}
                    />
                    {showCheck.length > 10 ? (
                        <Icons name="check" color="red" size={30} />
                    ) : (
                        ''
                    )}
                </View>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#D9D9D9',
                        height: 110,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        width: '100%',
                    }}>
                    <Icons name="camera" size={50} style={{ opacity: 0.6 }} />
                </TouchableOpacity>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}>
                    <TextInput
                        onSubmitEditing={() => {
                            // emailInputRef.current.focus();
                        }}
                        maxLength={24}
                        blurOnSubmit={false}
                        placeholder="New Category Name"
                        style={{
                            width: '60%',
                            backgroundColor: '#D9D9D9',
                            borderRadius: 20,
                            color: '#054516',
                            paddingHorizontal: 20,
                            fontSize: 16,
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            borderRadius: 20,
                            padding: 13,
                            backgroundColor: '#61B846',
                        }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ fontSize: 20, color: '#024F9D', fontWeight: 'bold' }}>
                        All Categories
                    </Text>
                    <FlatList
                        style={{ height: 200 }}
                        data={data}
                        renderItem={() => <Category />}
                    />

                    <TouchableOpacity style={{ backgroundColor: "#61B846", paddingVertical: 15, borderRadius: 10, alignItems: "center", marginVertical: 10 }}>
                        <Text style={{ fontSize: 18, color: "white", letterSpacing: 3, fontWeight: "bold" }}>Logout</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </View>
    );
};

export default AdminAccount;

const styles = StyleSheet.create({});
