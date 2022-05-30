import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {Image} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import List from './components/flatlist';
import GoToJail from './components/goToJail';
import WtpuTools from './components/wtpuTools';
import TheWeUni from './components/theWeUni';
import AboutWTPU from './components/aboutWTPU';
import Amendments from './components/amendments';
import Probable from './components/probable';
import StateID from './components/stateID';
import GunLaws from './components/gunLaws';
import TrafficStop from './components/trafficStop';
import Public from './components/public';
import Poster7 from './components/poster7';
import CopsGo from './components/copsGo';
import Camera from './components/camera';
import GoogleMap from './components/googleMap';
import Notifi from './components/notification';
import Record from './components/record';
import Seizure from './components/seizure';
import Consent from './components/consent';
import PlainView from './components/plainView';
import MajorCases from './components/majorCases';
import TrafficStops from './components/trafficStops';
import PassengerDef from './components/passengerDef';
import RoadBlock from './components/roadBlock';
import SearchArrest from './components/searchArrest';
import GlikV from './components/glikv';
import SmithV from './components/smithV';
import CaseThrone from './components/caseThrone';
import DepriRights from './components/depriRights';
import Notes from './components/notes';
import NotesAdd from './components/notesAdd';
import NotesShow from './components/notesShow';
import NotesEdit from './components/notesEdit';
import VideoRecorder from './components/videoRecorder';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function StackChannelScreens(){
  return(
    <Stack4.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#d02860'
       },
       headerTitleStyle: { fontSize: 25},
      headerTitleAlign: 'center'
      }
      }
      initialRouteName='Youtube Channel'>
      <Stack4.Screen name="Youtube Channel" component={TheWeUni} />
    </Stack4.Navigator>
  );
}
function StackToolsScreens(){
  return(
    <Stack3.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#694fad'
       },
       headerTitleStyle: { fontSize: 25},
      headerTitleAlign: 'center'
      }
      }
      initialRouteName='WTPU Tools'>
      <Stack3.Screen name="WTPU Tools" component={WtpuTools} />
      <Stack3.Screen name="Camera" component={Camera} />
      <Stack3.Screen name="Video Recording" component={VideoRecorder} />
      <Stack3.Screen name="Map" component={GoogleMap} />
      <Stack3.Screen name="Notes" component={Notes} />
      <Stack3.Screen name="Add Note" component={NotesAdd} />
      <Stack3.Screen name="Note" component={NotesShow} />
      <Stack3.Screen name="Edit Note" component={NotesEdit} />
    </Stack3.Navigator>
  );
}
function StackAboutScreens(){
  return(
    <Stack2.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#009387'
       },
       headerTitleStyle: { fontSize: 25},
      headerTitleAlign: 'center'
      }
      }
      initialRouteName='About WTPU'>
      <Stack2.Screen name="About WTPU" component={AboutWTPU} />
    </Stack2.Navigator>
  );
}
function StackHomeScreens(){
    return(
      <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#2EBEF0'
       },
       headerTitleStyle: { fontSize: 25},
      headerTitleAlign: 'center'
      }
      }
      initialRouteName='Home1'>
      <Stack.Screen name="Home1" options={{title:'Home'}} component={List} />
      <Stack.Screen name="Going To Jail" component={GoToJail} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Often Used Amendments" component={Amendments} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Portable Cause v.RAS" component={Probable} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="State Identify Statutes" component={StateID} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="State Gun Laws" component={GunLaws} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Traffic Stop Bascs" component={TrafficStop} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Public Property" component={Public} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Website" component={Poster7} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Most Abuses Laws" component={CopsGo} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Notifications" component={Notifi} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Rights To Record" component={Record} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Search/Seizure" component={Seizure} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Consent" component={Consent} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Plain View" component={PlainView} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Major Cases" component={MajorCases} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Traffic Stops" component={TrafficStops} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Passenger Deffense" component={PassengerDef} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Road Blocks" component={RoadBlock} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Search/Arrest" component={SearchArrest} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Gilk v. Cunniffe" component={GlikV} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Smith v. Cummings" component={SmithV} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Case Thrown Out" component={CaseThrone} 
          options={({ route }) => ({ title: route.params.name })}/>
      <Stack.Screen name="Depriving Of Rights" component={DepriRights} 
          options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
    );
}
export default function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={StackHomeScreens}
        options={{
          tabBarLabel: '',
          tabBarColor: '#2EBEF0',
          tabBarIcon: ({ color }) => (
            <Image source={require('./images/icon-apps-5.jpg')} 
              style={{height: 35,width: 35, borderRadius: 75}}/>
            // <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={StackAboutScreens}
        options={{
          tabBarLabel: '',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            // <Icon name="information-circle" color={color} size={26} />
            <Image source={require('./images/wetheunilogo.png')} 
              style={{height: 40,width: 40, borderRadius: 75}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={StackToolsScreens}
        options={{
          tabBarLabel: '',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Image source={require('./images/CanonCam.jpeg')} 
              style={{height: 35,width: 35, borderRadius: 75}}/>
            // <Icon name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Channel"
        component={StackChannelScreens}
        options={{
          tabBarLabel: '',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Image source={require('./images/youtubelogo.jpeg')} 
              style={{height: 35,width: 35, borderRadius: 75}}/>
            // <Icon name="logo-youtube" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>

    </NavigationContainer>
  );
}