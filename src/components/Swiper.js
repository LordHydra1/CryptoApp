import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper'
import { _fetchCrypto } from '../api/fetchSomething'
import LinearGradient from 'react-native-linear-gradient';
import accounting from 'accounting'
import { arrowtop, arrowdown } from '../assets/icon/index'
import Images from '../components/Images'

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
        return (
            <LinearGradient colors={['#ffc3a0', '#FFAFBD']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 10 }}>
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
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 10, marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', textAlign: 'left'}}>
                        <Text style={{ marginLeft: 13, marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>
                            {item.CoinInfo.FullName == 'Ethereum Classic' ? 'Eth Classic' : item.CoinInfo.FullName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 0.2, marginTop: 25}}>
                            <Images
                                data={item.DISPLAY}
                            />
                        </View>
                                <View style={{ flexDirection: 'column', flex: 0.6 }}>
                                    <Text style={[styles.text, styles.negativeRate]}>
                                        {accounting.formatMoney(item.DISPLAY.USD.PRICE, "$", 2, ".", ",")}
                                    </Text>
                                </View>
                            <View style={{ flexDirection: 'column', flex: 0.2, marginTop: 6}}>
                                <View style={{ flexDirection: 'row'}}>
                                <Text
                                        style={[item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText]}>
                                        {(item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? item.DISPLAY.USD.CHANGEPCT24HOUR : '+' + item.DISPLAY.USD.CHANGEPCT24HOUR) + '%' + " "}
                                    </Text>
                                    <Image style={{ width: 12, height: 12, transform: [{ rotate: '180deg' }], marginTop: 35 }} source={arrowdown}>
                                    </Image>
                                </View>
                               
                             </View>
                    </View>
                </View>
            )

        }
        else {
            return (
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 10, marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', textAlign: 'left'}}>
                        <Text style={{ marginLeft: 13, marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>
                            {item.CoinInfo.FullName == 'Ethereum Classic' ? 'Eth Classic' : item.CoinInfo.FullName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 0.2, marginTop: 25}}>
                            <Images
                                data={item.DISPLAY}
                            />
                        </View>
                                <View style={{ flexDirection: 'column', flex: 0.6 }}>
                                    <Text style={[styles.text, styles.positiveRate]}>
                                        {accounting.formatMoney(item.DISPLAY.USD.PRICE, "$", 2, ".", ",")}
                                    </Text>
                                </View>
                            <View style={{ flexDirection: 'column', flex: 0.2, marginTop: 6}}>
                                <View style={{ flexDirection: 'row'}}>
                                <Text
                                        style={[item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText]}>
                                        {(item.DISPLAY.USD.CHANGEPCT24HOUR < 0 ? item.DISPLAY.USD.CHANGEPCT24HOUR : '+' + item.DISPLAY.USD.CHANGEPCT24HOUR) + '%' + " "}
                                    </Text>
                                    <Image style={{ width: 12, height: 12, marginTop: 30, right: 2}} source={arrowtop} >
                                    </Image>
                                </View>
                               
                             </View>
                    </View>
                </View>
            )
        }

    }
    render() {
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
        color: '#3D9400',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginTop: 20
    },
    redText: {
        color: "#FB0F03",
        marginTop: 30
    },
    greenText: {
        color: 'green',
        marginTop: 30
    },
    positiveRate: {
        color: '#3D9400',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center'
    },
    negativeRate: {
        color: '#A11B0A',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center'
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