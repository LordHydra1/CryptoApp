import {createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import Score from '../screens/score'
import Wallet from '../screens/Wallet'

const MainNavigator = createBottomTabNavigator({
     Wallet,
     Score,
     Home
},
{
    initialRouteName: 'Wallet'
});

const App = createAppContainer(MainNavigator);

export default App;