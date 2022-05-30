import React, { Component } from 'react'
import { StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { dirPicutures } from './CameraJS/dirStorage';
import {Icon} from 'react-native-elements';
var RNFS = require('react-native-fs');
const moment = require('moment');

const moveAttachment = async (filePath, newFilepath) => {
  return new Promise((resolve, reject) => {
    newFilepath =  RNFS.ExternalDirectoryPath + newFilepath
    RNFS.mkdir(`${RNFS.ExternalDirectoryPath}`+ '/WeThePeople')
      .then(() => {
        RNFS.moveFile(filePath, newFilepath)
          .then(() => {
            console.log('FILE MOVED', filePath, newFilepath);
            resolve(true);
          })
          .catch(error => {
            console.log('moveFile error', error);
            reject(error);
          });
      }) 
      .catch(err => {
        console.log('mkdir error', err);
        reject(err);
      });
  });
};

class Camera extends Component {
    render() {
      return (
        <View style={styless.container}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={ref => {
              this.camera = ref
            }}
            ratio='16:9'
          />
	       <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' ,backgroundColor: '#ffffff01'}}>
           <TouchableOpacity onPress={this.takePicture.bind(this)}>
           <Icon
            // raised
            name='photo-camera'
            type='material'
            color='#694fad'
            size={60}
            style={{paddingBottom: 10}}
          />
           </TouchableOpacity>
         </View>
        </View>
      )
    }
    saveImage = async filePath => {
      try {
        // set new image name and filepath
        const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
        const newFilepath = `/WeThePeople/${newImageName}`;
        // move and save image to new filepath
        const imageMoved = await moveAttachment(filePath, newFilepath);
        console.log('image moved', imageMoved);
      } catch (error) {
        console.log(error);
      }
    };
    takePicture = async () => {
          if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            this.saveImage(data.uri);
          }
    };
    recordVideo = async () => {
      if (this.camera) {
          try {
              const options = { maxDuration: 60, quality: RNCamera.Constants.VideoQuality['480'] }
              const videoRecordPromise = this.camera.recordAsync(options)
              if (videoRecordPromise) {
                  const data = await videoRecordPromise;
                  const source = data.uri
                  let sourceThumb = await generateThumbnail(source)
                  console.log(source,sourceThumb);
                  // navigation.navigate('savePost', { source, sourceThumb })
              }
          } catch (error) {
              console.warn(error)
          }
      }
    };
    stopVideo = async () => {
      if (this.camera) {
          this.camera.stopRecording()
      }
    };
  }
  const styless = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }
  })
  export default Camera;

//   const styles = StyleSheet.create({
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 75,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });