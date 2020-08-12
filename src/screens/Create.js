import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking
} from "react-native";



export default class Create extends Component {
  constructor() {
    super();
   
  }


  
 

  render() {

    return (
      <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Add Screen</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  
    alignItems:'center'
  },
  headline: {
    alignSelf: "center",
    fontSize: 18,
    marginTop: 50,
    marginBottom: 30
  },
  videoTile: {
    alignSelf: "center",
    fontSize: 16,
    marginTop: 55
  }
});