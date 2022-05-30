import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function GunLaws({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>See Your States’ Gun Laws
</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                The U.S. Concealed Carry Association (USCCA), serve gun owners who want to
                responsibly protect their loved ones. Learn your rights and responsibilities as a gun
                owner. Unlock lessons on firearm safety, concealed carry, and home defense. Be ready
                to defend your life and prepare for what happens before, during, and after an act of
                self‑defense.{'\n\n'}
                I strongly recommend signing up for the services provided by the U.S. Concealed Carry
                Association. - Abiyah Israel{'\n\n'}
                <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate('Website',{link: 'https://www.usconcealedcarry.com/resources/ccw_reciprocity_map/'})}>
                    <Text style={[styles.fontTheme,styles.textColor,{color: 'blue'}]}>Click here to see all state gun laws</Text>
                </TouchableOpacity>
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}