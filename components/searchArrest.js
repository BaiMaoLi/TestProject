import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function SearchArrest({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>SEARCH AND ARREST</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Police may generally use drug-sniffing dogs to detect the presence of narcotics without
                a warrant. Public places such as airports, bus terminals, and highways are commonly
                approved for “free air sniffs” by K-9s. However, a warrant is required if the dog
                physically intrudes upon a place where you have a reasonable expectation of privacy,
                such as your home. The U.S. Supreme Court ruled recently in Florida v. Jardines that
                the use of a drug dog on the front porch of a home constitutes a search and therefore
                requires a warrant.{'\n\n'}
                The U.S. Supreme Court decided in the 2005 case of Illinois v. Caballes. Thus, the
                use of a trained detection dog does not require a warrant for the area around your
                vehicle.{'\n\n'}
                As Part of An Arrest – (Incident to Arrest)- Under most circumstances, police may
                search you and the area in your immediate control as part of a lawful arrest. This is
                referred to as a “search incident to arrest. However, not all arrests are lawful, and you
                may be able to challenge a warrantless search conducted after an unlawful arrest.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}