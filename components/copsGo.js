import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function CopsGo({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>COPS GO TO - TO VIOLATE</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Most Abused Laws by Cops{'\n\n'}
                Suspicion – Which cops now try and use suspicion as Reasonable Articulable
                Suspicion.{'\n\n'}
                Disorderly Conduct – Look up your state law and know it well. Cops will abuse it!{'\n\n'}
                Loitering – Again, look up your state law and know it well. Cops will abuse it!{'\n\n'}
                Below are simply stop and identify statutes that are in different states. Not all states on
                this list are considered Stop and ID States. Although some are not considered Stop and
                ID States, they may still have certain ID statutes to be aware of. Whether your state is
                considered a Stop and ID State or not you should be aware of these statutes in your
                state.{'\n\n'}
                UNITED STATES IDENTIFY STATUTES{'\n'}
                (TAP HERE TO SEE LIST)
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}