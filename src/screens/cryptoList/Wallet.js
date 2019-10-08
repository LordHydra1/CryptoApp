import React from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { _fetchAll, _dynamicFetch } from '../../api/fetchSomething';
import styles from '../../utils/styles';
import Swiper from '../../components/Swiper';
import accounting from 'accounting';
import Charts from '../../components/Charts';
import Images from '../../components/Images';
import LinearGradient from 'react-native-linear-gradient';


export default class PrefCrypto extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLoading: true,
      fullCrypto: [{}],
    }
  }
  componentDidMount() {
    // this.timer = setInterval(()=> this.pippo(), 2000)
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
    console.log('Selected Item :', item);
  }

  renderItem = ({ item, index }) => {
    return (
        <TouchableOpacity
          onPress={() => this.actionOnRow(item)}>
          <LinearGradient colors={['#E0EAFC','#CFDEF3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 10 }}>
          <View style={styles.cardView}>
            <View style={{ flexDirection: 'column', flex: 0.21 }}>
              <View>
                <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '600', marginTop: 5 }}>{item.CoinInfo.FullName == 'Ethereum Classic' ? 'Eth Classic' : item.CoinInfo.FullName}</Text>
                <Images
                  data={item.DISPLAY} />
              </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 0.39, marginLeft: 30 }}>
              <View style={{ marginTop: 25 }}>
                <Charts
                  raw={item.RAW}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 0.4 }}>
              <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: 1.3, textAlign: 'right', marginTop: 5, marginRight: 8 }}>
                  {accounting.formatMoney(item.DISPLAY.USD.PRICE, "$", 2, ".", ",")}</Text>
                <Text style={[item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText, styles.rateText]}>
                  {(item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? item.DISPLAY.USD.CHANGEPCT24HOUR : '+' + item.DISPLAY.USD.CHANGEPCT24HOUR) + '%'}
                </Text>
              </View>
            </View>
          </View>
          </LinearGradient>
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