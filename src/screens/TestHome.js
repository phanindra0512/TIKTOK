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
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import VideoData from './Test';

class TestHome extends Component {
    state = {};
    render() {
      let data = [
        {
          title: 'AppDevBlog',
          video: require('../../assests/a.mp4'),
          img: require('../../assests/logo.jpg'),
          description:
            "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        },{
            title: 'AppDevBlog',
            video: require('../../assests/a.mp4'),
            img: require('../../assests/logo.jpg'),
            description:
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          },
          {
            title: 'AppDevBlog',
            video: require('../../assests/a.mp4'),
            img: require('../../assests/logo.jpg'),
            description:
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          },
          {
            title: 'AppDevBlog',
            video: require('../../assests/a.mp4'),
            img: require('../../assests/logo.jpg'),
            description:
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          },
          {
            title: 'AppDevBlog',
            video: require('../../assests/a.mp4'),
            img: require('../../assests/logo.jpg'),
            description:
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          },
          {
            title: 'AppDevBlog',
            video: require('../../assests/a.mp4'),
            img: require('../../assests/logo.jpg'),
            description:
              "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
          },
        
       
      ];
  
      return (
        <View style={{height: '100%'}}>
          <FlatList
            data={data}
            pagingEnabled={true}
            renderItem={({item, index}) => {
              return <VideoData item={item} />;
            }}
          />
          <View style={styles.header}>
            <Text style={styles.text}>Following</Text>
            <Icon
              name="md-more"
              color="gray"
              size={15}
              style={{marginRight: 15}}
            />
            <Text style={[styles.text, {color: 'gray'}]}>For You</Text>
          </View>
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

  
  
