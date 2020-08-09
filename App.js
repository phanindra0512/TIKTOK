import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Login from './src/screens/Login';
import Signup from './src/screens/Signup'
import Dashboard from './src/screens/Dashboard'

const Stack = createStackNavigator()


function App() {


  return (
<NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#002459" />
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name="Dashboard" component={Dashboard}  />
        </Stack.Navigator>
        </NavigationContainer>
   
  )
}

export default App
