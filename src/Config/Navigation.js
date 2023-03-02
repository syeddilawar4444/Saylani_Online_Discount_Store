import * as React from 'react';
import { View, Text, Settings, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
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


import NavbarAdmin from '../Components/NavAdmin';

import AdminOrders from '../Screens/AdminOrdersScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Admin">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Order" component={AdminOrders} />



        {/* <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="Admin" component={AdminAccount} />
        <Stack.Screen name="AdminHome" component={AdminHome} /> */}
        <Stack.Screen name="Abd" component={UserSetting} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}





function User() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#50bd48",

        tabBarLabelStyle: {
          fontSize: 14,
          color: "gray"
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,

        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <Icon name="home" size={22} color={color} />
        )
      }
      }
      />
      <Tab.Screen name="Cart" component={Cart}
        options={{
          headerShown: false,

          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" size={22} color={color} />
          )
        }
        }
      />
      <Tab.Screen name="Setting" component={UserSetting}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Icon name="user-alt" size={22} color={color} />
          )
        }
        }
      />

    </Tab.Navigator>
  );
}

function Admin() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#50bd48",

        tabBarLabelStyle: {
          fontSize: 14,
          color: "gray"
        }
      }}
    >
      <Tab.Screen name="AdminHome" component={AdminHome} options={{
        headerShown: false,
        headerPressColor: "red",



        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <Icon name="home" size={22} color={color} />
        )
      }
      }
      />
      <Tab.Screen name="AddItem" component={AddItem}
        options={{
          headerShown: false,

          tabBarLabel: "Add Items",
          tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" size={22} color={color} />
          )
        }
        }
      />
      <Tab.Screen name="AdminAccount" component={AdminAccount}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Icon name="user-alt" size={22} color={color} />
          )
        }
        }
      />

    </Tab.Navigator>
  );
}

export default Navigation;