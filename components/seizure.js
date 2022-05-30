import React from "react";
import { styles } from "./styles";
// import {Item} from './flatlist';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from "react-native";
const Item = ({image}) =>(
        <View style={[styles.setCenter,{flex: 1}]}>
            <Image source={image} style={{height: 165,width: 165}}/>
        </View>
);
export default function Seizure({navigation}){
    const conv = [
        {key: 0,iurl: require('../images/Consent.png'),
            ititle: 'Consent'},
        {key: 1,iurl: require('../images/Plain_View.png'),
            ititle: 'Plain View'},
        {key: 2,iurl: require('../images/Major_Cases.png'),
            ititle: 'Major Cases'},
        {key: 3,iurl: require('../images/Traffic_Law.png'),
            ititle: 'Traffic Stops'},
        {key: 4,iurl: require('../images/Pass_Defense.png'),
            ititle: 'Passenger Deffense'},
        {key: 5,iurl: require('../images/Road_Blocks.png'),
            ititle: 'Road Blocks'},
        {key: 6,iurl: require('../images/search_and_arrest.png'),
            ititle: 'Search/Arrest'},
    ]
    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.2} 
          onPress={()=>navigation.navigate(item.ititle,{name: item.ititle})}
          style={[styles.container,{margin: 10,
            borderRadius: 2}]}>
            <Item image={item.iurl} title={item.ititle}/>
        </TouchableOpacity>
    );
    return(
        <View style={[styles.container]}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
            <View style={{flex: 7}}>
                <FlatList
                    data={conv}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    numColumns={2}
                />    
            </View>
            <View style={{flex: 1}}/>
            
            </ImageBackground>
        </View>
    );
}