import React,{useState} from "react";
import {View, Alert, Text,ScrollView, ImageBackground, TextInput} from 'react-native';
import { styles } from "./styles";
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import {notes} from './notesData';

export default function NotesShow({navigation,route}){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    let flag = false;
    const deleteNote=()=>{
        for(let i=0;i<notes.length;i++){
            if(notes[i].title === route.params.title && flag === false){
                flag = true;
                continue;
            }
            else if(flag === true){
                notes[i-1] = notes[i]
            }
        }
        if(flag == true) notes.pop();
    }
    return(
        
        <View style={[styles.container,{}]}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
            
            <View style={{flex: 6,backgroundColor: '#E1DBF1'}}>
            <ScrollView>
                <View style={[styles.setCenter,{flex:1}]}>
                    <Text style={[{fontSize: 25,color: 'black'}]}>{route.params.title}</Text>
                </View>
                <View style={{flex:12,margin: 10,alignItems: 'center'}}>
                    <Text style={[styles.fontTheme,{textAlign: 'center',color: 'black'}]}>
                    {route.params.desc}
                    </Text>
                </View>
            </ScrollView>
            </View>
                    
            
            <View style={[styles.setCenter,{flex:1,flexDirection: 'row',
                paddingBottom: 15}]}>
                <View style={[styles.setCenter,{flex: 1}]}/>
                <View style={[styles.setCenter,{flex: 1}]}>
                    <TouchableOpacity activeOpacity={0.3}>
                    <Icon
                        reverse
                        name='edit'
                        type='material'
                        color='#694fad'
                        onPress={() => navigation.navigate('Edit Note',{title: route.params.title, desc: route.params.desc})}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.setCenter,{flex: 1}]}>
                <TouchableOpacity activeOpacity={0.3}>
                    <Icon
                        reverse
                        name='delete'
                        type='material'
                        color='#694fad'
                        onPress={() => {Alert.alert("Note Deleting","Are you sure?",[
                            {text: 'cancel',onPress: () => console.log('cancel pressesd!')},
                            {text: 'Yes',onPress: () => {deleteNote(),navigation.goBack()}}
                            ])}}/>
                        {/* deleteNote(),navigation.goBack() */}
                </TouchableOpacity>
                </View>
                <View style={[styles.setCenter,{flex: 1}]}/>
             </View>
             <View style={{flex: 1}}/>
            </ImageBackground>
        </View>
    );
}