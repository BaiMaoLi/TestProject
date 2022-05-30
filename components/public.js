import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function Public({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>Heading: Public v. Private Property</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Government properties consist of land or assets owned by federal, state, or local,
                governments and may also include government agencies or government-sponsored
                organizations such as libraries or parks.{'\n\n'}
                - Government-owned property refers to land or other assets that are legally owned by a
                government or government entity.{'\n'}
                - Government-owned property may be titled at the federal, state, or local level and may
                or may not allow unrestricted public access.{'\n'}
                - Some government owned properties constitute public goods, such as parks, libraries,
                roads, and sidewalks.{'\n\n'}
                Properties own by the government are public property. Be aware although these
                properties are owned by governmental entities they still reserve the right to designate
                certain areas as restricted to the public. You are not allowed in restricted areas without
                authorization.{'\n\n'}
                Easements:{'\n'}
                Public Easement:{'\n'}
                An easement is a right to use someone else’s land for your benefit. One property is
                usually benefited, and the other property burdened by an easement. Easements can be
                public or private, positive, or negative.{'\n\n'}
                A public easement is a special type of property ownership. When an easement exists on
                a piece of land, the owner of that land must permit others to use the easement for the
                stated purpose. If the easement is a public easement, the person who owns the land
                must allow members of the public to access a defined area of his land for reasons
                stated in the easement.{'\n\n'}
                Public Easement examples: Sidewalks, Public Utility Poles, City Street Signs.{'\n\n'}
                Remember, private properties can also have easements, but this does not give you
                access to the private property because it has an easement.{'\n\n'}
                Be sure to research easements in your state. States like California or New Mexico
                may have different laws.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}