import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Sidebar() {
  return (
    <View style={{flex: 0.45, justifyContent: 'center', position:'absolute',alignSelf:'flex-end',paddingRight:10,paddingTop:220}}>
      <View style={{flex: 0.4, alignItems: 'center'}}>
        <Avatar.Image
          resizeMode="cover"
          source={require('../../assests/tiktok.jpg')}
        />
        <Ionicons
          name="ios-add-circle-sharp"
          color="#FF444F"
          size={25}
          style={{marginLeft: 22, marginTop: -21}}
        />
      </View>
      <View style={{flex: 0.4, alignItems: 'center',paddingTop:10}}>
        <View style={{flex: 0.5}}>
          <Ionicons name="heart" color="white" size={35} />
        </View>
        <View style={{flex: 0.1}}>
          <Text style={{color: 'white'}}>12.5K</Text>
        </View>
      </View>
      <View style={{flex: 0.4, alignItems: 'center',paddingTop:10}}>
        <View style={{flex: 0.5}}>
          <Ionicons name="chatbubble-ellipses" color="white" size={35} />
        </View>
        <View style={{flex: 0.1}}>
          <Text style={{color: 'white'}}>0</Text>
        </View>
      </View>
      <View style={{flex: 0.4, alignItems: 'center',paddingTop:10}}>
        <View style={{flex: 0.5}}>
          <FontAwesome name="share" color="white" size={35} />
        </View>
        <View style={{flex: 0.1}}>
          <Text style={{color: 'white'}}>998</Text>
        </View>
      </View>
    </View>
  );
}

export default Sidebar;
