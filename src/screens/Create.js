
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  ToastAndroid,Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import CameraRoll from "@react-native-community/cameraroll";

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

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoData: null,
            recording: false,
            data: null,
            flashMode: false,
            backCamera: true,
            seconds: 0,
            maxDuration: 300, // seconds
            captureAudio: true,
            source:''
        };
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 1 };
            const data = await this.camera.takePictureAsync(options);
            CameraRoll.saveToCameraRoll(data.uri, 'photo').then(onfulfilled => {
                ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
            }).catch(error => {
                ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
            });
        }
    };

    recordVideo = async () => {
        if (this.camera) {
            if (!this.state.recording)
                this.startRecording();
            else this.stopRecording();
        }
    }

    startRecording = async () => {
        this.setState({ recording: true });
        this.countRecordTime = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
        const cameraConfig = { maxDuration: this.state.maxDuration };
        const data = await this.camera.recordAsync(cameraConfig);
        this.setState({ recording: false });
        this.setState({source:data.uri});
    if(this.state.source!=''){
        this.props.navigation.navigate('TestHome',{linkVideo:this.state.source}) 
    }else{
        return
    }
        console.log('reddy',this.state.source);
        CameraRoll.save(data.uri, 'video').then(onfulfilled => {
            ToastAndroid.show(`New video path: ${onfulfilled}`, ToastAndroid.SHORT)
            console.log('naree',data.uri)
        }).catch(error => ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT));
    }

    stopRecording = () => {
        this.camera.stopRecording();
        clearInterval(this.countRecordTime);
        this.setState({ seconds: 0 });
    }

    reverseCamera = () => {
        if (this.state.recording) {
            clearInterval(this.countRecordTime);
            this.setState({ seconds: 0 });
        }

        let backCamera = !this.state.backCamera;
        if (backCamera)
            ToastAndroid.show('Reverse to front camera', ToastAndroid.SHORT);
        else ToastAndroid.show('Reverse to back camera', ToastAndroid.SHORT);
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
                    type={this.state.backCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                    flashMode={this.state.flashMode ? RNCamera.Constants.FlashMode.on: RNCamera.Constants.FlashMode.off}
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
                                
                                    {/* <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.takePicture}>
                                        <EntypoIcon
                                            style={styles.icon}
                                            size={40}
                                            color='black'
                                            name='camera'
                                        />
                                    </TouchableOpacity> */}
                                    <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.recordVideo}>
                                        <IoniconsIcon
                                            style={{alignSelf:'center',alignItems:'center',justifyContent:'center',marginLeft:130}}
                                            size={65}
                                            color='red'
                                            color={this.state.recording ? 'red' : 'white'}
                                            name='ios-radio-button-on'
                                        />
                                        {
                                            this.state.recording ?
                                            (<Text style={{color:'white',alignSelf:'center',alignItems:'center',justifyContent:'center',marginLeft:130}}>{this.secondsToMMSS(this.state.seconds)}</Text>) :
                                            (null)
                                        }
                                    </TouchableOpacity>
                                    {/* <Button style={styles.icon}
                                        title='PLAY'
                                        onPress={()=>this.props.navigation.navigate('TestHome',{linkVideo:this.state.source})}
                                      /> */}
                                       <TouchableOpacity
                                        style={styles.iconContainer}
                                        onPress={this.reverseCamera}>
                                        <IoniconsIcon
                                             style={{alignSelf:'flex-end',alignItems:'flex-end',justifyContent:'flex-end',marginLeft:60,marginBottom:10}}
                                            size={60}
                                            color='white'
                                            name='ios-camera-reverse'
                                        />
                                    </TouchableOpacity> 
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
        marginHorizontal: 15,
        // paddingVertical: 10,
    },
    actions: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
    },
});