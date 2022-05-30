import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function Consent({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>PROTECT YOUR RIGHTS</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Consent - If the police ask you for your consent to search your home, car, or
                belongings, YOU MAY REFUSE. If you freely and voluntarily give your consent to a
                search, the police are allowed to search without probable cause. Many people give
                consent to search their house, car, or other belongings because they believe they must.
                Don't make that mistake! Consent induced by a threat or promise of a benefit or reward
                is generally not voluntary and will invalidate the subsequent search. For example, if an
                officer is at your house and says they're going to call the Department of Family and
                Child Services to take custody of a child if you don't consent, any consent under that
                circumstance is invalid and can be challenged.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}