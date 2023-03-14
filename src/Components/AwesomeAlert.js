import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default function AlertAwesome({ show, title, message, setShowAlert, success }) {


    const [off, setOff] = useState(show)
    return (
        <AwesomeAlert
            show={show}
            showProgress={false}
            title={title}
            titleStyle={{
                color: success ? "green" : "red",
                fontSize: 25,
                fontWeight: "bold"

            }}
            useNativeDriver={true}
            message={message}
            messageStyle={{
                fontSize: 18,
                textAlign: "center",
                color: "gray"
            }}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            showConfirmButton={true}
            // cancelText="No, cancel"
            confirmText="OK"
            confirmButtonColor="#DD6B55"
            // onCancelPressed={() => {
            //     this.hideAlert();
            // }}
            onConfirmPressed={() => {
                setShowAlert(false)
            }}
        />

    );
};


