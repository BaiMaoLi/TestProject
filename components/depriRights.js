import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function DepriRights({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Do Not Allow Cops To Deprive You Of Your Rights</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Section 242 of Title 18 makes it a crime for a person acting under color of any law to
                willfully deprive a person of a right or privilege protected by the Constitution or laws of
                the United States.{'\n\n'}
                For the purpose of Section 242, acts under "color of law" include acts not only done by
                federal, state, or local officials within their lawful authority, but also acts done beyond the
                bounds of that official's lawful authority, if the acts are done while the official is
                purporting to or pretending to act in the performance of his/her official duties. Persons
                acting under color of law within the meaning of this statute include police officers,
                prisons guards and other law enforcement officials, as well as judges, care providers in
                public health facilities, and others who are acting as public officials. It is not necessary
                that the crime be motivated by animus toward the race, color, religion, sex, handicap,
                familial status or national origin of the victim.{'\n\n'}
                The offense is punishable by a range of imprisonment up to a life term, or the death
                penalty, depending upon the circumstances of the crime, and the resulting injury, if any.
                TITLE 18, U.S.C., SECTION 242{'\n\n'}
                Whoever, under color of any law, statute, ordinance, regulation, or custom,
                willfully subjects any person in any State, Territory, Commonwealth, Possession,
                or District to the deprivation of any rights, privileges, or immunities secured or
                protected by the Constitution or laws of the United States, ... shall be fined under
                this title or imprisoned not more than one year, or both; and if bodily injury
                results from the acts committed in violation of this section or if such acts include
                the use, attempted use, or threatened use of a dangerous weapon, explosives, or
                fire, shall be fined under this title or imprisoned not more than ten years, or both;
                and if death results from the acts committed in violation of this section or if such
                acts include kidnapping or an attempt to kidnap, aggravated sexual abuse, or an
                attempt to commit aggravated sexual abuse, or an attempt to kill, shall be fined
                under this title, or imprisoned for any term of years or for life, or both, or may be
                sentenced to death.


                </Text>
            </View>
            </ScrollView>
        </View>
    );
}