import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Divider } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoList from './VideoList';

function Signup({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1.5, alignItems: 'center', paddingTop: 20 }}>
        <Avatar.Image size={100} source={require('../../assests/tiktok.jpg')} />
        <View style={{ flex: 1, paddingTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            @narendrareddykandula6
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#f2f2f2', marginTop: 5
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingLeft: 15,
              paddingRight: 15,
              color: '#8c8c8c',
            }}>
            2 videos
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', width: 320, alignSelf: 'center', marginTop: 30 }}>
        <View style={{ flex: 0.6 }}>
          <View style={{ flex: 0.4, alignSelf: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>1</Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#b3b3b3', alignSelf: 'center' }}>
              Following
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F0F5F1' }}>
            |
          </Text>
        </View>
        <View style={{ flex: 0.6 }}>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>6</Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#b3b3b3', alignSelf: 'center' }}>
              Followers
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F0F5F1' }}>
            |
          </Text>
        </View>
        <View style={{ flex: 0.6 }}>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>2</Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#b3b3b3', alignSelf: 'center' }}>
              Hearts
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.6,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flex: 0.3,
            backgroundColor: '#FF444F',
            padding: 15,
            borderColor: '#F0F5EF',
            borderWidth: 2,
          }}>
          <Text style={{ fontSize: 16, color: '#fff' }}>Edit Profile</Text>
        </View>
        <View
          style={{
            flex: 0.15,
            borderColor: '#F0F5EF',
            borderWidth: 1,
            padding: 8,
            alignItems: 'center',
          }}>
          <Foundation name="play-video" size={35} />
        </View>
        <View
          style={{
            flex: 0.15,
            borderColor: '#F0F5EF',
            borderWidth: 1,
            padding: 8,
            alignItems: 'center',
          }}>
          <Ionicons name="ios-bookmark-outline" size={35} />
        </View>
      </View>

      <View style={{ flex: 1.2, borderColor: '#F6FBF6', borderWidth: 3 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center' }}>Tap here to create your Holi Wali look!</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <MaterialCommunityIcons name="chevron-right" size={20} style={{ alignSelf: 'center' }} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <MaterialCommunityIcons name="menu" size={25} style={{ alignSelf: 'center' }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#b3b3b3', alignSelf: 'center' }}>
              |
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} style={{ alignSelf: 'center' }} />
          </View>
        </View>
      </View>
      <VideoList />
    </View>
  );
}

export default Signup;
