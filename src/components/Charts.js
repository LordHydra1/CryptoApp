import React, { Component } from 'react'
import { View } from 'react-native'
// import { Path } from 'react-native-svg'
// // import { LineChart } from 'react-native-chart-kit'
import * as shape from 'd3-shape'
import { LineChart, Grid } from 'react-native-svg-charts'
import moment from 'moment'
import { Defs, LinearGradient, Stop } from 'react-native-svg'

class Charts extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
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
        console.log('CIAO CHARTS 1', this.props.raw)
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const detail = [this.props.raw.USD.OPENDAY, this.props.raw.USD.LOWDAY, this.props.raw.USD.HIGHDAY, this.props.raw.USD.PRICE, ]
        return (
            // this.props.raw &&
            // this.props.raw.map((item, index) => {

            <View>

                <LineChart
                    style={{ height: 150 }}
                    data={detail}
                    contentInset={{ top: 50, bottom: 50 }}
                    curve={shape.curveNatural}
                    svg={{
                        strokeWidth: 2,
                        stroke: 'url(#gradient)',
                    }}
                >
                    <Grid />
                    <Gradient />
                </LineChart>

            </View>


        )
    }
}
export default Charts