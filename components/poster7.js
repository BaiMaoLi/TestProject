import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import WebView from "react-native-webview";
import { styles } from "./styles";
export default function Poster7({route}){
    const link = route.params.link;
    console.log(link);
    return(
        <WebView source={{uri: link}} style={{margin: 5}} />
    );
}