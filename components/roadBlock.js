import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function RoadBlock({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>ROAD BLOCKS</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Delaware v. Prouse, 440 US 648(1979)-Non-standarized random traffic stops
                conducted for the purpose of checking driver licenses violates the Fourth Amendment.{'\n\n'}
                City of Indianapolis v. Edmond, 531 US 32(2000)-It is unconstitutional to set up a
                checkpoint to detect evidence of ordinary criminal wrongdoing. In this case, the officers
                were looking for drugs.{'\n\n'}
                Illinois v. Lidster, 540 U.S. 419 (2004)-Police set up a roadblock in the area of a
                fatality hit-and-run accident. The police used the roadblock to ask drivers and
                passengers if they had any information about the accident. Lidster was stopped at the
                roadblock and was found to be DUI. He appealed his conviction arguing that the
                Indianapolis v. Edmond case made this type of roadblock unconstitutional. The USSC
                ruled that the roadblock did not violate the Constitution because it was set up for
                informational purposes. Its purpose was not to determine if drivers or passengers were
                committing crimes. (Don’t Speak To The Cops – 5th Amendment){'\n\n'}
                Michigan Department of State Police v. Sitz, 496 US 444 (1990)-The State's interest
                in preventing drunk driving is a highway safety issue. The use of checkpoints to detect
                drunk driving within certain guidelines is constitutional.{'\n\n'}
                DUI{'\n'}
                - May vary by state. Check your state laws to ensure you are in accordance with all
                laws.{'\n\n'}
                • If you are not currently under some form of probation or parole, you are under no legal
                obligation to answer questions. You have the right to remain silent.{'\n\n'}
                • You do not have to take Field Sobriety test or breath test.{'\n'}
                - In the state of Georgia your license can be suspended for simply refusing breath or
                chemical test, even before you are convicted.{'\n\n'}
                - But refusing makes the prosecutors case much harder to prove due to lack of
                evidence.{'\n\n'}
                • Field Sobriety test are not pass/fail they are simply designed to collect evidence.{'\n\n'}
                • You may be required to take a breath test if arrested. Check with your state.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}