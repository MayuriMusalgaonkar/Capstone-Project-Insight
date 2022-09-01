import Login from '../components/Login';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home';
import { createAppContainer } from 'react-navigation';
import SplashScreen from '../components/SplashScreen';
import OnBoardingList from '../components/OnBoardingList';
import ContentDetails from '../components/ContentDetails';
import TabNavigator from './TabNavigator';

const screens ={
// SplashScreen:{
//     screen: SplashScreen
// },
Login: {
    screen: Login
},
OnBoardingList:{
    screen: OnBoardingList
},
TabNavigator: {
    screen: TabNavigator
},
ContentDetails: {
    screen: ContentDetails
}

} 

const RouteStack = createStackNavigator(screens);

export default createAppContainer(RouteStack);