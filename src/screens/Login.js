import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper'

function Login({ navigation }) {



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Image source={require('../../assests/logo1.png')} style={{ width: 100, height: 100, }} />

            <Button mode='contained' onPress={() => navigation.navigate('Dashboard')}
                style={{ marginTop: 150 }}
                contentStyle={{ backgroundColor: '#0000ff', width: 120, height: 40, borderRadius: 7, padding: 5 }}>Home</Button>

        </View>
    )
}

export default Login
