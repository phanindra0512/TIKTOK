import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

import Login from './src/screens/Login';
import Signup from './src/screens/Signup'
import Dashboard from './src/screens/Dashboard'
import SettingsScreen from './src/screens/SettingsScreen'
import Search from './src/screens/Search'
import Create from './src/screens/Create';
import Notification from './src/screens/Notification'
import TestHome from './src/screens/TestHome';
import VideoRecord from './src/screens/Test';
import DoIt from './src/screens/DoIt';

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: 'rgba(22, 22, 22, 0.6)', elevation: 0, }}
    >
      <Tab.Screen name="Home" component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen name="Create" component={Create}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sticker-plus" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarLabel: 'Notifications',
          tabBarBadge: true,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications-active" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen name="Settings" component={SettingsScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}


function App() {

  return (
    <NavigationContainer>
      <StatusBar translucent barStyle="light-content-content" backgroundColor="transparent" />
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="DoIt" component={DoIt}
          options={{
            title: null,
            headerRight: () => (
              <MaterialCommunityIcons name="share-outline" size={30} color="black" style={{ paddingRight: 10 }} />
            ),
          }}

        />
        <Stack.Screen name="VideoRecord" component={VideoRecord} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
