import React from "react";
import { styles } from "./styles";
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
export const Item = ({image}) =>(
        <View style={[styles.setCenter,{flex: 1}]}>
            <Image source={image} style={{height: 110,width: 110, 
                        borderRadius: 2}}/>
            {/* <View style={{flex: 2,flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    
                </View>
                <View style={{flex:7}}></View>
            </View>
            <View style={{flex: 7}}/>
            <View style={{flex: 1,paddingTop: 18}}>
                <Text>{title}</Text>
            </View> */}
            
        </View>
);
export default function List({navigation}){
    const conv = [
        {key: 0,iurl: require('../images/Notifications.png'),
            ititle: 'Notifications'},
        {key: 1,iurl: require('../images/Record.png'),
            ititle: 'Rights To Record'},
        {key: 2,iurl: require('../images/Amendments.png'),
            ititle: 'Often Used Amendments'},
        {key: 3,iurl: require('../images/Probable.png'),
            ititle: 'Portable Cause v.RAS'},
        {key: 4,iurl: require('../images/ID.png'),
            ititle: 'State Identify Statutes'},
        {key: 5,iurl: require('../images/search_3.png'),
            ititle: 'Search/Seizure'},
        {key: 6,iurl: require('../images/Gun_Laws.png'),
            ititle: 'State Gun Laws'},
        {key: 7,iurl: require('../images/Traffic.png'),
            ititle: 'Traffic Stop Bascs'},
        {key: 8,iurl: require('../images/Public.png'),
            ititle: 'Public Property'},
        {key: 9,iurl: require('../images/Poster_7.png'),
            ititle: 'Website'},
        {key: 10,iurl: require('../images/Lie.png'),
            ititle: 'Most Abuses Laws'},
        {key: 11,iurl: require('../images/search_and_arrest.png'),
            ititle: 'Going To Jail'},
    ]
    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.2} 
          onPress={()=>navigation.navigate(item.ititle,{name: item.ititle,link: 'https://www.wethepeopleuniversity.com/uspsp-poster-7'})}
          style={[styles.container,{margin: 8,
            borderRadius: 2}]}>
            <Item image={item.iurl} />
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
                numColumns={3}
            />
            </ImageBackground>
        </View>
    );
}