import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
// // import { LineChart } from 'react-native-chart-kit'
import * as shape from 'd3-shape'
import { LineChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop} from 'react-native-svg'
import { _dynamicFetch } from '../api/fetchSomething'


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
        }, function () { console.log(responseJson.Data.Data, this.state.data) })
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
            console.log(moneys)
            return (
                // this.props.raw &&
                // this.props.raw.map((item, index) => {


                <View>

                    <LineChart
                        style={{ height: 60 }}
                        data={moneys}
                        contentInset={{ top: 50, bottom: 50 }} 
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