import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import {_fetchAll} from '../api/fetchSomething'
import { FlatList } from 'react-native-gesture-handler';

export default class Color extends Component {

    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            isLoading: true,
            data: null,
            colors: ['orange','black','purple']
        }
    }

    componentDidMount(){
        _fetchAll().then((responseJson) => {
            this.setState({
              isLoading: false,
              data: responseJson.Data
            }, function () {})
          })
    }

    render() {
          if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        
    if(this.state.data){
    CoinName = this.state.data.map((text) => text.CoinInfo)
    names = CoinName.map((name) => name.Name)
    if(names[0] === 'BTC'){
        return (
            <View>
                <Text style={{color:this.state.colors[0]}}>{names[0]}</Text>
            </View>
        )
    } 
    }
    return(<View><Text>ciao</Text></View>)
    
    }
}
