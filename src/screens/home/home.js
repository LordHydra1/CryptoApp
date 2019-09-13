
import React, { Component } from 'react'
import { Text, View, Image,TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import accounting from 'accounting';
import { _dynamicFetch } from '../../api/fetchSomething';
import HomeCharts from '../../components/HomeCharts'
import Grafico from '../../components/GraficoHome'

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
   const responseJson =  await _dynamicFetch()   
    this.setState({
      isLoading: false,
      prova: responseJson.Data.Data
    }, function () { })
  }





  render() {
    const data = this.props.navigation.state.params.Clicked;
    // if(this.props.navigation.state.params.Clicked.id == this.state.prova. ){

    // }else{
    //   return false
    // }
    moneys = this.state.prova.map((money) => money.high);

    return (
      <View>
        <Header
          coinname={data.CoinInfo.FullName}
          coinshort={data.CoinInfo.Name}
        />
        <View style={{ flexDirection: 'row', marginTop: 20}}>
          <View style={{ flex: 0.2, flexDirection:'column', marginTop:10 }}>
            <Image style={{ width: 30, height: 30, borderRadius: 55, marginLeft: 20 }} source={{ uri: 'https://www.cryptocompare.com' + data.DISPLAY.USD.IMAGEURL }}></Image>
          </View>
          <View style={{ flex: 0.5 , flexDirection:'column'}}>
            <Text style={{ fontSize: 37}}>{accounting.formatMoney(data.DISPLAY.USD.PRICE, "$", 2, ".", ",")}</Text>
          </View>

        </View>
         <View
          style={{ flex: 1, flexDirection: 'row-reverse', color:'white',marginBottom: 40}}>
          <TouchableOpacity>
          <View style={{borderRadius:20,borderColor:'orange', borderWidth:1, width:120, height:40, backgroundColor: '#F2682D',justifyContent:'center',alignItems:'center'}}>
          <View>
            <Text style={{color:'white', fontSize:14, fontWeight:'bold'}}>Buy</Text>
            </View> 
          </View>
          </TouchableOpacity>
          <View style={{borderRadius:20,borderColor:'grey', borderWidth:1, width:120, height:40, backgroundColor: 'white'}}>
            <Text>Sell</Text>
          </View>
        </View> 
        <View>
        <HomeCharts
         moneys={moneys}/>
          </View>

               

      </View>
    )
  }
}

