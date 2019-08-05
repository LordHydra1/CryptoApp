
import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'
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
        <View style={{flex: 1, flexDirection:'row', marginTop: 35, marginLeft: 16}}>
          <View style={{flexDirection:'column'}}>
          <Image style={{width:30, height: 30}} source={{uri:'https://www.cryptocompare.com'+data.DISPLAY.USD.IMAGEURL}}></Image>
          </View>
          <View style={{marginLeft: 35}}>
            <Text style={{fontSize: 25, letterSpacing:0}}>{data.DISPLAY.USD.PRICE}</Text>
          </View>
        </View>
      </View>
    )
  }
}

