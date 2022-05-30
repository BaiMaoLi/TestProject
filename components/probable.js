import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function Probable({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Probable Cause v. Reasonable Articulable Suspicion</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Probable Cause (PC) v. Reasonable Articulable Suspicion (RAS){'\n\n'}
                RAS is when police have enough suspicion to stop a person. The suspicion is
                reasonable based on the circumstances currently present.{'\n\n'}
                PC is the logical belief supported with evidence and circumstances that a crime has
                been, is being, or will be committed.{'\n\n'}
                An example of probable cause would be:
                Cameras and witnesses saw you running out of the warehouse that was just
                burglarized. You fit the description and you have a weapon that matches the weapon
                used in the burglary.{'\n\n'}
                An example of reasonable articulable suspicion would be:
                String of burglaries have been committed at a certain business approximately between
                10 and 12 at night by a 6’3 white male wearing all black. You are a 6’2 white male who
                is walking home from work and decides to cut through the parking lot of the same
                business that was burglarized. You are walking through the parking lot at the time that
                matches the crime and your uniform happens to be all black. This would be enough for
                an officer to have RAS to believe you could possibly be the suspect who has, or is, or
                about to commit a crime. At that point, the officer can stop and investigate at the very
                least.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}