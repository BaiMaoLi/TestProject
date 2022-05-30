import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView,ImageBackground} from 'react-native';
import {styles} from './styles';
export default function AboutWTPU(){

    return(
        <ScrollView>
        <View style={[styles.container]}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
           
               <View style={[styles.setCenter,{flex: 3, backgroundColor: '#73BDB79A'}]}>
                    <Text style={[styles.textColor,{fontSize: 23,fontWeight: 'bold'}]}>Abiyah Israel</Text>
                    <Text style={[styles.textColor]}>CEO</Text>
                    <Image
                        source={require('../images/Abiyah.png')}
                        style={{height: 140,width: 140,margin: 8,
                            backgroundColor:'#33B6DD',borderRadius: 150/2,
                            borderWidth: 5,borderColor: 'white'}}/>
               </View>
               <View style={[styles.backColor,{flex: 5,borderColor: 'black'}]}>
                    <View style={{flex: 8}}>
                        <Text style={[{fontSize: 23,fontWeight: 'bold',textAlign: 'center',color: 'white'}]}>About WTPU</Text>
                        <Text style={[styles.setCenter,styles.fontTheme,{textAlign: 'center',color: 'white'}]}>
                        {'\n'}Thank you for downloading the We The People University - Stop The Tyranny App. This
                            app is design to help current and future auditors understand the law, so their rights are
                            not violated when conducting 1A Audits. This app is also designed for everyday citizens
                            who simply want to know their rights and not have them violated. New case law and
                            content will be uploaded regularly. Search through the app and study the content so you
                            can learn what to do when you encounter cops who want to violate your rights.
                        </Text>
                    </View>
                    <View style={[styles.setCenter,{flex: 2}]}>
                        <Text style={[{fontSize: 24,color: 'white'}]}>Founded: 2021</Text>
                    </View>
                </View>
                <View style={[styles.setCenter,{flex: 0.5,backgroundColor: '#73BDB79A'}]}>
                    <Text style={[styles.textColor,{fontSize: 24}]}>Business Hours</Text>
                </View>
                <View style={[{flex: 0.5,padding: 5,justifyContent: 'center',backgroundColor: '#73BDB79A'}]}>
                    <Text style={[styles.textColor,{fontSize: 18}]}>Open 24/7</Text>
                </View>
           
           </ImageBackground>
        </View>
        </ScrollView>
    );
}

{/* <View style={[styles.setCenter,{flex: 3,borderBottomWidth: 1,borderColor: 'black'}]}>
                   <Text style={[styles.fontTheme]}>
                    Thank you for downloading the We The People University - Stop The Tyranny App. This
                    app is design to help current and future auditors understand the law, so their rights are
                    not violated when conducting 1A Audits. This app is also designed for everyday citizens
                    who simply want to know their rights and not have them violated. New case law and
                    content will be uploaded regularly. Search through the app and study the content so you
                    can learn what to do when you encounter cops who want to violate your rights.
                   </Text>
               </View>
               <View style={{flex: 8}}>
                   <View style={{flex: 6,borderBottomWidth: 1,borderColor: 'black'}}>
                       <View style={{flex: 8,flexDirection: 'row'}}>
                            <View style={[styles.setCenter,{flex: 1}]}>
                                <Image
                                    source={require('../images/Abiyah.png')}
                                    style={{height: 140,width: 140, padding:5,backgroundColor:'#73BDB7',borderRadius: 150/2}}/>
                                <Text style={[{fontSize: 23}]}>CEO</Text>
                                <Text style={[,styles.fontTheme]}>Abiyah Israel{'\n'}</Text>
                                <Text style={[styles.fontTheme]}>Learn Your Rights</Text>
                            </View>
                            <View style={[styles.setCenter,{flex: 1}]}></View>
                       </View>
                       <View style={[styles.setCenter,{flex: 2}]}>
                            <Text style={[{fontSize: 24}]}>Founded: 2021</Text>
                       </View>
                   </View>
                   <View style={[styles.setCenter,{flex: 1}]}>
                    <Text style={[{fontSize: 24}]}>Business Hours</Text>
                   </View>
                   <View style={[{flex: 1,margin: 5,justifyContent: 'center'}]}>
                    <Text style={[{fontSize: 18}]}>Open 24/7</Text>
                   </View>
               </View> */}