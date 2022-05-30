import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function PassengerDef({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>PASSENGER DEFENSE</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                - Be free from unreasonable or illegal searches by law enforcement.{'\n'}
                - Remain silent and do not answer questions asked by the police.{'\n'}
                - You can challenge the legality of the traffic stop in court{'\n'}
                - You can challenge the legality in court of any search after the stop.{'\n'}
                - If asked to step out of the vehicle you must comply. The officer has legal rights to ask
                you to do so. (Maryland v. Wilson){'\n\n'}
                - The U.S. Court of Appeals for the Ninth Circuit, which oversees Arizona and
                several other western states, recently ruled that law enforcement cannot extend a traffic
                stop because a passenger refuses to give their identification, unless the officer has a
                reasonable suspicion the person has committed a crime.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}