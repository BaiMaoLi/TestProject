import React, { useCallback } from "react";
import {View, Text, Image, Linking} from 'react-native';
import { WebView } from 'react-native-webview';
import {styles} from './styles';
export default function TheWeUni(){
    const url = 'https://www.youtube.com/c/WeThePeopleUniversity'

    return(
        <WebView
                source={{ uri: url }}
                style={{ margin: 10 }}
        />
    );
}