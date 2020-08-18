
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  ToastAndroid ,Button} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TrackPlayer from 'react-native-track-player';

//const myVar = setTimeout(function(){ alert("Hello") }, 3000);
const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
      <Text>Waiting</Text>
    </View>
);

export default class VideoRecord extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoData: null,
            recording: false,
            data: null,
            flashMode: false,
            backCamera: true,
            seconds: 0,
            maxDuration: 23, // seconds
            captureAudio: true,
            source:'',
            timer:0
        };
    }

    




    // takePicture = async function(camera) {
    //   const options = { quality: 0.5, base64: true };
    //   const data = await camera.takePictureAsync(options);
    //   //  eslint-disable-next-line
    //   console.log(data.uri);
    // };
    // recordVideo = async () => {
    //     if (this.camera) {
    //         if (!this.state.recording)
            
    //             this.startRecording();
    //         else this.stopRecording();
    //     }
    // }

  
    

    

    // startRecording = async () => {
      
    //     this.setState({ recording: true });
    //     this.countRecordTime = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
    //     const cameraConfig = { maxDuration: this.state.maxDuration };
    //     const data = await this.camera.recordAsync(cameraConfig);
        
    //     this.setState({ recording: false });
    //     this.setState({source:data.uri});
    //     console.log('reddy',this.state.source);
    //     CameraRoll.save(data.uri, 'video').then(onfulfilled => {
    //         ToastAndroid.show(`New video path: ${onfulfilled}`, ToastAndroid.SHORT)
    //         console.log('naree',data.uri);
    //     }).catch(error => ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT));
      
    // }
     
    start = async () => {
this.audioPlay();
      this.setState({ recording: true });
        this.interval = 
          setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000)
      
      if (this.camera) {
        const options = {  quality: RNCamera.Constants.VideoQuality["480p"],
        maxDuration:25,
       };
        const data = await this.camera.recordAsync(options);
        this.setState({ recording: false });
        console.log('nk',data.uri);
        this.stopNk();
        this.setState({source:data.uri});
        if(this.state.source!=''){
            this.props.navigation.navigate('TestHome',{linkVideo:this.state.source}) 
        }else{
            return
        }
        CameraRoll.save(data.uri, 'video').then(onfulfilled => {
                   ToastAndroid.show(`New video path: ${onfulfilled}`, ToastAndroid.SHORT)
                   console.log('naree',data.uri);
               }).catch(error => ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT));
      }
    };
      
    stopMusic(){
      TrackPlayer.stop();
    }
    
audioPlay=async()=>{
  
  try{
    TrackPlayer.setupPlayer().then(async () => {
 
      // Adds a track to the queue
      await TrackPlayer.add({
          id: 'trackId',
          url: require('../../assests/songA.mp3'),
          title: 'Track Title',
          artist: 'Track Artist',
          artwork: require('../../assests/player.png')
      });
   
  
      // Starts playing it
      TrackPlayer.play();
      TrackPlayer.updateOptions({
        stopWithApp: false
    });
   
  });
}catch(error){
  console.log(error);
}
}
   stopNk =async()=>{
    
      this.setState({seconds:0})
      this.camera.stopRecording();
      
      clearInterval(this.interval);
  
    
   }
    

    // stopRecording = () => {
      
    //   this.camera.stopRecording();
    //     clearInterval(this.countRecordTime);
    //     this.setState({ seconds: 0 });
      
      
    // }

    reverseCamera = () => {
        if (this.state.recording) {
            clearInterval(this.interval);
            this.setState({ seconds: 0 });
        }

        let backCamera = !this.state.backCamera;
        if (backCamera)
            ToastAndroid.show('Reverse to back camera', ToastAndroid.SHORT);
        else ToastAndroid.show('Reverse to front camera', ToastAndroid.SHORT);
        this.setState({ backCamera });
    }

    controlFlashMode = () => {
        this.setState({ flashMode: !this.state.flashMode });
    }

    secondsToMMSS = (seconds) => {
        let m = Math.floor(seconds / 60);
        let s = Math.floor(seconds % 60);
    
        let mDisplay = m < 10 ? `0${m}` : `${m}`;
        let sDisplay = s < 10 ? `0${s}` : `${s}`;
        return `${mDisplay}:${sDisplay}`; 
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={camera => this.camera = camera}
                    style={styles.preview}
                    type={this.state.backCamera ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                      title: 'Permission to use camera',
                      message: 'We need your permission to use your camera',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                      title: 'Permission to use audio recording',
                      message: 'We need your permission to use your audio',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                    }}
                    captureAudio={this.state.captureAudio}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                            return (
                                <View style={styles.actions}>
                                    {/* <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.controlFlashMode}>
                                        <IoniconsIcon
                                            style={styles.icon}
                                            size={50}
                                            color='black'
                                            name={ this.state.flashMode ? 'ios-flash' : 'ios-flash-off' }
                                        />
                                    </TouchableOpacity> */}
                                       <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.reverseCamera}>
                                        <IoniconsIcon
                                            style={styles.icon}
                                            size={60}
                                            color='white'
                                            name='ios-camera-reverse'
                                        /> 
                                    </TouchableOpacity>  
                                     {/* <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.takePicture}>
                                        <EntypoIcon
                                            style={styles.icon}
                                            size={40}
                                            color='black'
                                            name='camera'
                                        />
                                    </TouchableOpacity>  */}
                                    <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.start}>
                                        <EntypoIcon
                                            style={styles.icon}
                                            size={40}
                                            color='red'
                                            color={this.state.recording ? 'red' : 'white'}
                                            name='video-camera'
                                        />
                                        {
                                            this.state.recording ?
                                            (<Text>{this.secondsToMMSS(this.state.seconds)}</Text>) :
                                            (null)
                                        }
                                    </TouchableOpacity>
                                    
                                      {/* <Button style={{alignSelf:'flex-end',marginTop:18,marginLeft:20}}
                                        title='PLAY'
                                        onPress={()=>this.props.navigation.navigate('TestHome',{linkVideo:this.state.source})}
                                      /> */}
                                    
                                   
                                </View>
                            );
                    }}
                </RNCamera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 16,
        alignItems:'center',
        justifyContent:'center',
       
        
marginTop:10,
marginBottom:20
        // paddingVertical: 10,
    },
    actions: {
        flex: 0,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        
    },
});