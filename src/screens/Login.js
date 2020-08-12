import React from 'react'
import { View, Text,Image } from 'react-native'
import {  Button } from 'react-native-paper'

function Login({ navigation }) {

   

    return (
        <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
            <Image source={require('../../assests/logo1.png')} style={{width:140,height:140,borderRadius:90}}/>
           
            <Button mode='contained' onPress={()=>navigation.navigate('Dashboard')} 
            style={{marginTop:100}}
             contentStyle={{ backgroundColor: '#0000ff', width: 120, borderRadius: 5 ,}}>Home</Button>

        </View>
    )
}

export default Login
