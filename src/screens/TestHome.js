import React,{ useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';

function TestHome({route, navigation}) {
  return (
    <View style={styles.container}>
       <Video
        source={{uri: route.params.linkVideo}}
        
        useNativeControls={true}
        shouldPlay={true}
         resizeMode="contain"
        style={{
          width: 300,
          height: 400,
          backgroundColor: 'black',
        }}
      /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
export default TestHome;
