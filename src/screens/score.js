import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Swiper from '../components/Swiper'

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <Swiper/>
        </View>
       <Text>Add friends here!</Text> 
       <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});