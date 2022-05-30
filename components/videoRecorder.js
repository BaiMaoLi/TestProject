// // import React, { useRef } from 'react';
// // import { StyleSheet, View,Text, Pressable } from 'react-native';
// // import { RNCamera } from 'react-native-camera';

// // export default function VideoRecorder(){
// // const camera = useRef(null);

// // const Submit=async()=>{
// //   if(camera){
// //     const { uri, codec = "mp4" } = await camera.current.recordAsync();
// //     console.info(uri);
// //   }
// // }
// // const Stop=()=>{
// //   camera.current.stopRecording();
// // }

// // const RenderCam=()=>{
// //   return <RNCamera
// //   ref={camera}
// //  style={styles.preview}
// //  defaultVideoQuality={RNCamera.Constants.VideoQuality["480p"]}
// //  type={RNCamera.Constants.Type.front}
// //  flashMode={RNCamera.Constants.FlashMode.on}
// //  androidCameraPermissionOptions={{
// //    title: 'Permission to use camera',
// //    message: 'We need your permission to use your camera',
// //    buttonPositive: 'Ok',
// //    buttonNegative: 'Cancel',
// //  }}
// //  androidRecordAudioPermissionOptions={{
// //    title: 'Permission to use audio recording',
// //    message: 'We need your permission to use your audio',
// //    buttonPositive: 'Ok',
// //    buttonNegative: 'Cancel',
// //  }}
// // />
// // }
// //     return (
// //       <View style={styles.container}>
// //         <View style={{flexDirection:'row',height:100}}>
// //         <View style={{width:'30%'}}>
// //              {RenderCam()}
// //         </View>
// //         <View style={{width:'70%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
// //               <Text style={{fontWeight:'bold',fontSize:16}}>Timer Here </Text>
// //               <Text style={{fontWeight:'bold',fontSize:18}}>Totel Question </Text>
// //         </View>
// //         </View>
 
        
// //         <View style={{flex:1,backgroundColor:'white',margin: 10}}>
// //             <Text style={{textAlign:'center',margin:5,fontWeight:'bold',fontSize:20}}>Ulive Test Title</Text>
// //             <View>
// //                <View>
// //                     <Text style={{margin: 20}}>Q.1) Most cameras have a Auto Focus feature. It adjusts your camera lens position automatically depending on the pixels seen by your camera.</Text>
// //                 </View>
// //               <View>
// //               {[1,2,3,4].map(data=>{
// //                  return <Text key={data} style={{margin: 15,borderBottomColor:'gray',borderBottomWidth:1}}>option is {data}</Text>
// //               })
// //               }
// //               </View>
// //             </View>
// //         </View>
// //         <View style={{flexDirection:'row'}}>
// //           <Pressable onPress={Submit} 
// //            style={{height: 50,backgroundColor:'#000',width:'100%',alignItems:'center',justifyContent:'center'}}>
// //              <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Submit</Text>
// //           </Pressable>
// //           {/* <Pressable onPress={Stop} 
// //            style={{height: 50,backgroundColor:'black',width:'50%',alignItems:'center',justifyContent:'center'}}>
// //             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Stop Rec</Text>
// //           </Pressable> */}
// //         </View>
      
// //       </View>
// //     );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: 'column',
// //     backgroundColor: 'white',
// //   },
// //   preview: {
// //       borderRadius: 4,
// //       borderColor: 'red',
// //      width:'100%',
// //      height:55
// //   }
// // });

// import React, { useEffect, useState } from 'react'
// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import { Camera } from 'expo-camera'
// import { Audio } from 'expo-av'
// import * as ImagePicker from 'expo-image-picker'
// import * as MediaLibrary from 'expo-media-library'
// import * as VideoThumbnails from 'expo-video-thumbnails';

// import { useIsFocused } from '@react-navigation/core'
// import { Feather } from 'react-native-vector-icons'

// import styles from './styles'
// import { useNavigation } from '@react-navigation/native'


// /**
//  * Function that renders a component responsible showing
//  * a view with the camera preview, recording videos, controling the camera and
//  * letting the user pick a video from the gallery
//  * @returns Functional Component
//  */
// export default function VideoRecorder() {
//     const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
//     const [hasAudioPermissions, setHasAudioPermissions] = useState(false)
//     const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)

//     const [galleryItems, setGalleryItems] = useState([])

//     const [cameraRef, setCameraRef] = useState(null)
//     const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
//     const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)

//     const [isCameraReady, setIsCameraReady] = useState(false)
//     const isFocused = useIsFocused()

//     const navigation = useNavigation()
//     useEffect(() => {
//         (async () => {
//             const cameraStatus = await Camera.requestPermissionsAsync()
//             setHasCameraPermissions(cameraStatus.status == 'granted')

//             const audioStatus = await Audio.requestPermissionsAsync()
//             setHasAudioPermissions(audioStatus.status == 'granted')

//             const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
//             setHasGalleryPermissions(galleryStatus.status == 'granted')

//             if (galleryStatus.status == 'granted') {
//                 const userGalleryMedia = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'], mediaType: ['video'] })
//                 setGalleryItems(userGalleryMedia.assets)
//             }
//         })()
//     }, [])


//     const recordVideo = async () => {
//         if (cameraRef) {
//             try {
//                 const options = { maxDuration: 60, quality: Camera.Constants.VideoQuality['480'] }
//                 const videoRecordPromise = cameraRef.recordAsync(options)
//                 if (videoRecordPromise) {
//                     const data = await videoRecordPromise;
//                     const source = data.uri
//                     let sourceThumb = await generateThumbnail(source)
//                     console.log(source,sourceThumb);
//                     // navigation.navigate('savePost', { source, sourceThumb })
//                 }
//             } catch (error) {
//                 console.warn(error)
//             }
//         }
//     }

//     const stopVideo = async () => {
//         if (cameraRef) {
//             cameraRef.stopRecording()
//         }
//     }

//     const pickFromGallery = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//             allowsEditing: true,
//             aspect: [16, 9],
//             quality: 1
//         })
//         if (!result.cancelled) {
//             let sourceThumb = await generateThumbnail(result.uri)
//             console.log(source,sourceThumb);
//             // navigation.navigate('savePost', { source: result.uri, sourceThumb })
//         }
//     }

//     const generateThumbnail = async (source) => {
//         try {
//             const { uri } = await VideoThumbnails.getThumbnailAsync(
//                 source,
//                 {
//                     time: 5000,
//                 }
//             );
//             return uri;
//         } catch (e) {
//             console.warn(e);
//         }
//     };

//     if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
//         return (
//             <View></View>
//         )
//     }

//     return (
//         <View style={styles.container}>
//             {isFocused ?
//                 <Camera
//                     ref={ref => setCameraRef(ref)}
//                     style={styles.camera}
//                     ratio={'16:9'}
//                     type={cameraType}
//                     flashMode={cameraFlash}
//                     onCameraReady={() => setIsCameraReady(true)}
//                 />
//                 : null}

//             <View style={styles.sideBarContainer}>
//                 <TouchableOpacity
//                     style={styles.sideBarButton}
//                     onPress={() => setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}>

//                     <Feather name="refresh-ccw" size={24} color={'white'} />
//                     <Text style={styles.iconText}>Flip</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.sideBarButton}
//                     onPress={() => setCameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)}>

//                     <Feather name="zap" size={24} color={'white'} />
//                     <Text style={styles.iconText}>Flash</Text>
//                 </TouchableOpacity>
//             </View>


//             <View style={styles.bottomBarContainer}>
//                 <View style={{ flex: 1 }}></View>
//                 <View style={styles.recordButtonContainer}>
//                     <TouchableOpacity
//                         disabled={!isCameraReady}
//                         onLongPress={() => recordVideo()}
//                         onPressOut={() => stopVideo()}
//                         style={styles.recordButton}
//                     />
//                 </View>
//                 <View style={{ flex: 1 }}>
//                     <TouchableOpacity
//                         onPress={() => pickFromGallery()}
//                         style={styles.galleryButton}>
//                         {galleryItems[0] == undefined ?
//                             <></>
//                             :
//                             <Image
//                                 style={styles.galleryButtonImage}
//                                 source={{ uri: galleryItems[0].uri }}
//                             />}
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }

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
    console.log("To: ",newFilepath)
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

class VideoRecorder extends Component {
    check = false
    videoSource = '';
    render() {
      return (
        <View style={styless.container}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={ref => {
              this.camera = ref;
              
            }}
            ratio='16:9'
          />
	       <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' ,backgroundColor: '#ffffff01'}}>
           <TouchableOpacity onLongPress={()=>this.recordVideo()}
              onPressOut={()=>{
                  // while(this.check != true);
                  // this.check = false;
                  this.stopVideo()
                }}
              >
              
           <Icon
            // raised
            name='radio-button-checked'
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
    saveVideo = async filePath => {
      try {
        // set new image name and filepath
        const newVideoName = `${moment().format('DDMMYY_HHmmSSS')}.mp4`;
        // console.log(newVideoName," _jh")
        const newFilepath = `/WeThePeople/${newVideoName}`;
        // move and save image to new filepath
        const videoMoved = await moveAttachment(filePath, newFilepath);
        console.log('Video moved', videoMoved);
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
    generateThumbnail = async (source) => {
      try {
          const { uri } = await VideoThumbnails.getThumbnailAsync(
              source,
              {
                  time: 5000,
              }
          );
          return uri;
      } catch (e) {
          console.warn(e);
      }
    };
    recordVideo = async () => {
      console.log("recording..");
      if (this.camera) {
          try {
              const options = { quality: RNCamera.Constants.VideoQuality['720'] }
              const videoRecordPromise = this.camera.recordAsync(options)
              if (videoRecordPromise) {
                  const data = await videoRecordPromise;
                  const source = data.uri
                  // let sourceThumb = await this.generateThumbnail(source)
                  console.log("From: ",source);
                  this.videoSource = source;
                  this.check = true;
                  // this.stopVideo();
                  // this.saveVideo(source);
                  // navigation.navigate('savePost', { source, sourceThumb })
              }
          } catch (error) {
              console.warn(error)
          }
      }
    };
    
    stopVideo = async () => {
      console.log("recording stopped...");
      if (this.camera) {
          this.camera.stopRecording()
          this.saveVideo(this.videoSource)
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
  export default VideoRecorder;