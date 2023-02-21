import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screens
import MainPage from '../Screens/MainPage';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import AddItem from '../Screens/AddItem';
import AdminAccount from '../Screens/AdminAccount';
import AdminHome from '../Screens/AdminHome';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"red" }}>
      <Text style={{color:"green"}}>Home Screen ha ya </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="AdminHome">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="Admin" component={AdminAccount} />
        <Stack.Screen name="AdminHome" component={AdminHome} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;