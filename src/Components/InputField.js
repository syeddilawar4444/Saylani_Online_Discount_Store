import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from "react-native"

function InputField(props) {
  return (
    <TextInput {...props} style={{backgroundColor:"#e0e0e0",borderRadius:100,color :"#054516",paddingHorizontal:10, width:"77%",paddingVertical:10,marginTop:14,fontSize:16 }}  />
  )
}
// const styles = StyleSheet.create({

// })


export default InputField
