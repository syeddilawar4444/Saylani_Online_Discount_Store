import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default function AlertAwesome({ show, title, message }) {



    return (
        <AwesomeAlert
            show={show}
            showProgress={false}
            title={title}
            useNativeDriver={true}
            message={message}
            closeOnTouchOutside={false}
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
                const [setShowAlert] = show
                setShowAlert(false)
            }}
        />

    );
};


