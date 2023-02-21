import React from 'react'
import { Text, TouchableOpacity, View } from "react-native"

function Home({ bgColor, btnLable,textColor,press }) {
  return (
    <TouchableOpacity onPress={press} style={{ marginTop:20, paddingVertical:8 , backgroundColor: bgColor, borderRadius: 100, alignItems: "center",width:300 }}>
      <View>
            <Text style={{ color: textColor,fontSize:24,}}>
              {btnLable}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }
    // const styles = StyleSheet.create({

// })
export default Home
