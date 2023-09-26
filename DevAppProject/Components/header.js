import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

    return (

        <View style = {styles.header}>
            <Text style = {styles.text}>Login</Text>
        </View>

    );

};

const styles = StyleSheet.create( {

    header: {
        justifyContent: 'center',
        alignItems: '',
        alignSelf:'start',
        backgroundColor: '#CFE9E5',
        width: '100%',
        height: 60,
        position: 'relative',
    
    },

    text: {
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 20,
    }

});

export default Header;