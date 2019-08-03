import React from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { _fetchAll } from '../api/fetchSomething';
import styles from '../utils/styles'
import Swiper from '../components/Swiper'
import accounting from 'accounting'


export default class PrefCrypto extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLoading: true,
      fullCrypto: [],
      
    }
  }
  componentDidMount() {
    _fetchAll().then((responseJson) => {
      this.setState({
        isLoading: false,
        fullCrypto: Object.values(responseJson.Data)
      }, function () {})
    })
  }


  renderItem = ({ items, index }) => {
    console.log('pippo',this.state.fullCrypto)
    return (
      items.map((item, index) => {
      <TouchableOpacity>
        <View style={styles.cardView}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Image  style={{ width: 30, height: 30, borderRadius: 55, marginLeft: 20 }} source={{ uri: 'https://www.cryptocompare.com' + item.DYSPLAY.USD.IMAGEURL }}></Image>
          </View>
          <View style={styles.insideCardView}>
            <Text  style={{ fontWeight: 'bold', fontSize: 15, letterSpacing: 1.3 }}>{accounting.formatMoney(item.USD.PRICE, "$", 2, ".", ",")}</Text>
            <Text   style={{ fontWeight: '300', fontSize: 15 }}>{item.USD.LASTVOLUME}</Text>
          </View>
          <View style={{flex:1}}>
            {/* <AreaChart
            randomprop={this.state.crypto}/> */}
          </View>
          <Text  style={[item.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText,  styles.rateText ]}>{(item.USD.CHANGEPCT24HOUR < 0 ? item.USD.CHANGEPCT24HOUR:'+'+item.USD.CHANGEPCT24HOUR) + '%'}</Text>
        </View>
      </TouchableOpacity>
      })
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
        <View style={{flex:1}}>
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