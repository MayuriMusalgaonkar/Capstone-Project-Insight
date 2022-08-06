import { NavigationContainer } from '@react-navigation/native';
import Login from '../components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArticleList from '../components/ArticleList';
import { createAppContainer } from 'react-navigation';

const screens ={
Login: {
    screen: Login
},
ArticleList: {
    screen: ArticleList
}
} 

const RouteStack = createNativeStackNavigator(screens);

export default createAppContainer(RouteStack);