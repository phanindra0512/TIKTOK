import React from 'react'
import { View, Text, } from 'react-native'
import {  Button } from 'react-native-paper'

function Login({ navigation }) {

   

    return (
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
           <Text>Login Screen</Text>
            <Button mode='contained' onPress={()=>navigation.navigate('Dashboard')}>Login</Button>
            <Button mode='contained' onPress={()=>navigation.navigate('Dashboard')}>Login</Button>

           <Text style={{fontSize:20,fontWeight:'bold'}} onPress={()=>navigation.navigate('Signup')}>Signup</Text> 
        </View>
    )
}

export default Login
