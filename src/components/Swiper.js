import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Swiper from 'react-native-swiper'
import { _fetchCrypto } from '../api/fetchSomething'
import LinearGradient from 'react-native-linear-gradient';
import accounting from 'accounting'
import {toparrow} from '../assets/icon/index'



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

        //   return this.props.randomprop.map((index) => {
        return (
            <LinearGradient colors={['#5c258d', '#4389a2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
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
        //}
        //)
    }
}

class ViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    renderItem = ({ item, index }) => {

        if (item.USD.CHANGEPCT24HOUR < 0) {
            return (
                <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', flexWrap: "wrap" }}>
                    <Image style={{ width: 40, height: 40, marginHorizontal: 15, }} source={{ uri: 'https://www.cryptocompare.com' + item.USD.IMAGEURL }}></Image>
                    <Text style={styles.text}>
                        {accounting.formatMoney(item.USD.PRICE, "$", 2, ".", ",")}
                    </Text>
                    <Text style={[item.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText, styles.rateText]}>
                        {(item.USD.CHANGEPCT24HOUR < 0 ? item.USD.CHANGEPCT24HOUR : '+' + item.USD.CHANGEPCT24HOUR) + '%'}
                    </Text>
                    <View>
                    <Image style={{ width: 40, height: 40,borderWidth: 1 }} source={toparrow}>
                    </Image>
                </View>
                </View>
           
            )

        }
        else {
            return (
                <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', flexWrap: "wrap" }}>
                    <Image style={{ width: 40, height: 40, marginHorizontal: 15, }} source={{ uri: 'https://www.cryptocompare.com' + item.USD.IMAGEURL }}></Image>
                    <Text style={styles.text}>
                        {accounting.formatMoney(item.USD.PRICE, "$", 2, ".", ",")}
                    </Text>
                    <Text style={[item.USD.CHANGEPCT24HOUR < 0 ? styles.redText : styles.greenText, styles.rateText]}>
                        {(item.USD.CHANGEPCT24HOUR < 0 ? item.USD.CHANGEPCT24HOUR : '+' + item.USD.CHANGEPCT24HOUR) + '%'}
                    </Text>
                    <View>
                    <Image style={{ width: 40, height: 40, borderWidth: 1 }} source={toparrow}>
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
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 0.7,
        letterSpacing: 2

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