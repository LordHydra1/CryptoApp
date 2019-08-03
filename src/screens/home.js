import React from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { _getMovies, _fetchImages, _fetchCrypto } from '../api/fetchSomething'
import styles from '../utils/styles'
const urlimg = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR?6000c9531ddf80c3bd724df7d7fe6e560fea9fc9b36a833adc3806adb1e261bf';
import Swiper from '../components/Swiper'
import AreaChart from '../components/Charts'
import accounting from 'accounting'


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isLoading: true,
      crypto: [],
      
    }
  }
  componentDidMount() {
    _fetchCrypto().then((responseJson) => {
      this.setState({
        isLoading: false,
        crypto: Object.values(responseJson.DISPLAY)
      }, function () {})
    })
  }


  renderItem = ({ item, index }) => {
    console.log(item)
    return (
   
      <TouchableOpacity>
        <View style={styles.cardView}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Image  style={{ width: 30, height: 30, borderRadius: 55, marginLeft: 20 }} source={{ uri: 'https://www.cryptocompare.com' + item.USD.IMAGEURL }}></Image>
          </View>
          <View style={styles.insideCardView}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, letterSpacing: 1.3 }}>
              {accounting.formatMoney(item.USD.PRICE, "$", 2, ".", ",")}
              </Text>
            <Text style={{ fontWeight: '300', fontSize: 15 }}>
              {item.USD.LASTVOLUME}
              </Text>
          </View>
          <View style={{flex:1}}>
            {/* <AreaChart
            randomprop={this.state.crypto}/> */}
          </View>
          <Text style={[item.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText,  styles.rateText ]}>
            {(item.USD.CHANGEPCT24HOUR < 0 ? item.USD.CHANGEPCT24HOUR:'+'+item.USD.CHANGEPCT24HOUR) + '%'}
            </Text>
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
        <View style={{flex:1}}>
         {/* <Swiper
          randomprop={this.state.crypto}
         /> */}
          </View>
        </View>
        <FlatList
          style={styles.FlatList}
          data={this.state.crypto}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

