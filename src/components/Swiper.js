import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper'
import { _fetchCrypto } from '../api/fetchSomething'
import LinearGradient from 'react-native-linear-gradient';
import accounting from 'accounting'
import { arrowtop, arrowdown } from '../assets/icon/index'
import stylesa from '../utils/styles'


export default class SwiperComponent extends Component {


    constructor(props) {
        super(props)
        this.props = props;
        this.state = {

        }
    }



    componentDidMount() {
    }

    render() {
        console.log('props', this.props.randomprop);
        return (
            <LinearGradient colors={['#ffffff', '#f6f6f6', '#ededed']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 10 }}>
                <Swiper style={styles.wrapper}
                    showsButtons={false}
                    randomprop={this.props.randomprop}
                    dotColor="rgb(189, 189, 189)"
                    activeDotColor="rgb(30, 60, 255)">
                    {this.props.randomprop.map((data, index) => {
                        return (
                            <ViewComponent
                                randomprop={[data]} />
                        )
                    })}
                </Swiper>
            </LinearGradient>
        )
    }
}

class ViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    renderItem = ({ item, index }) => {

        if (item.DISPLAY.USD.CHANGEPCT24HOUR < 0) {
            return (
                <View style={{ flex: 1, marginTop: 20, flexDirection: 'row' }}>
                    <View>
                        <Text>{item.CoinInfo.FullName}</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 40, height: 40, marginHorizontal: 15, }}
                            source={{ uri: 'https://www.cryptocompare.com' + item.DISPLAY.USD.IMAGEURL }}></Image>
                    </View>
                    <View>
                        <Text
                            style={styles.text}>
                            {accounting.formatMoney(item.DISPLAY.USD.PRICE, "$", 2, ".", ",")}
                        </Text>
                    </View>
                    <View>
                        <Text style={[item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText, styles.rateText]}>
                            {(item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? item.DISPLAY.USD.CHANGEPCT24HOUR : '+' + item.DISPLAY.USD.CHANGEPCT24HOUR) + '%'}
                        </Text>
                    </View>
                    <View>
                        <Image style={{ width: 20, height: 20, transform: [{ rotate: '180deg' }], marginTop: 10 }} source={arrowdown}>
                        </Image>
                    </View>
                </View>

            )

        }
        else {
            return (
                <View style={{ flex: 1, marginTop: 20, flexDirection: 'row'}}>
                       <View>
                        <Text>{item.CoinInfo.FullName}</Text>
                    </View>
                    <View >
                    <Image
                        style={{ width: 40, height: 40, marginHorizontal: 15, }}
                        source={{ uri: 'https://www.cryptocompare.com' + item.DISPLAY.USD.IMAGEURL }}>
                    </Image>
                    </View>
                   <View style={{justifyContent: 'center', alignItems: 'center'}}>
                   <Text style={styles.text}>
                        {accounting.formatMoney(item.DISPLAY.USD.PRICE, "$", 2, ".", ",")}
                    </Text>
                   </View>
                    <View >
                    <Text
                        style={[item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText, styles.rateText]}>
                        {(item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? item.DISPLAY.USD.CHANGEPCT24HOUR : '+' + item.DISPLAY.USD.CHANGEPCT24HOUR) + '%' + " "}
                    </Text>
                    </View>
                    <View>
                        <Image style={{ width: 20, height: 20, marginTop: 10 }} source={arrowtop} >
                        </Image>
                    </View>
                </View>
            )
        }

    }
    render() {
        console.log('ciaoioo', this.props.randomprop)

        return (

            <View style={styles.slide1}
                randomprop={this.props.randomprop}>
                <FlatList
                    data={this.props.randomprop}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        width: 190,
        textAlign: 'center'

    },
    redText: {
        color: "#FB0F03",
        marginLeft: 20,
        marginTop: 10
    },
    greenText: {
        color: 'green',
        marginLeft: 20,
        marginTop: 10
    }
})













/* <Swiper style={styles.wrapper} showsButtons={false}>
    <View style={styles.slide1}
    randomprop={this.props.randomprop.slice(0,1)}>
        <FlatList
        data = {this.props.randomprop.slice(0,1)}
        renderItem={({index,item}) => <Text style={styles.text}>{item.USD.PRICE}</Text>}
       />
    </View>
    <View style={styles.slide2}
    randomprop={this.props.randomprop.slice(1,2)}>
        <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
    </View>
</Swiper> */