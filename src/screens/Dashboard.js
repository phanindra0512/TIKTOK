import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Share, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import { Avatar } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
import Sidebar from './Sidebar';
import Info from './InfoDashboard';
// import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';



const { width, height = height - 50 } = Dimensions.get("window");



const videoData = [
    {
        id: '1',
        videoURL: require('../../assests/b.mp4'),
        imageURL: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@phani0512',
        movieName: 'Bahubali',
        songTitle: 'Nippule',
        songDescription: 'Nippule swasaga',
        likes: '100',
        comments: '20',
        shares: '150',
        mute: false
    },
    {
        id: '2',
        videoURL: require('../../assests/d.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute',
        likes: '85',
        comments: '10',
        shares: '50',
        mute: false
    },
   
]
function Dashboard({ navigation }) {
    const [paused, setPaused] = useState(false);
    const [isMute, setIsMute] = useState(true);
    const [isValue, setIsValue] = useState('')

    const onScrollEnd = (e, state) => {
        console.log('Index is:', state.index);
    };
    const onIndexChanged = (index) => {
        console.log('Swiper Index: ', index);
    }


    const onShare = async (data) => {
        try {
            const result = await Share.share({
                message: data,
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
            <Swiper horizontal={false}
                showsPagination={false}
                // onMomentumScrollEnd={onScrollEnd}
                onIndexChanged={onIndexChanged.bind(this)}
            >

                {
                    videoData.map((Item, index) => {
                        return (

                            <View style={styles.slide1} key={index}>
                                <TouchableOpacity onPress={() => setPaused(!paused)}>
                                    <Video source={Item.videoURL}
                                        // onTouchStart={() => setPaused(!paused)}
                                        // onFullscreenPlayerWillPresent={self.fullScreenPlayerWillPresent}
                                        // onFullscreenPlayerDidPresent={self.fullScreenPlayerDidPresent}
                                        // onFullscreenPlayerWillDismiss={self.fullScreenPlayerWillDismiss}
                                        // onFullscreenPlayerDidDismiss={self.fullScreenPlayerDidDissmiss}
                                        // onLoadStart={self.loadStart}
                                        // onLoad={self.setDuration}
                                        // onProgress={self.setTime}
                                        // onTimedMetadata={self.onTimedMetadata}
                                        // rate={1.0}
                                        // volume={1.0}
                                        // shouldPlay
                                        // bounce={false}
                                        // isLooping
                                        // useNativeControls={false}
                                        repeat
                                        resizeMode="cover"
                                        fullscreen={true}
                                        muted={Item.mute}
                                        paused={paused}
                                        style={{
                                            width: Dimensions.get('window').width,
                                            height: Dimensions.get('window').height,
                                            backgroundColor: 'black',
                                        }}
                                    />
                                </TouchableOpacity>

                                <View style={{ position: 'absolute', bottom: 30, right: 0, marginRight: 10, alignItems: 'center', paddingVertical: 10 }}>
                                    <Avatar.Image
                                        resizeMode="cover"
                                        source={{ uri: Item.imageURL }}
                                    />
                                    <Ionicons
                                        name="ios-add-circle-sharp"
                                        color="#FF444F"
                                        size={25}
                                        style={{ position: 'absolute', top: 62, }}

                                    />
                                    <Ionicons name="heart" color='white' size={35} style={{ paddingTop: 20 }} />
                                    <Text style={{ color: 'white' }}>{Item.likes}</Text>

                                    <Ionicons name="chatbubble-ellipses" color="white" size={35} style={{ paddingTop: 20 }} />
                                    <Text style={{ color: 'white' }}>{Item.comments}</Text>
                                    <FontAwesome name="share" color="white" size={35} style={{ paddingTop: 20 }} onPress={() => onShare(Item.link)} />
                                    <Text style={{ color: 'white' }}>{Item.shares}</Text>
                                    <TouchableOpacity onPress={() => { setPaused(true); navigation.navigate('DoIt', { img: Item.imageURL, desc: Item.songDescription, title: Item.songTitle, likes: Item.likes }) }}>
                                        <Image source={require('../../assests/player.png')} style={{ width: 50, height: 50, marginTop: 20 }} />
                                    </TouchableOpacity>

                                </View>

                                <View style={{ position: 'absolute', bottom: 30, left: 0, }}>
                                    <Text style={{ color: 'white', marginLeft: 30, fontSize: 17, paddingBottom: 10 }}>{Item.userId}</Text>
                                    <Text style={{ color: 'white', marginLeft: 30, fontSize: 17, paddingBottom: 10 }}>#{Item.movieName} #{Item.songTitle}</Text>
                                    <View style={{ flexDirection: 'row', marginLeft: 30, }}>
                                        <Ionicons name="musical-notes" color="white" size={20} style={{ paddingTop: 3 }} />
                                        <Text style={{ color: 'white', fontSize: 17, paddingLeft: 5 }}>{Item.songDescription}...</Text>
                                    </View>

                                </View>
                                {/* <Sidebar />
                                <Info /> */}

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
        // alignItems: 'center',
        // justifyContent: 'center'
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