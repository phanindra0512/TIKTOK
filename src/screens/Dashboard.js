import React from "react";
import {Text,View,StyleSheet} from "react-native";
import Video from 'react-native-video';
export default class Dashboard extends React.Component {
render(){
return(
<View style={styles.container}>
      <Video source={require('../../assests/a.mp4')}   
       ref={(ref) => {
         this.player = ref
       }}                                    
       onBuffer={this.onBuffer}               
       onEnd={this.onEnd}                     
       onError={this.videoError}               
       style={styles.backgroundVideo} />
</View>
);
}
}
const styles = StyleSheet.create({
  container:{ width:'100%',height:'100%',},
  backgroundVideo: {
    width:'100%',
    height:'100%'
  },
});