import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function GlikV({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Right To Record Cases</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Is a case in which the United States Court of Appeals for the First Circuit held that a
                private citizen has the right to record video and audio of police carrying out their
                duties in a public place, and that the arrest of the citizen for a wiretapping violation
                violated his First and Fourth Amendment rights.{'\n\n'}
                Background:{'\n'}
                The case arose when Simon Glik filmed Boston, Massachusetts, police officers from the
                bicycle unit making an arrest in a public park. When the officers observed that Glik was
                recording the arrest, they arrested him and Glik was subsequently charged with
                wiretapping, disturbing the peace, and aiding in the escape of a prisoner. Glik then sued
                the City of Boston and the arresting officers, claiming that they violated his constitutional
                rights.{'\n\n'}
                In a unanimous decision, the United States Court of Appeals for the First Circuit
                held that the officers violated Glik's constitutional rights and that the officers
                were not entitled to qualified immunity. The Court ruled that the right to film the
                police carrying out their duties in public was "clearly established," and that Glik's actions
                did not violate state law.{'\n\n'}
                It should be noted that Glik was standing 10 feet away from officers and was in no
                way impeding their investigation.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}