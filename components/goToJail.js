import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function GoToJail({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>YOU HAVE BEEN ARRESTED</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                    Do not start talking. You have the right to remain silent. Tell the officer “I would like to
                    remain silent.”{'\n\n'}
                    Do not answer any questions except your name, address, and date of birth.{'\n\n'}
                    Ask for a lawyer immediately. Be specific in your request for an attorney. Remain silent
                    until you get an attorney. Remember what you say or do can and will be used against
                    you.{'\n\n'}
                    Miranda v. Arizona, 384 U.S. 436 (1966), was a landmark decision of the U.S.
                    Supreme Court in which the Court ruled that the Fifth Amendment to the U.S.
                    Constitution restricts prosecutors from using a person's statements made in response to
                    interrogation in police custody as evidence at their trial unless they can show that the
                    person was informed of the right to consult with an attorney before and during
                    questioning, and of the right against self-incrimination before police questioning, and
                    that the defendant not only understood these rights, but voluntarily waived them.{'\n\n'}
                    Remember anything you say when arrested, even if simple conversation in the back of
                    the patrol car or the jail, can be used against you. Other than basic identification
                    information you have the right to wait to talk to a lawyer about concern with your arrest.{'\n\n'}
                    Even if you are not read your rights at the scene of contact with the police, anything you
                    say or do may possibly be used against you.{'\n\n'}
                    You have the right to remain silent
                    Anything you say can and will be used against you in a court of law
                    You have the right to an attorney
                    If you cannot afford an attorney, one will be appointed for you{'\n\n'}
                    This means you can choose not to answer an officer’s questions and may request an
                    attorney.{'\n\n'}
                    If your rights have been violated whether you have been arrested or not, you should
                    write down the details of the incident. Gather things like officer name and badge
                    number, which basic right he violated, how he violated your rights, time, date, location,
                    reason for the encounter, mood of the officer, were there any witness, and anything else
                    that will assist in proving that your rights were violated. Always record!
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}