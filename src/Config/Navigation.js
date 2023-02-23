import * as React from 'react';
import { View, Text, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens
import MainPage from '../Screens/MainPage';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';

import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import UserSetting from '../Screens/UserSetting';

import AddItem from '../Screens/AddItem';
import AdminAccount from '../Screens/AdminAccount';
import AdminHome from '../Screens/AdminHome';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="User">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="User" component={MyTabs} />

        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="Admin" component={AdminAccount} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Setting" component={UserSetting} />

    </Tab.Navigator>
  );
}

export default Navigation;