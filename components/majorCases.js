import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function MajorCases({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>COURT CASES TO KNOW</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Mapp v. Ohio, 367 U.S. 643 (1961)-The US Supreme Court applied the "exclusionary
                rule" to the states. Any evidence illegally obtained by the government cannot be used in
                court against the accused.{'\n\n'}
                Terry v. Ohio, 392 US 1(1968)-An officer can briefly detain a person, based upon
                reasonable suspicion of criminal activity, long enough to dispel the suspicion or to allow
                it to rise to the level of probable cause for an arrest. The officer is also permitted to do a
                limited "frisk" search of the person without a warrant. Before the officer can frisk search
                the subject, he must:{'\n\n'}
                1. Have articulable facts that the person could be armed with a weapon.{'\n'}
                2. Limit the search to pat searching the outer garments of the suspect to feel for objects
                that might be weapons.{'\n'}
                3. Only reach inside the clothing after feeling such objects.{'\n\n'}
                Chimel v. California, 395 US 752 (1969)-The arrest of a person in his home does not
                allow the warrantless search of the whole house incident to arrest.{'\n\n'}
                Tennessee v. Garner, 471 U.S. 1 (1985)-The use of deadly force to stop a fleeing felon
                is not justified unless it is necessary to prevent the escape, and it complies with the
                following requirements. The officer has to have probable cause to believe that the
                suspect poses a significant threat of death or serious physical injury to the officer or
                others.{'\n\n'}
                Whren v. U.S., 517 US 806 (1996)-Through the late 1980's and into the 1990's courts
                were embracing the idea that an officer's subjective reasons for making a traffic stop
                should be considered when ruling on the validity of seizures. If the court finds that an
                officer's subjective reasons for making the stop was for anything other than the initial
                traffic offense, and that reason lacks probable cause or reasonable suspicion, the court
                would dismiss the charges. The U.S. Supreme Court finally addressed these types of
                rulings in the Whren case. The court ruled that the objective not subjective reasons for
                making traffic stops should be considered. An officer's intent or motivation to make a
                traffic stop is not relevant to the Fourth Amendment standard of "reasonableness".
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}