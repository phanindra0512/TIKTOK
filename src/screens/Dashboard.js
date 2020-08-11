import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import Swiper from 'react-native-swiper'
import { ScrollView } from 'react-native-gesture-handler';
import Sidebar from './Sidebar';
import Info from './InfoDashboard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const videoData = [
    {
        videoURL: require('../../assests/b.mp4')
    },
    {
      videoURL: require('../../assests/c.mp4')
  },
  {
    videoURL: require('../../assests/d.mp4')
},

   
]
function Dashboard() {
    return (
      <Swiper style={styles.wrapper} showsPagination={false} horizontal={false} showsButtons={false}>

         {
                                videoData.map((Item, index) => {
                                    return (
                                      <View style={styles.slide1} key={index}>
                                      <Video source={Item.videoURL}
                                          
                                          onFullscreenPlayerWillPresent={self.fullScreenPlayerWillPresent}
                                          onFullscreenPlayerDidPresent={self.fullScreenPlayerDidPresent}
                                          onFullscreenPlayerWillDismiss={self.fullScreenPlayerWillDismiss}
                                          onFullscreenPlayerDidDismiss={self.fullScreenPlayerDidDissmiss}
                                          onLoadStart={self.loadStart}
                                          onLoad={self.setDuration}
                                          onProgress={self.setTime}
                                          onTimedMetadata={self.onTimedMetadata}
                                          resizeMode={"cover"}
                                          style={{
                                              aspectRatio: 1,
                                              width: "100%",
                                              height: '100%'
                                          }}
                                      />
<Sidebar/>
<Info/>

                                  </View>

                                    )
                                })
                            }
      </Swiper>
            )
}

export default Dashboard

const styles = StyleSheet.create({
    wrapper: { width:'100%',height:'100%',alignItems:'center',justifyContent:'center'},
    slide1: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
        // backgroundColor: '#9DD6EB'
    },
    background: {
        backgroundColor: 'red'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 70
    }
})
