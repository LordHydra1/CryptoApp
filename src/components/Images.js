import React, { Component } from 'react'
import {View, Image, ActivityIndicator } from 'react-native'


const Bitcoin = 'btc/200';
const Litecoin = 'ltc/200';
const Eth = 'eth/200'
const Xrp = 'xrp/200'
const Eos = 'eos/200'
const BitcoinCash = 'bch/200'
const Zec = 'zec/200'
const Tusd = 'tusd/200'
const Trx = 'trx/200'
const etc_new = 'etc/200'

const Url = 'https://cryptoicons.org/api/icon/'

export class Images extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const { data } = this.props
        if (data.USD.IMAGEURL == '/media/19633/btc.png') {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Bitcoin}}></Image>
                </View>
            )

        }

        if (data.USD.IMAGEURL == '/media/35309662/ltc.png') {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Litecoin}}></Image>
                </View>
            )

        }
        if (data.USD.IMAGEURL == "/media/20646/eth_logo.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Eth}}></Image>
                </View>
            )

        }
        if (data.USD.IMAGEURL == "/media/1383652/eos_1.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Eos}}></Image>
                </View>
            )

        }
        if (data.USD.IMAGEURL == "/media/35650680/bch.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+BitcoinCash}}></Image>
                </View>
            )
        }   if (data.USD.IMAGEURL == "/media/351360/zec.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Zec}}></Image>
                </View>
            )
        }   if (data.USD.IMAGEURL == "/media/35650578/tusd.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Tusd}}></Image>
                </View>
            )
        }   if (data.USD.IMAGEURL == "/media/34477805/trx.jpg") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Trx}}></Image>
                </View>
            )
        }   if (data.USD.IMAGEURL == "/media/33752295/etc_new.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+etc_new}}></Image>
                </View>
            )
        }
        if (data.USD.IMAGEURL == "/media/34477776/xrp.png") {
            return (
                <View>
                    <Image style={{ width: 30, height: 30, marginLeft: 11 }} source={{uri:Url+Xrp}}></Image>
                </View>
            )
        }
        else {
            return (
                <ActivityIndicator>

                </ActivityIndicator>
            )
        }
    }
}

export default Images
