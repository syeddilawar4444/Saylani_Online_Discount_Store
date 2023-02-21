import React from 'react'
import { Text, TouchableOpacity, View,Image } from "react-native"

function BoxFilter({title,img}) {
  return (
      <View style={{borderRadius:30,margin:10,}}>
        <Image resizeMode='cover' style={{width:100,height:60,borderRadius:50,borderWidth: 6}} source={{uri:img}} />
            <Text style={{fontSize:17}}>
                {title}
            </Text>
          </View>
      )
    }
    // const styles = StyleSheet.create({
// })
export default BoxFilter
