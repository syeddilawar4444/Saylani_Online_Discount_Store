import React, { useState, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform, Alert,
  ActivityIndicator, ScrollView
} from "react-native";
// import AwesomeAlert from 'react-native-oawesome-alerts';
import AwesomeAlert from "../Components/AwesomeAlert";
// import axios from "axios";
//import components
// import Background from "../Componets/Background";
import InputField from "../Components/InputField";
import Icon from "react-native-vector-icons/AntDesign"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
import Btn from "../Components/Btn";
// import BaseUrl from "../constant/BaseUrl"
// import { signUpFirebase } from "../Config/firebase"

function Signup(props) {

  const emailInputRef = useRef("");
  const contactInputRef = useRef("");
  const passwordInputRef = useRef("");
  const cpasswordInputRef = useRef("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setConPassword] = useState("");


  const [showAlert, setShowAlert] = useState(false)
  const [alertValue, setAlertValue] = useState()
  const [titleAlert, setTitleAlert] = useState("welcome")
  const [messageAlert, setMessageAlert] = useState("OPP")



  const [loading, setLoading] = useState(false)

  const alertManage = (bol, title, message) => {
    setShowAlert(bol)
    setTitleAlert(title)
    setMessageAlert(message)
  }


  const signUpUser = async () => {
    let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setLoading(true)
    if (!email || !username || !contact || !password || !cPassword) {

      setLoading(false)

      return alertManage(true, "OOPs!", "Please fill the form all input are valid ")



      // return alert("Please Fill The Form");
    }

    if (!email.match(validRegex)) {
      setLoading(false)
      return alertManage(true, "Invalid", "Invalid Email Please Enter Valid Email ")

    }
    if (isNaN(contact) || contact.length < 10) {
      setLoading(false)
      return alertManage(true, "Invalid", "Invalid Mobile Number Please Enter Valid Number ")
    }

    // if (contact.length < 11) {
    //   setLroading(false)
    //   return alert("Mobile Number invalid");
    // }

    if (!(password === cPassword)) {
      setLoading(false)
      return alertManage(true, "Not Match", "Password and Confirm Password Did Not Match")

    }
    try {
      const response = await fetch("http://192.168.4.106:4001/auth/signup", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          phone: contact,
          password: password
        }
        ),
      })
      const msg = await response.json()
      console.warn(msg)
      setLoading(false)
      setUsername("")
      setPassword("")
      setEmail("")
      setContact("")
      setConPassword("")


      Alert.alert(
        "SignUp",
        "Successfully Registered",
        // [{
        //   text: "OK",
        //   onPress: () => { props.navigation.replace("Login") }
        // }]
      )

    } catch (e) {
      setLoading(false)
      console.warn("error")
      console.warn(e)
      switch (e.message) {
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
          alert("Password at least 6")
          break;
        case "Firebase: Error (auth/invalid-email).":
          alert("invalid-email")
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          alert("user already exist")
          break;
        default:
          alert("Unknown Error Occured")
      }
    }
  }


  return (
    <>
      {/* <KeyboardAvoidingView behavior=""> */}
      <ScrollView
        style={{

        }}
        contentContainerStyle={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#3CB371",
        }}
      >

        {/* <AwesomeAlert show={showAlert} title="Dilawar" message={"Invalid Password / email"} setShowAlert={setShowAlert} /> */}

        <AwesomeAlert show={showAlert} title={titleAlert} message={messageAlert} setShowAlert={setShowAlert} />

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Register
          </Text>
          <Text style={{ fontSize: 24, color: "white", marginBottom: 10 }}>
            Create New Account
          </Text>
        </View>

        {/* form container */}
        <View
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 200,
            paddingTop: 60,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 30, color: "#054516" }}>SAYLANI WELFAER</Text>
          <Text>ONLINE DISCOUNT STORE</Text>
          <View style={{
            flexDirection: 'row', alignItems: "center", backgroundColor: "#e0e0e0",
            borderRadius: 100,
            color: "#054516",
            paddingHorizontal: 10,
            width: "77%",
            paddingVertical: 3,
            marginTop: 14,
            fontSize: 16,
          }} >
            {/* <Icon name="user" size={25} /> */}
            <Material name="account-outline" size={25} />

            <TextInput
              autoFocus
              onSubmitEditing={() => {
                emailInputRef.current.focus();
              }}
              maxLength={24}
              blurOnSubmit={false}
              returnKeyType="next"
              value={username}
              enterKeyHint={"next"}
              onChangeText={(e) => setUsername(e)}
              placeholder="UserName..."
              style={{

                fontSize: 16,
              }}
            />
          </View>
          <View style={{
            flexDirection: 'row', alignItems: "center", backgroundColor: "#e0e0e0",
            borderRadius: 100,
            color: "#054516",
            paddingHorizontal: 10,
            width: "77%",
            paddingVertical: 3,
            marginTop: 14,
            fontSize: 16,
          }} >
            <Material name="email-outline" size={25} />
            <TextInput
              value={email}
              ref={emailInputRef}
              onSubmitEditing={() => {
                contactInputRef.current.focus();
              }}
              returnKeyType="next"
              onChangeText={(e) => setEmail(e)}
              placeholder="email@gmail..."
              keyboardType={"email-address"}
              style={{
                fontSize: 16,
                width: "90%"
              }}
            />
          </View>


          <View style={{
            flexDirection: 'row', alignItems: "center", backgroundColor: "#e0e0e0",
            borderRadius: 100,
            color: "#054516",
            paddingHorizontal: 10,
            width: "77%",
            paddingVertical: 3,
            marginTop: 14,
            fontSize: 16,
          }} >
            <Material name="cellphone" size={25} />
            <TextInput
              ref={contactInputRef}
              onSubmitEditing={() => {
                passwordInputRef.current.focus();
              }}
              returnKeyType="next"
              value={contact}
              maxLength={12}
              onChangeText={(e) => setContact(e)}
              placeholder="923xxxxxxxx"
              keyboardType={"numeric"}
              style={{

                fontSize: 16,
              }}
            />
          </View>

          <View style={{
            flexDirection: 'row', alignItems: "center", backgroundColor: "#e0e0e0",
            borderRadius: 100,
            color: "#054516",
            paddingHorizontal: 10,
            width: "77%",
            paddingVertical: 3,
            marginTop: 14,
            fontSize: 16,
          }} >
            <Material name="lock-outline" size={25} />
            <TextInput
              ref={passwordInputRef}
              value={password}
              onSubmitEditing={() => {
                cpasswordInputRef.current.focus();
              }}
              returnKeyType="next"
              onChangeText={(e) => setPassword(e)}
              placeholder="Password..."
              secureTextEntry={true}
              style={{

                fontSize: 16,
              }}
            />
          </View>
          <View style={{
            flexDirection: 'row', alignItems: "center", backgroundColor: "#e0e0e0",
            borderRadius: 100,
            color: "#054516",
            paddingHorizontal: 10,
            width: "77%",
            paddingVertical: 3,
            marginTop: 14,
            fontSize: 16,
          }} >
            <Material name="lock-outline" size={25} />
            <TextInput
              ref={cpasswordInputRef}
              onSubmitEditing={() => signUpUser()}
              value={cPassword}
              onChangeText={(e) => setConPassword(e)}
              placeholder="Confirm Password..."
              secureTextEntry={true}
              style={{

                fontSize: 16,
              }}
            />
          </View>

          {/* fotgetpassword */}
          {/* <View style={{alignItems:"flex-end",width:"77%"    }}>
                                <Text style={{color:"#054516", fontSize:16,marginTop:13}} >Forgot Password ?</Text>
                              </View> */}
          {/* loginButton */}

          {loading ? <ActivityIndicator style={{ alignSelf: "center", marginTop: 10 }} size={"large"} color="#0000ff" />
            : <Btn
              bgColor="#3CB371"
              textColor="white"
              btnLable="SignUp"
              press={signUpUser}
            />
          }


          {/* Don't have an account */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 15,
              justifyContent: "center",
            }}
          >
            <Text>Already hava an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "#054516", fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("User")}
            >
              <Text style={{ color: "#054516", fontSize: 16 }}>User</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Admin")}
            >
              <Text style={{ color: "#054516", fontSize: 16 }}>Admin</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
export default Signup;
