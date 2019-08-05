
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header';

export default class home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
 
  
  render() {
    console.log(this.props.navigation.state.params.Clicked)
    
    const data= this.props.navigation.state.params.Clicked;
    return (
      <View>
        <Header
          coinname={data.CoinInfo.FullName}
          coinshort={data.CoinInfo.Name}          
        /> 
        <Text>{data.RAW.USD.PRICE}</Text>
      </View>
    )
  }
}

