import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { back } from '../assets/icon/index'
import { withNavigation } from 'react-navigation';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity
                        style={{width: 40 }}
                        onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ width: 30, height: 30 }} source={back}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 25}}>
                <View style={{ flexDirection: 'column', marginRight:5, }}>
                <Text style={{ fontSize: 14, fontWeight:'bold'}} >{this.props.coinname}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginLeft:5, marginTop: 2}}> 
                <Text style={{opacity: 0.2, color: 'red', fontSize: 13}} >{this.props.coinshort}</Text>
                </View>
                </View>
            </View>   
     )
    }
}
export default withNavigation(Header)
{/* 
                    <View style={{}}>
                    <Text style={{borderWidth:1}} >{this.props.coinname} + {this.props.coinshort}</Text>
                    </View> */}