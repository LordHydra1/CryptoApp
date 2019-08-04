import React, { Component } from 'react'
import { View } from 'react-native'
import { Path } from 'react-native-svg'
import { LineChart } from 'react-native-chart-kit'
import * as shape from 'd3-shape'


const Line = ({ line }) => (
    <Path
        key={'line'}
        d={line}
        stroke={'rgb(134, 65, 244)'}
        fill={'none'}
    />);

class Charts extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }

    render() {

        const data = [this.props.randomprop]
        console.log('chartssssssss', data)
        return (
            <View
                randomprop={this.props.randomprop}>

                <LineChart
                    style={{ height: 200 }}
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={{
                      backgroundColor: '#e26a00',
                      backgroundGradientFrom: '#fb8c00',
                      backgroundGradientTo: '#ffa726',
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      }
                    }}

                >
                </LineChart>

            </View>

        )
    }
}





export default Charts