import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function TrafficStop({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>WHAT TO DO WHEN ENCOUNTERING COPS</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Traffic Stops Basics
                Stop in a well-lit and safe area{'\n\n'}
                Turn on your emergency flashers and phone 911 if possible
                Let 911 know your location/Rd, direction of travel, and the make and model of your
                vehicle. Give the tag number if possible.{'\n\n'}
                Always keep your hands visible{'\n\n'}
                Keep your hands on your steering wheel or hang them out of your car window.{'\n\n'}
                Have all pertinent info available{'\n\n'}
                Registration and insurance info should always be kept above the sun visor.{'\n\n'}
                This takes away any need to reach into compartments and it takes away the excuse of
                the office saying you were reaching for a weapon.{'\n\n'}
                Show your ID if you are legally stopped (Debates do not make the police leave){'\n\n'}
                Most state laws have made it clear that you do not have to show your ID if you are not
                suspected of a crime.{'\n\n'}
                Let’s be clear if you are stopped for a traffic infraction SHOW YOUR ID.{'\n\n'}
                On the side of the road is not the place to fight your court case.{'\n\n'}
                Most officer have no clue what words like Corpus Delicti means.{'\n\n'}
                If you want to question the constitutionality of the stop, use plain English.{'\n\n'}
                If asked questions like, where are you going or coming from, you are under no legal
                obligation to answer. You may invoke your 5th amendment right.{'\n\n'}
                Do You have weapons in your vehicle? You may be legally required to state depending
                on your state.{'\n\n'}
                Research your state to see if it is required.{'\n'}
                Research your state to see what the laws are on carrying a weapon in your vehicle.
                Georgia for example recognizes the car as an extension of your home, but all states
                may not.{'\n\n'}
                In general, law enforcement may detain or prevent an individual from leaving for the
                purpose of investigating a crime or for law enforcement officer safety. This detention,
                however, must be reasonable.{'\n\n'}
                The Supreme Court of the United States (Rodriguez v. United States) has held that
                investigative detentions, including traffic stops, "must be temporary and last no longer
                than is necessary to effectuate the purpose of the stop. Consequently, traffic stops may
                become unreasonable if they are unnecessarily prolonged.

                </Text>
            </View>
            </ScrollView>
        </View>
    );
}