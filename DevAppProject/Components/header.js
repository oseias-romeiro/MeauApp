import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {

    return (

        <View style = {styles.header}>
            <View style = {styles.row}>
            <Options_button />
            <Text style = {styles.text}>Login</Text>
            </View>
        </View>

    );

};

const Options_button = ({onPress}) => {

    return (

        <TouchableOpacity onPress = {onPress} style = {styles.button}>
            <Icon name = 'bars' size = {24} color = 'grey' />
        </TouchableOpacity> 

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
    },

    button: {
        marginLeft: 20,

    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }

});

export default Header;