
import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import accounting from 'accounting';
import HomeCharts from '../../components/HomeCharts'
import Button from '../../components/Button'
import styles from '../../utils/styles'
import Color from '../../common/Color'
import Images from '../../components/Images'

export default class home extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      isLoading: true,
      prova: [{}]
    }
  }

  componentDidMount = async () => {
    const responseJson = await _dynamicFetch()
    this.setState({
      isLoading: false,
      prova: responseJson.Data.Data
    }, function () { })
  }


  //    _dynamicFetch = () => {
  //   let moneta = ['BTC','ETH','LTC']
  //   return fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${moneta[0]}&tsym=USD&limit=10`)
  //     .then((response) => response.json())
  //     .catch((error) => { console.error(error) })
  // }
  



  render() {
    // if(this.props.navigation.state.params.Clicked.id == this.state.prova. ){

    // }else{
    //   return false
    // }
    _dynamicFetch = () => {
      console.log('this.props.navigation.state.params.Clicked', this.props.navigation.state.params.Clicked.CoinInfo.Name)
      const data = this.props.navigation.state.params.Clicked;
      return fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${data.CoinInfo.Name}&tsym=USD&limit=10`)
        .then((response) => response.json(console.log('dynamicccccccccccccccccccccc', this.props.navigation.state.params.Clicked)))
        .catch((error) => { console.error(error) })
    }

    const data = this.props.navigation.state.params.Clicked;
    moneys = this.state.prova.map((money) => money.high);

  

    return (
      <View>
        <Header
          coinname={data.CoinInfo.FullName}
          coinshort={data.CoinInfo.Name}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ flex: 0.2, flexDirection: 'column', marginTop: 10 }}>
            <Images
            data={data.DISPLAY}></Images>
          </View>
          <View style={{ flex: 0.5, flexDirection: 'column' }}>
            <Text style={{ fontSize: 37 }}>
              {accounting.formatMoney(data.DISPLAY.USD.PRICE, "$", 2, " ", ".")}
            </Text>
            <Text style={[data.RAW.USD.CHANGE24HOUR < 0 ? styles.redText : styles.greenText,{fontSize:12, marginLeft:8}]}>
              {accounting.formatMoney(data.DISPLAY.USD.CHANGE24HOUR, "$ ", 2, "", ".") + " Last 24 Hour"}
            </Text>
          </View>
        </View>
        <View
          style={{flexDirection:'row-reverse', marginTop: 15, marginBottom:20}}>
          <TouchableOpacity>
            <View style={{
              borderRadius: 20, borderColor: '#DCDCDC',
              borderWidth: 1, width: 100, height: 40, backgroundColor: 'white',
              justifyContent: 'center', alignItems: 'center',
              marginRight: 40
            }}>
              <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Sell</Text>
            </View>
          </TouchableOpacity>
          <Button />

        </View>
       <View>
          <HomeCharts
            prova = {this.props.navigation.state.params.Clicked}
            moneys={moneys} />
        </View>

        <Color/>


      </View>
    )
  }
}

