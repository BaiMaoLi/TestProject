import React,{useEffect, useState} from "react";
import {View, Text, TouchableOpacity, ScrollView,RefreshControl,FlatList, ImageBackground} from 'react-native';
import { styles } from "./styles";
import {notes} from "./notesData";
var RNFS = require('react-native-fs');
const Item = ({title,text,date}) =>(
    <View style={[{flex: 1}]}>
            <Text style={{fontSize: 22, fontWeight: 'bold',margin: 8,marginBottom: 2,color: 'black'}}>{title}</Text>
            <Text style={{marginHorizontal: 8,color: 'black'}}>{text.substr(0,50)+'...'}</Text>        
            <Text style={{textAlign: 'right',margin: 8,marginTop: 0,color: 'black'}}>{date}</Text>
    </View>
);
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
export default function Notes({navigation,route}){
    // const [notes, setNotes] = useState([]);
    // var note1 = '';
    // var _path = RNFS.DocumentDirectoryPath +'/notes.txt';
    // RNFS.writeFile(_path, 'Voilation of Cops\n08-15-2022\nFrom the streets of Minneapolis to the favelas of Rio de Janeiro, unlawful use of force by police can end in death, injury, and devastation. As we’ve seen too many times, in the USA and elsewhere, sometimes police kill or seriously injure people during arrests fuelled by racism. In countless other cases, police are quick to use force in response to protests or demonstrations. Throughout 2019 and 2020, Hong Kong police have repeatedly deployed weapons like tear gas and rubber bullets in an unlawful way against protesters. All too often, officers who kill or injure people after using force unlawfully are not brought to justice. That’s why it’s so important to know what your rights are, and to know what police are, and aren’t, allowed to do. We need to make sure that police stop using force against the law, and that those who kill unlawfully are brought to account – no more excuses.', 'utf8')
    // .then((success) => {
    //     console.log('FILE WRITTEN!');
    // })
    // .catch((err) => {
    //     console.log(err.message);
    // });

    
    // const readNotes = async ()=>{
    //     try {
    //         const path =_path;
    //         const contents = await RNFS.readFile(path, "utf8");
    //         return "" + contents;
    //       } catch (e) {
    //         alert("" + e);
    //         console.log("" + e);
    //       }
    // }
    // const splitNotes = () =>{
    //     const allNotes = ""+readNotes();
    //     console.log(allNotes);
    //     note1 = allNotes.split("_");
    //     for(let i=0;i<note1.length;i++){
    //         var dum = note1[i].split("\n");
    //         var el = '';
    //         for(let j=2;j<dum.length;j++){
    //             el.concat("\n");
    //             el.concat(dum[i]);
    //         }
    //         notes.push({id:i,title:dum[0],desc:el,date:dum[1]});
    //     }
    // }
    const [refreshing, setRefreshing] = React.useState(false);
    const [fresh, setFresh] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [notes]);
    useEffect(()=>{
        console.log(notes);
        // (notes === undefined) ? notes = [] : notes = notes
        setFresh(()=>{(fresh)?'false':'true';})
    },[notes,fresh])
    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.7} 
          onPress={()=>navigation.navigate('Note',{title: item.title, desc: item.desc})}
          style={[styles.container,{margin: 10, elevation: 5, backgroundColor: '#E1DBF1',
            borderRadius: 15}]}>
            <Item title={item.title} text={item.desc} date={item.date} />
        </TouchableOpacity>
    );
    return(
        <View style={[styles.container]}>
            <ImageBackground source={require('../images/splashScreen.png')}
                style={styles.back}>
             
            {/* {splitNotes()} */}
            <View style={{flex:6}}>
                <FlatList
                    data={notes}
                    renderItem={renderItem}
                    // contentContainerStyle={styles.scrollView}
                    refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                    }
                    // keyExtractor={item => item.id}
                />
            </View>
            <View style={[styles.setCenter,{flex:1}]}>
                <TouchableOpacity activeOpacity={0.4}
                    style={{padding:3,paddingHorizontal: 16,backgroundColor: '#694fad',borderRadius: 75}}
                    onPress={()=>navigation.navigate('Add Note')}>
                    <Text style={{color: 'white',fontSize: 35}}>+</Text>
                </TouchableOpacity>
             </View>
             <View style={{flex: 1}}/>
            </ImageBackground>
        </View>
    );
}