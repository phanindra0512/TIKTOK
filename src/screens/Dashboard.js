import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Share, SafeAreaView, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import Video from 'react-native-video';
import { Avatar, Button } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
import TextTicker from 'react-native-text-ticker'


const { width, height = height - 50 } = Dimensions.get("window");



const videoData = [
    {
        id: '1',
        videoURL: require('../../assests/video1.mp4'),
        imageURL: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@phani0512',
        movieName: 'Bahubali',
        songTitle: 'Nippule',
        songDescription: 'Nippule swasaga gundeloo asagaa tara taraluu eduru chupulooo',
        likes: '100',
        comments: '20',
        shares: '150',
    },
    {
        id: '2',
        videoURL: require('../../assests/video2.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute,he is soo sweet,he is soo handsome',
        likes: '85',
        comments: '10',
        shares: '50',
    },
    {
        id: '3',
        videoURL: require('../../assests/video3.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute,he is soo sweet,he is soo handsome',
        likes: '85',
        comments: '10',
        shares: '50',
    },
    {
        id: '4',
        videoURL: require('../../assests/video4.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute,he is soo sweet,he is soo handsome',
        likes: '85',
        comments: '10',
        shares: '50',
    },
    {
        id: '5',
        videoURL: require('../../assests/video5.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute,he is soo sweet,he is soo handsome',
        likes: '85',
        comments: '10',
        shares: '50',
    },

    {
        id: '3',
        videoURL: require('../../assests/h.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute,he is soo sweet,he is soo handsome',
        likes: '85',
        comments: '10',
        shares: '50',
        mute: false
    },
    {
        id: '4',
        videoURL: require('../../assests/k.mp4'),
        imageURL: 'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
        link: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        userId: '@nareereddyK',
        movieName: 'Sarinodu',
        songTitle: 'He is soo',
        songDescription: 'He is Soo cute,he is soo sweet,he is soo handsome',
        likes: '85',
        comments: '10',
        shares: '50',
        mute: false
    },

]
function Dashboard({ navigation }) {

    const [isPaused, setIsPaused] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [isValue, setIsValue] = useState(1)
    const [currentIndex, setCurrentIndex] = useState('0')
    const [isSpinValue, setIsSpinValue] = useState(new Animated.Value(0))


    // Animated.timing(
    //     isSpinValue,
    //     {
    //         toValue: 1,
    //         duration: 10000,
    //         easing: Easing.linear,
    //         useNativeDriver: true  // To make use of native driver for performance
    //     }
    // ).start()

    Animated.loop(Animated.timing(isSpinValue, { toValue: 1, duration: 2000, easing: Easing.linear, useNativeDriver: true, })).start()


    const onIndexChanged = (index) => {
        console.log('Swiper Index: ', index);
        setCurrentIndex(index)
        setIsPaused(false)
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

    console.disableYellowBox = true;
    const spin = isSpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View style={styles.wrapper}>

            {
                isValue == 1 ?

                    <Swiper horizontal={false}
                        showsPagination={false}
                        // onMomentumScrollEnd={onScrollEnd}
                        onIndexChanged={onIndexChanged.bind(this)}
                        index={0}
                        loop={false}
                    >
                        {
                            videoData.map((Item, index) => {
                                return (

                                    <View style={styles.slide1} key={index}>
                                        <View>
                                            <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
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
                                                    currentIndex={currentIndex}
                                                    muted={currentIndex == index ? false : true}
                                                    paused={isPaused}
                                                    // paused={index !== currentIndex || isPaused ? false : true}
                                                    style={{
                                                        width: Dimensions.get('window').width,
                                                        height: Dimensions.get('window').height,
                                                        backgroundColor: 'black',
                                                    }}
                                                />
                                            </TouchableOpacity>
                                            <View style={{ position: 'absolute', bottom: 50, right: 0, marginRight: 10, alignItems: 'center', paddingVertical: 10 }}>
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
                                                <Ionicons name="heart" color={isLike ? 'red' : 'white'} size={35} style={{ paddingTop: 20 }} onPress={() => setIsLike(!isLike)} />
                                                <Text style={{ color: 'white' }}>{Item.likes}</Text>

                                                <Ionicons name="chatbubble-ellipses" color="white" size={35} style={{ paddingTop: 20 }} />
                                                <Text style={{ color: 'white' }}>{Item.comments}</Text>
                                                <FontAwesome name="share" color="white" size={35} style={{ paddingTop: 20 }} onPress={() => onShare(Item.link)} />
                                                <Text style={{ color: 'white' }}>{Item.shares}</Text>
                                                <TouchableOpacity onPress={() => { setIsPaused(true); navigation.navigate('DoIt', { img: Item.imageURL, desc: Item.songDescription, title: Item.songTitle, likes: Item.likes }) }}>
                                                    <Animated.Image source={require('../../assests/player.png')} style={{ width: 50, height: 50, marginTop: 20, transform: [{ rotate: spin }] }} />
                                                </TouchableOpacity>
                                                <Text style={{ color: 'red', fontWeight: 'bold' }}>Record</Text>

                                            </View>

                                            <View style={{ position: 'absolute', bottom: 60, left: 0, }}>
                                                <Text style={{ color: 'white', marginLeft: 30, fontSize: 17, paddingBottom: 10 }}>{Item.userId}</Text>
                                                <Text style={{ color: 'white', marginLeft: 30, fontSize: 17, paddingBottom: 10 }}>#{Item.movieName} #{Item.songTitle}</Text>
                                                <View style={{ flexDirection: 'row', marginLeft: 30, }}>
                                                    <Ionicons name="musical-notes" color="white" size={20} style={{ paddingTop: 3 }} />
                                                    <TextTicker
                                                        style={{ fontSize: 17, color: '#fff', width: 150, paddingLeft: 10 }}
                                                        duration={3000}
                                                        loop
                                                        bounce
                                                        repeatSpacer={50}
                                                        marqueeDelay={2000}
                                                    >
                                                        {Item.songDescription}
                                                    </TextTicker>
                                                </View>

                                            </View>
                                        </View>

                                        <View style={{ position: 'absolute', top: 50, flexDirection: 'row', alignSelf: 'center' }}>
                                            <TouchableOpacity onPress={() => setIsValue(0)}>
                                                <Text style={{ fontSize: 20, fontWeight: `${(isValue == 1) ? '200' : 'bold'}`, color: '#fff' }}>Following</Text>
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 15 }}>|</Text>
                                            <TouchableOpacity onPress={() => setIsValue(1)}>
                                                <Text style={{ fontSize: 20, fontWeight: `${(isValue == 1) ? 'bold' : '200'}`, color: '#fff' }}>For You</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </Swiper>
                    :
                    <View style={{ flex: 1, backgroundColor: '#999', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ position: 'absolute', top: 50, flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => setIsValue(0)}>
                                <Text style={{ fontSize: 20, fontWeight: `${(isValue == 1) ? '200' : 'bold'}`, color: '#fff' }}>Following</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 15 }}>|</Text>
                            <TouchableOpacity onPress={() => setIsValue(1)}>
                                <Text style={{ fontSize: 20, fontWeight: `${(isValue == 1) ? 'bold' : '200'}`, color: '#fff' }}>For You</Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                            uppercase={false}
                            contentStyle={{ backgroundColor: '#ccc' }}
                            labelStyle={{ color: '#000', fontWeight: 'bold', fontSize: 17 }}
                        >Please Login</Button>
                    </View>
            }
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