import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import InputModal from './InputModal'



class Button extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            modalVisible: false
        }
    }

    getInitialState () {
        return {
            modalVisible: true
        }
    }
    showModal() {
        this.setState(
        {
            modalVisible: true
        })
    }

   

    render() {
        return (
            <TouchableOpacity
                onPress={() => {this.getInitialState()}}>
                <View style={{
                    borderRadius: 20, borderColor: 'orange', borderWidth: 1,
                    width: 100, height: 40, backgroundColor: '#F2682D', justifyContent: 'center', alignItems: 'center',
                    marginRight: 10
                }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Buy</Text>
                    </View>
                    <InputModal
                        modalVisible={this.state.modalVisible} 
                    />
                </View>
            </TouchableOpacity>
        )
    }

}
export default Button;
