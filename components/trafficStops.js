import React from "react";
import {View, Text} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
export default function TrafficStops({navigation,route}){
    return(
        <View style={[styles.container,styles.backColor]}>
            <ScrollView>
            <View style={[styles.setCenter,{flex:1}]}>
                <Text style={[styles.textColor,{fontSize: 25}]}>TRAFFIC STOPS</Text>
            </View>
            <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                <Text style={[styles.fontTheme,styles.textColor]}>
                Carroll v. U.S., 267 U.S. 132 (1925)-Police may conduct a warrantless search of a
                vehicle stopped on traffic if there is probable cause to believe that the vehicle contains
                contraband or evidence. The search without a warrant is justified based on the exigent
                circumstance that a vehicle stopped on traffic could be quickly moved out of the city or
                jurisdiction of the investigating agency.{'\n\n'}
                Pennsylvania v. Mimms, 434 US 106(1977)-The driver can be ordered out of a
                vehicle, without suspicion, on routine traffic stops if the officer fears for his safety.
                Alabama v. White, 496 US 325 (1990)-An anonymous tipster's information is completely
                lacking in reliability when taken by itself. Further police investigation that corroborates
                the tipster's information, however, can develop sufficient information to justify at least an
                investigatory stop.{'\n\n'}
                Whren v. U.S., 517 US 806 (1996)-Through the late 1980's and into the 1990's courts
                were embracing the idea that an officer's subjective reasons for making a traffic stop
                should be considered when ruling on the validity of seizures. If the court finds that an
                officer's subjective reasons for making the stop was for anything other than the initial
                traffic offense, and that reason lacks probable cause or reasonable suspicion, the court
                would dismiss the charges. The U.S. Supreme Court finally addressed these types of
                rulings in the Whren case. The court ruled that the objective not subjective reasons for
                making traffic stops should be considered. An officer's intent or motivation to make a
                traffic stop is not relevant to the Fourth Amendment standard of "reasonableness".{'\n\n'}
                US v. Hunnicutt, 97-5087 (10th Cir. 1997)-Lengthening the detention for further
                questioning beyond that related to the initial stop is permissible in two circumstances:{'\n\n'}
                - The officer has an objectively reasonable and articulable suspicion illegal activity has
                occurred or is occurring.{'\n\n'}
                - Further questioning unrelated to the initial stop is permissible if the initial detention has
                become a consensual encounter.{'\n\n'}
                The Supreme Court of the United States (Rodriguez v. United States) has held that
                investigative detentions, including traffic stops, "must be temporary and last no longer
                than is necessary to effectuate the purpose of the stop. Consequently, traffic stops may
                become unreasonable if they are unnecessarily prolonged.{'\n\n'}
                • US v. Ngumezi, No. 19-10243 (9th Cir. 2020)-The Court held that a police officer may
                stop a vehicle with reasonable suspicion. Without probable cause or any other
                particularized justification, however, the officer cannot open the vehicle door and lean
                inside. To do so is an unlawful search. The officer contacted Ngumezi while parked at a
                gas station because his vehicle did not have a tag. There was a bill of sale affixed to the
                passenger side of the windshield. The officer contacted Ngumezi from the passenger
                side. He opened the door and leaned in to talk to Ngumezi. Ngumezi had a suspended
                license so the officer impounded the vehicle. He found a gun under the driver's seat
                during the inventory. Ngumezi was a convicted felon and was arrested. The Court
                excluded the gun as fruit of an unlawful search from when the officer leaned into the
                open door.
                </Text>
            </View>
            </ScrollView>
        </View>
    );
}