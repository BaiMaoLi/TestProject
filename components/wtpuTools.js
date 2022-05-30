import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
import {styles} from './styles';
export default function WtpuTools({navigation}){
    const canonCam = require('../images/CanonCam.jpeg');
    const locationCam = require('../images/Locationpic.jpeg');
    const recordCam = require('../images/RecordingCam.jpeg');
    const notesCam = require('../images/Notespic.jpeg');
    return(
        <View style={[styles.container]}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
            <View style={{flex: 6}}>
                <View style={[styles.setCenter,{flex: 1, flexDirection: 'row'}]}>
                    
                    <View style={[styles.setCenter,{flex: 1}]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Camera')}
                            style={{elevation: 5,borderColor: 'white'}}>
                            <Image source={canonCam} style={{height: 150,width: 150,borderRadius: 10}}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={[styles.setCenter,{flex: 1}]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Map')}
                            style={{elevation: 5,borderColor: 'white'}}>
                            <Image source={locationCam} style={{height: 150,width: 150,borderRadius: 10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.setCenter,{flex: 1, flexDirection: 'row'}]}>
                    <View style={[styles.setCenter,{flex: 1}]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Video Recording')}
                            style={{elevation: 5,borderColor: 'white'}}>
                            <Image source={recordCam} style={{height: 150,width: 150,borderRadius: 10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.setCenter,{flex: 1}]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Notes')}
                            style={{elevation: 5,borderColor: 'white'}}>
                            <Image source={notesCam} style={{height: 150,width: 150,borderRadius: 10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flex: 4}}/>
            </ImageBackground>
        </View>
    );
}