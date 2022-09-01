import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';

import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel : false,headerShown :false,tabBarActiveTintColor:"#1974D2",tabBarInactiveTintColor:'#1974D2'}}>
      <Tab.Screen name="Home2" component={HomeScreen} options={{
        tabBarIcon:({color,size})=> (
            <IonIcons name="home" color={color} size={size} />
        )
      }}/>
      {/* <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon:({color,size})=> (
            <IonIcons name="person-outline" color={color} size={size} />
        )
      }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;