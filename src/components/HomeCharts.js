import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
// // import { LineChart } from 'react-native-chart-kit'
import * as shape from 'd3-shape'
import { LineChart, Grid} from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop} from 'react-native-svg'


class HomeCharts extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentWillMount = async () => {
        const responseJson = await _dynamicFetch()
        this.setState({
            isLoading: false,
            data: responseJson.Data.Data
        }, function () {})


        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
              this.props._dynamicFetch();
            });
    }
    
    componentWillUnmount() {
        this.willFocusSubscription.remove();
      }
     _dynamicFetch = () => {
      console.log('this.props.navigation.state.params.Clicked', this.props.navigation.state.params.Clicked.CoinInfo.Name)
      const data = this.props.navigation.state.params.Clicked;
      return fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${data.CoinInfo.Name}&tsym=USD&limit=10`)
        .then((response) => response.json(console.log('dynamicccccccccccccccccccccc', typeof(data.CoinInfo.Name))))
        .catch((error) => { console.error(error) })
    }

    render() {
        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
                </LinearGradient>
            </Defs>
        )


        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }


        if (this.state.data) {

            moneys = this.state.data.map((money) => money.low);
            return (
                // this.props.raw &&
                // this.props.raw.map((item, index) => {


                <View>

                    <LineChart
                        style={{ height: 60, marginHorizontal: 15 }}
                        data={moneys}
                        contentInset={{ top: 10, bottom: 10 }} 
                        curve={shape.curveNatural}
                        svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                        }}
                    >
                       <Gradient/>
                    </LineChart>

                </View>

            )
        }




    }
}
export default HomeCharts