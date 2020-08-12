import React from 'react';
import {View, Text ,Image,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height = height - 50 } = Dimensions.get("window");


function Info() {
  return (
    <View style={{flex: 1,position:'absolute',paddingTop:500,width:width}}>
      <View style={{flex: 1,justifyContent:'center'}}>
        <View style={{flex: 1,marginTop:-10}}>
          <Text style={{color:'white',marginLeft:8}}>@narendra</Text>
        </View>
        <View style={{flex: 2,width:200,}}>
          <Text style={{color:'white',marginLeft:8}}>@phani@dj_royy_roxa@dashrathmudiraj@tiotok</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row',alignItems:'center',}}>
          <View style={{flex: 0.12}}>
          <Ionicons name="musical-notes" color="white" size={25} style={{marginLeft:10}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={{color:'white',marginLeft:8}}> - durgalogan original song</Text>
          </View>
          <View style={{flex: 0.26}}>
          {/* <Ionicons name="disc-sharp" color="white" size={25} /> */}
          <Image  source={require('../../assests/player.png')}  style={{width:50,height:50}}/>
          </View>
        </View>
      </View>
      {/* <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
        <View style={{flex:0.1,}}>
        <Ionicons name="alert-circle" color="white" size={25} style={{marginLeft:10}} />
        </View>
        <View style={{flex:1}}>
          <Text style={{color:'white',textAlign:'auto',marginLeft:8}}>The following action could in serious injury. Do not attempt</Text>
        </View>
      </View> */}
    </View>
  );
}

export default Info;
