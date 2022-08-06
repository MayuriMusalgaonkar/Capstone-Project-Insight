import { StatusBar } from 'expo-status-bar';
import Login from './components/Login';
import React from "react";
import ArticleList from './components/ArticleList';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ArticleList" component={ArticleList} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default App;
