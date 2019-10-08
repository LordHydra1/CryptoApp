import { React, StyleSheet, Dimensions, Platform } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1
    },

    HomeView: {
        flex: 0.5,
        backgroundColor: '#eef2f3'
    },
    FlatList: {
        flex: 0.2,
        backgroundColor: '#eef2f3'
    },
    greenText: {
        color: '#3D9400',
    },
    redText: {
        color: "#FB0F03"
    },
    rateText:
    {
        fontWeight: '300',
        fontSize: 15,
        marginLeft: 'auto',
        textAlign: 'right',
        marginTop: 10, 
        marginRight: 10
    },
    cardView: {
        flex:1,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6,
        height: 100,
        flexDirection: 'row',
        // backgroundColor: '#FAFAFA',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.18,
        // shadowRadius: 1.00,

    },
  
})