import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';


class TestHome extends Component {
   
  render(){
      return (
        <View style={{height: '100%'}}>
          <Text>nk</Text>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    
    header: {
      width: "100%",
      height: 50,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
    },
    text: {
      color: '#fff',
      fontSize: 17,
      marginRight: 15,
    },
    
  });
  
  export default TestHome;

  
  
