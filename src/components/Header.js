import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import {back} from '../assets/icon/index'
import { withNavigation } from 'react-navigation';

 class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        
        return (
            <View>
                <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={{width: 30, height: 30, opacity: 0.3}} source={back}>
                    </Image>
                    </TouchableOpacity>
                    <Text>{this.props.coinname}</Text>
                    <Text>{this.props.coinshort}</Text>
                </View>
            </View>
        )
    }
}
export default withNavigation(Header)
