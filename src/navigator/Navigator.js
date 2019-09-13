import {createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/home/home'
import Score from '../screens/score'
import Wallet from '../screens/cryptoList/Wallet'

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