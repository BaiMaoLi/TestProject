import React,{useState} from "react";
import {View, Text, FlatList,TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from "./styles";
const Item = ({text,date}) =>(
    <View style={[styles.setCenter,{flex: 1}]}>
        <Text style={{color: 'black'}}>{text}</Text>
        <Text style={{color: 'black'}}>{date}</Text>
    </View>
);
export default function Notifi(){
    const [notification, setNotification] = useState([
        {id:0,noti: 'This is your Dev M. xyz speaking',date: '15-May-2022'},
        {id:1,noti: 'Hi! This is the first notification from your developer xyz How are you?',date: '16-May-2022'},
        {id:2,noti: 'I\'m always availabe',date: '18-May-2022'}
    ]);
    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.7} 
          onPress={()=>console.log("Notification pressed!")}
          style={[styles.container,{margin: 10, elevation: 5, backgroundColor: '#E3F4FA',
            borderRadius: 15}]}>
            <Item text={item.noti} date={item.date} />
        </TouchableOpacity>
    );
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
             <FlatList
                data={notification}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </ImageBackground>
        </View>
    );
}