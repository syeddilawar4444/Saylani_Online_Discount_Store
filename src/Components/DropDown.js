import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        // { label: 'pick', value: null },
        { label: 'Fruit', value: 'fruit' },
        { label: 'Vegitable', value: 'vegitable' },
        { label: 'Grocery', value: 'grocery' },
        { label: 'Dry Fruit', value: 'dryFruit' }])

    return (
        <View>
            <DropDownPicker
                defaultValue="bilal"
                dropDownDirection={false}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                // disableBorderRadius={true}



                style={{
                    // borderWidth: 0,
                    // backgroundColor: 0,
                    // width: 300,
                    // alignSelf: 'center',
                    // borderBottomWidth: 1,
                    // borderBottomColor: '#D4D3D3',

                }}
            />
        </View>
    );
};

export default Dropdown;