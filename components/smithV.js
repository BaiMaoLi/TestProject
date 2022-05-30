import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function SmithV({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Recording In Public</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                The Right To Record Public Officials In The Course Of Their Duties{'\n\n'}
                The Eleventh Circuit has held that citizens have a First Amendment right to photograph
                or videotape the police because “the First Amendment protects the right to gather
                information about what public officials do on public property.” Smith v. City of Cumming
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}