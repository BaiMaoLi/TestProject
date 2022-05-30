import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function PlainView({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>PLAIN VIEW DOCTRINE</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Plain View - Officers do not need a warrant to seize illegal contraband if they observe it
                from a legal vantage point. If you pull into a parking space and a police officer who is
                standing on the sidewalk notices a bag of marijuana on your passenger seat and he
                seizes it, he has not searched your car because the items are in “plain view.” He can
                likely seize the contraband and and may have probable cause to make an arrest and
                conduct a full search of your car. Similarly, evidence may be in plain view if it is in your
                yard or in an open field, even if that area is part of your property.

                </Text>
            </View>
            </ScrollView>
        </View>
    );
}