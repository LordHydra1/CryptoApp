import {createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/home'
import Score from '../screens/score'
import PrefCrypto from '../screens/PrefCrypto'

const MainNavigator = createBottomTabNavigator({
     Home,
     Score,
     PrefCrypto
},
{
    initialRouteName: 'Home'
});

const App = createAppContainer(MainNavigator);

export default App;