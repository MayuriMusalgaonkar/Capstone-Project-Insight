import Login from '../components/Login';
import { createStackNavigator } from 'react-navigation-stack';
import ArticleList from '../components/ArticleList';
import { createAppContainer } from 'react-navigation';
import SplashScreen from '../components/SplashScreen';

const screens ={
// SplashScreen:{
//     screen: SplashScreen
// },
Login: {
    screen: Login
},
ArticleList: {
    screen: ArticleList
}
} 

const RouteStack = createStackNavigator(screens);

export default createAppContainer(RouteStack);