import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function Amendments({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Often Used Amendments</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                1st Amendment Congress shall make no law respecting an establishment of religion,
                or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the
                press; or the right of the people peaceably to assemble, and to petition the
                Government for a redress of grievances.{'\n\n'}
                2nd Amendment A well regulated Militia, being necessary to the security of a free
                State, the right of the people to keep and bear Arms, shall not be infringed.{'\n\n'}
                4th Amendment The right of the people to be secure in their persons, houses,
                papers, and effects, against unreasonable searches and seizures, shall not be
                violated, and no Warrants shall issue, but upon probable cause, supported by Oath
                or affirmation, and particularly describing the place to be searched, and the persons or
                things to be seized.{'\n\n'}
                5th Amendment No person shall be held to answer for a capital, or otherwise infamous
                crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in
                the land or naval forces, or in the Militia, when in actual service in time of War or public
                danger; nor shall any person be subject for the same offence to be twice put in jeopardy
                of life or limb; nor shall be compelled in any criminal case to be a witness against
                himself, nor be deprived of life, liberty, or property, without due process of law;
                nor shall private property be taken for public use, without just compensation.{'\n\n'}
                14th Amendment All persons born or naturalized in the United States and subject to
                the jurisdiction thereof, are citizens of the United States and of the State wherein they
                reside. No State shall make or enforce any law which shall abridge the privileges or
                immunities of citizens of the United States; nor shall any State deprive any person of
                life, liberty, or property, without due process of law; nor deny to any person within
                its jurisdiction the equal protection of the laws.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}