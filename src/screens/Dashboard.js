import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Share, SafeAreaView, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import Swiper from 'react-native-swiper'
import { ScrollView } from 'react-native-gesture-handler';
import Sidebar from './Sidebar';
import Info from './InfoDashboard';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Swipeout from 'react-native-swipeout';

import VerticalViewPager from "react-native-vertical-view-pager";

const { width, height = height - 50 } = Dimensions.get("window");



const videoData = [
    {
        videoURL: require('../../assests/b.mp4'),
    },
    {
        videoURL: require('../../assests/c.mp4'),
    },
    {
        videoURL: require('../../assests/d.mp4'),
    },


]
function Dashboard() {

    const [paused, setPaused] = useState(false);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={styles.wrapper}>
            <Swiper horizontal={false} showsPagination={false}
            >

                {
                    videoData.map((Item, index) => {
                        return (

                            <View style={styles.slide1} key={index}>
                                <TouchableOpacity >
                                    <Video source={Item.videoURL}

onTouchStart={() => setPaused(!paused)}
                                        onFullscreenPlayerWillPresent={self.fullScreenPlayerWillPresent}
                                        onFullscreenPlayerDidPresent={self.fullScreenPlayerDidPresent}
                                        onFullscreenPlayerWillDismiss={self.fullScreenPlayerWillDismiss}
                                        onFullscreenPlayerDidDismiss={self.fullScreenPlayerDidDissmiss}
                                        onLoadStart={self.loadStart}
                                        onLoad={self.setDuration}
                                        paused={paused}
                                        onProgress={self.setTime}
                                        onTimedMetadata={self.onTimedMetadata}
                                        rate={1.0}
                                        // paused={isPause}
                                        volume={1.0}
                                        // controls={true}
                                        // muted={true}
                                        repeat
                                        isMuted={false}
                                        resizeMode="cover"
                                        shouldPlay
                                        fullscreen={true}
                                        bounce={false}
                                        isLooping
                                        useNativeControls={false}
                                        style={{
                                            aspectRatio: 0.55,
                                            width,
                                            height: '100%',
                                            marginBottom: 10
                                        }}
                                    />
                                </TouchableOpacity>

                                <Sidebar />
                                <Info />

                            </View>



                        )
                    })
                }
            </Swiper>
        </View>
    )
}
export default Dashboard

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: 1,
        alignSelf: "stretch"
    },
    slide1: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
