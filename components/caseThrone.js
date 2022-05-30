import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function CaseThrone({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Florida Court Upholds Arrest of Mother Who Recorded Son’s Detention by Police</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                On May 5th, a split three-judge panel on the District Court of Appeal of the State of
                Florida for the Fourth District upheld the arrest of Sharron Tasha Ford, who sued the city
                of Boynton Beach for violating her First Amendment right to record police.{'\n\n'}
                The case centers on an incident that occurred more than a decade ago. In 2009, Ford
                got a phone call from the Boynton Beach police after her minor son was caught entering
                a movie theater without buying a ticket. When Ford arrived, she began to question the
                police about her son’s arrest and used her cell phone to record their conversation.{'\n\n'}
                During the encounter, the police repeatedly asked Ford to stop videotaping them, but
                Ford refused. After multiple attempts to get her to stop recording, the police arrested her
                for “obstruction” of their duties and for violating the state’s wiretapping statute.{'\n\n'}
                Ford sued the city in 2010 with the help of the American Civil Liberties Union. Her
                lawyers argued that the First Amendment assured individuals the right to record public
                officials pursuing their official duties in public, and that the wiretapping statute did not
                apply here because the officers’ did not have a reasonable expectation of privacy.{'\n\n'}
                In 2019, the Fifteenth Judicial Circuit Court issued a summary judgment in favor of the
                city. The court reasoned that the officers had probable cause to arrest Ford because
                she had “interfered with the City Police Officer’s processing of her minor son’s
                detention” and because she at one point lied to the officer when they asked her whether
                she was recording them.{'\n\n'}
                In a 2-1 ruling, the Florida appeals court upheld the lower court’s ruling. “A review of the
                recorded incident reveals the plaintiff’s approach to the officers was designed to impede
                what should have been a short, uneventful exchange of her son’s custody,” Judges
                Melanie May and Edward Artau wrote for pure curiam opinion.{'\n\n'}
                It should be noted that you may give police a way out if you break any laws while
                conducting a 1A Audit or when simply standing up for your rights.

                </Text>
            </View>
            </ScrollView>
        </View>
    );
}