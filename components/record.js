import React from "react";
import { styles } from "./styles";
// import {Item} from './flatlist';
import { View, Text, Button, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
const Item = ({image,title}) =>(
        <View style={[styles.setCenter,{flex: 1}]}>
            <Image source={image} style={{height: 165,width: 165,borderRadius: 2, marginBottom: 5}}/>
            <Text style={{color: 'black',backgroundColor: '#E3F4FA',padding: 5, borderRadius: 20}}>{title}</Text>
        </View>
);
export default function Record({navigation}){
    const conv = [
        {key: 0,iurl: require('../images/5efa30825297b.image.jpg'),
            ititle: 'Gilk v. Cunniffe'},
        {key: 1,iurl: require('../images/5efa30825297b.image.jpg'),
            ititle: 'Smith v. Cummings'},
        {key: 2,iurl: require('../images/5efa30825297b.image.jpg'),
            ititle: 'Case Thrown Out'},
        {key: 3,iurl: require('../images/departmentOfJustice.png'),
            ititle: 'Depriving Of Rights'},
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
            <FlatList
                data={conv}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                numColumns={2}
            />
            </ImageBackground>
        </View>
    );
}