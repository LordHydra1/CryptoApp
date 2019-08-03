import { React, StyleSheet, Dimensions, Platform } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1
    },

    HomeView: {
        flex: 0.5,
        backgroundColor: '#E7E7E8'
    },
    FlatList: {
        flex: 0.2,
        backgroundColor: '#E7E7E8'
    },
    greenText: {
        color: "#2FA09E",
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
        borderWidth: 1,
        flex:1,
        borderColor: 'white',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6,
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
  
})