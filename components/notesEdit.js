import React,{useState} from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground, TextInput} from 'react-native';
import { styles } from "./styles";
import { notes } from "./notesData";

export default function NotesEdit({navigation,route}){
    const [title, setTitle] = useState(route.params.title);
    const [desc, setDesc] = useState(route.params.desc);
    const date = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    const editNote=()=>{
        for(let i=0;i<notes.length;i++){
            if(notes[i].title === title){
                notes[i].desc = desc;
                break;
            }
            notes.push({title: title,desc: desc,date: `${date}-${month}-${year}`});
        }
    }
    return(
        <View style={[styles.container]}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
            
            <View style={{flex:6}}>
                <Text style={styles.lable}>Title</Text>
                <TextInput
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                    placeholder={"Write title"}
                    placeholderTextColor="gray" 
                    editable={false}
                    style={[styles.descText, {elevation: 5}]}
                />
                <Text style={styles.lable}>Description</Text>
                <TextInput
                    value={desc}
                    onChangeText={(desc) => setDesc(desc)}
                    placeholder={"Write Description here"}
                    placeholderTextColor="gray" 
                    multiline={true}
                    style={[styles.descText, { height: 170, elevation: 5 }]}
                />
            </View>
             <View style={[styles.setCenter,{flex:1}]}>
                <TouchableOpacity activeOpacity={0.4}
                    style={[styles.button,{backgroundColor: '#694fad'}]}
                    onPress={()=>{editNote(),navigation.pop(2)}}>
                    <Text style={{color: 'white',fontSize: 25}}>Save</Text>
                </TouchableOpacity>
             </View>
             <View style={{flex: 1}}/>

            
            </ImageBackground>
        </View>
    );
}