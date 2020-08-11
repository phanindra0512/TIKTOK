import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import Swiper from 'react-native-swiper'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// const videoData = [
//     {
//         videoURL: require('../../videos/sample1.mp4')
//     },
//     {
//         videoURL: require('../../videos/sample2.mp4')
//     },
//     {
//         videoURL: require('../../videos/sample3.mp4')
//     }
// ]
function Dashboard() {
    return (
        <Swiper style={styles.wrapper} showsPagination={false} horizontal={false} showsButtons={false}>
            {/* {videoData.map((singleVideo, index) => {
                <SafeAreaView>
                    <TouchableOpacity>
                        <Video
                            resizeMode="cover"
                            repeat
                            source={singleVideo.videoURL}
                            style={{ width: screenWidth, height: screenHeight }}
                            fullscreen={true}

                        />
                    </TouchableOpacity>
                </SafeAreaView>
            })} */}
            <View style={styles.slide1}>
                <Video source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
                    // ref={(ref) => {
                    //     this.player = ref
                    // }}
                    // fullscreen={true}
                    // onBuffer={this.onBuffer}
                    // onEnd={this.onEnd}
                    // onError={this.videoError}
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
                <Text style={styles.text}>Phanindra</Text>
            </View>
        </Swiper>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    slide1: {
        flex: 1,
        width: '100%',
        height: '100%'
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
