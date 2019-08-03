// import React, { Component } from 'react'
// import { View } from 'react-native'
// import { Path } from 'react-native-svg'
// import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
// import * as shape from 'd3-shape'
// const Line = ({ line }) => (
//     <Path
//         key={'line'}
//         d={line}
//         stroke={'rgb(134, 65, 244)'}
//         fill={'none'}
//     />);

// class Charts extends Component {
//     constructor(props) {
//         super(props)
//         this.props = props;
//         this.state = {

//         }
//     }
    
//     render() {


//         return this.props.randomprop.map((value, index) => {
//             console.log('APppppppppppppppppp', (value.USD.PRICE), (value.USD.LASTVOLUME))
//             return (

//                 <View
//                     randomprop={this.props.randomprop}>
//                     {/* <YAxis
//                         randomprop={this.props.randomprop}
//                         data={value.USD.PRICE}
//                         yAccessor={({ item }) => item}
//                         style={{ marginBottom: 10 }}
//                         formatLabel={value => value + " "}
//                     /> */}
//                     <LineChart
//                         style={{ height: 200 }}
//                         data={[value.USD]}
//                         contentInset={{ top: 30, bottom: 30 }}
//                         curve={shape.curveNatural}
//                         xAccessor={({ index }) => value.USD.PRICE}
//                         yAccessor={({ item }) => value.USD.PRICE}
//                         yMin={0}
//                         yMax={value.USD.PRICE[value.USD.PRICE.length - 1]}
//                         xMin={value.USD.PRICE[0]}
//                         xMax={value.USD.PRICE[value.USD.PRICE.length - 1]}
//                         randomprop={this.props.randomprop}
//                     >
//                         <Grid />
//                         <Line />
//                     </LineChart>
//                     {/* <XAxis
//                         randomprop={this.props.randomprop}
//                         style={{ marginHorizontal: -10, height: 100 }}
//                         data={value.USD.PRICE}
//                         xAccessor={({ item }) => item.xValue}
//                         contentInset={{ left: 10, right: 10 }}
//                     /> */}
//                 </View>

//             )
//         })
//     }


// }


// export default Charts