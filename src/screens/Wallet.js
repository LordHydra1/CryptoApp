import React from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import { _fetchAll } from '../api/fetchSomething';
import styles from '../utils/styles'
import Swiper from '../components/Swiper'
import accounting from 'accounting'
import arrowtop from '../assets/icon/index'
import LineChart from '../components/Charts'
import Charts from '../components/Charts';


export default class PrefCrypto extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLoading: true,
      fullCrypto: [{}],
      refreshing: false
    }
  }
  componentDidMount() {
    _fetchAll().then((responseJson) => {
      this.setState({
        isLoading: false,
        fullCrypto: responseJson.Data
      }, function () { })
    })
  }
  actionOnRow(item) {
    this.props.navigation.navigate('Home', {
      Clicked: item
    })
        console.log('Selected Item :',item);
 }

  renderItem = ({ item, index }) => {
    return (

      <TouchableOpacity 
      onPress={ () => this.actionOnRow(item)}>
        <View style={styles.cardView}>
          <View style={{flexDirection: 'column', flex: 0.3}}>
            <View>
              <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '600', marginTop: 5 }}>{item.CoinInfo.FullName}</Text>
              <Image style={{ width: 30, height: 30, borderRadius: 55, marginLeft: 11 }} source={{ uri: 'https://www.cryptocompare.com' + item.DISPLAY.USD.IMAGEURL }}></Image>
            </View>
          </View>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{flex:1, marginTop:25}}>
              <Charts
              raw={item.RAW}
            />
              </View>  
              <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: 1.3, textAlign: 'right', marginTop: 5, marginRight: 8 }}>{accounting.formatMoney(item.DISPLAY.USD.PRICE, "$", 2, ".", ",")}</Text>
            </View>
            <Text style={{ textAlign: 'right' }}>{item.DISPLAY.USD.HIGHDAY}</Text>
            <Text style={{ textAlign: 'right' }}>{item.DISPLAY.USD.LOWDAY}</Text>
          </View>
        </View>
      </TouchableOpacity>

    )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.HomeView}>
          <View style={{ flex: 1 }}>
            <Swiper
              randomprop={this.state.fullCrypto}
            />
          </View>
        </View>
        <FlatList
          style={styles.FlatList}
          data={this.state.fullCrypto}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}







/*------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------ */

// class RenderImages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       crypto: [],
//     }
//   }


//   componentDidMount() {
//     this._fetchData();
//   }

//   _fetchData() {
//     const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,EOS,BCH,XRP&tsyms=USD'
//     return fetch(url)
//       .then(response => response.json())
//       .then(parsedJson => this.setState({
//         isLoading: false,
//         crypto: Object.values(parsedJson.DISPLAY)
//       }, function () { console.log('FETCH DATA COMPONENT DID MOUNT', this.state.crypto) })
//       )
//       .catch(error => console.log(error))
//   }


//   render() {
//     console.log('dentro il Render', this.state.crypto)
//        return this.state.crypto.map((data) => {
//           return <View>
//                 <Image
//                 key={data.id}
//                 style={{ width: 40, height: 40 }}
//                 source={{ uri: 'https://www.cryptocompare.com' + data.USD.IMAGEURL }}
//                 >
//               </Image>
//               <Text>{data.USD.PRICE}</Text>
//          </View>
//        }


//         )
//       }
// }