import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
// // import { LineChart } from 'react-native-chart-kit'
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import { _dynamicFetch } from '../api/fetchSomething'


class Grafico extends Component {
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
 



        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }


        if (this.state.data) {
            const HorizontalLine = (({ y }) => (
                <Line
                    key={ 'zero-axis' }
                    x1={ '0%' }
                    x2={ '100%' }
                    y1={ y(50) }
                    y2={ y(50) }
                    stroke={ 'grey' }
                    strokeDasharray={ [ 4, 8 ] }
                    strokeWidth={ 2 }
                />
            ))
    
            const Tooltip = ({ x, y }) => (
                <G
                    x={ x(5) - (75 / 2) }
                    key={ 'tooltip' }
                    onPress={ () => console.log('tooltip clicked') }
                >
                    <G y={ 50 }>
                        <Rect
                            height={ 40 }
                            width={ 75 }
                            stroke={ 'grey' }
                            fill={ 'white' }
                            ry={ 10 }
                            rx={ 10 }
                        />
                        <Text
                            x={ 75 / 2 }
                            dy={20}
                            alignmentBaseline={'middle'}
                            textAnchor={ 'middle' }
                            stroke={ 'rgb(134, 65, 244)' }
                        >
                            { `${moneys[5]}ºC` }
                        </Text>
                    </G>
                    <G x={ 75 / 2 }>
                        <Line
                            y1={ 50 + 40 }
                            y2={ y(moneys[ 5 ]) }
                            stroke={ 'grey' }
                            strokeWidth={ 2 }
                        />
                        <Circle
                            cy={ y(moneys[ 5 ]) }
                            r={ 6 }
                            stroke={ 'rgb(134, 65, 244)' }
                            strokeWidth={2}
                            fill={ 'white' }
                        />
                    </G>
                </G>
            )

            moneys = this.state.data.map((money) => money.high);
            console.log('ciaoooooooo', moneys)
            return (
                // this.props.raw &&
                // this.props.raw.map((item, index) => {


                <View>
                <LineChart
                style={ { height: 200 } }
                data={ moneys }
                svg={{
                    stroke: 'rgb(134, 65, 244)',
                    strokeWidth: 2,
                }}
                contentInset={ { top: 20, bottom: 20 } }
                curve={ shape.curveLinear }
                extras={ [ HorizontalLine, Tooltip ] }
            />

                </View>

            )
        }




    }
}
export default Grafico