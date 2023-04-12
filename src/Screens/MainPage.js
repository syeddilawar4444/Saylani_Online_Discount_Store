import React from 'react'
import { ImageBackground, View, SafeAreaView, Text, Platform, StatusBar, Image, TouchableOpacity } from "react-native"
// // import BackImg from "../assets/Background.jpg"
// import Background from '../Componets/Background'
// import Btn from "../Componets/Btn"
function MainPage(props) {



  return (
    <>
      <View style={{ width: "100%", backgroundColor: "white", paddingHorizontal: 30, justifyContent: "center", height: "100%" }} >
        <Image style={{ width: 200, height: 200, alignSelf: "center" }} source={require("../assets/logo/saylanilogo.jpeg")} />
        <Text style={{ marginTop: 50, fontSize: 26, alignSelf: "center", color: "green", fontWeight: "bold" }}>SAYLANI WELFARE</Text>
        <Text style={{ marginTop: 10, fontSize: 20, alignSelf: "center" }}>ONLINE DISCOUNT STORE</Text>

        <View style={{ alignItems: "center", marginTop: 18, }}>
          <TouchableOpacity style={{ backgroundColor: "#228B22", borderRadius: 10 }} title='GET STARTED' onPress={() => props.navigation.navigate("Login")} >
            <Text style={{ color: "white", fontSize: 16, padding: 10, fontWeight: "bold" }}>
              GET STARTED
            </Text></TouchableOpacity>
        </View>
      </View>
    </>
  )
}
// const styles = StyleSheet.create({
// })
export default MainPage