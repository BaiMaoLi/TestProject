import React from "react";
import {View, Text} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function StateID({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>OFTEN CALLED STOP AND ID STATES
</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                States With ID Statutes Not Necessarily Stop And ID States
                Is a person required to provide their name to a police officer who stops them? The
                answer depends on state law, but in some states, it is required.{'\n\n'}
                In June 2004, the Supreme Court ruled that a suspect had been lawfully arrested and
                prosecuted for refusing to give his name during a police stop. In Hiibel v. Sixth Judicial
                District Court of Nevada, 542 U.S. 177 (2004), the Court reasoned that a state
                statute can require a suspect to disclose his or her name in the course of a brief
                stop, if the detention was based on reasonable suspicion of a crime. Therefore, if
                state law requires identifying yourself to an officer, refusing to answer a request for
                one’s name during a stop could lead to an arrest.{'\n\n'}
                UNITED STATES IDENTIFY STATUTES{'\n'}
                <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate('Website',{link: 'https://www.wethepeopleuniversity.com/us-identify-statutes'})}>
                    <Text style={[styles.fontTheme,styles.textColor,{color: 'blue'}]}>(TAP HERE TO SEE LIST)</Text>
                </TouchableOpacity>{'\n\n'}
                Below are simply stop and identify statutes that are in different states. Not all states on
                this list are considered Stop and ID States. Although some are not considered Stop and
                ID States, they may still have certain ID statutes to be aware of. Whether your state is
                considered a Stop and ID State or not you should be aware of these statutes in your
                state.{'\n'}
                UNITED STATES IDENTIFY STATUTES{'\n'}
                <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate('Website',{link: 'https://www.wethepeopleuniversity.com/us-identify-statutes'})}>
                    <Text style={[styles.fontTheme,styles.textColor,{color: 'blue'}]}>(TAP HERE TO SEE LIST)</Text>
                </TouchableOpacity>
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}