import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import WebView from "react-native-webview";
import MapView from 'react-native-maps'
import { styles } from "./styles";
export default function GoogleMap(){
    return(
        <WebView source={{uri: 'https://www.google.com/maps/@37.0625,-95.677068,4z'}} style={{margin: 5}} />
        // <MapView style={{flex: 1}} region={{
        //         latitude: 42.882004,
        //         longitude: 74.582748,
        //         latitudeDelta: 0.0922,
        //         longitudeDelta: 0.0421
        //     }}
        // showsUserLocation={true}/>
    );
}