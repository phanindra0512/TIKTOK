import React,{ useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

function TestHome({route, navigation}) {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
       <Video
        source={{uri: route.params.linkVideo}}
        repeat
        useNativeControls={true}
        shouldPlay={true}
        paused={isPaused}
         resizeMode="cover"
        style={{
          width: 300,
          height: 500,
          backgroundColor: 'black',
        }}
      /> 
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
