import React, { PureComponent } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View,ToastAndroid ,CameraRoll} from 'react-native';
import { RNCamera } from 'react-native-camera';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

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

class Create extends PureComponent {
  constructor(props){
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
  };
  }
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
    CameraRoll.save(data.uri, 'video').then(onfulfilled => {
        ToastAndroid.show(`New video path: ${onfulfilled}`, ToastAndroid.SHORT)
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
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row',  }}>
               
                <TouchableOpacity
                                        onPress={() => this.takePicture(camera)}>
                                        <EntypoIcon
                                        style={{alignSelf:'flex-start',}}
                                            style={styles.icon}
                                            size={46}
                                            color='white'
                                            name='camera'
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.reverseCamera}>
                                        <IoniconsIcon
                                           style={{alignSelf:'center',marginLeft:40,marginTop:-10}}
                                            size={60}
                                            color='white'
                                            name='ios-camera-reverse'
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.recordVideo}>
                                        <EntypoIcon
                                            style={{alignSelf:'flex-end',marginLeft:50}}
                                            size={40}
                                            color={this.state.recording ? 'red' : 'white'}
                                            name='video-camera'
                                        />
                                        {
                                            this.state.recording ?
                                            (<Text>{this.secondsToMMSS(this.state.seconds)}</Text>) :
                                            (null)
                                        }
                                    </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
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
    flexDirection:'row',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Create;