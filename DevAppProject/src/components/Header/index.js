import React from 'react';

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

const Header = ({navigation, text}) => {
    return (
        <>
            <View style={ styles.topBar }></View>
            <View style={ styles.menuBar }>
                <TouchableOpacity style={ styles.menuIcon } onPress={()=> navigation.navigate('Cadastro')}>
                    <Icon name='arrowleft' type='antdesign' color='#434343'/>
                </TouchableOpacity>
                <Text style={ styles.menuBarText }>{ text }</Text>
            </View>
        </>
      );
};

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#88C9BF',
        height: 24,
    },
    menuBar: {
        backgroundColor: '#CFE9E5',
        minHeight: 56,
        flexDirection: 'row',
        paddingTop: 16,
    },
    menuBarText: {
        color: '#434343',
        fontFamily: 'Roboto',
        fontSize: 20,
    },
    menuIcon: {
        marginRight: 16,
        marginLeft: 16,
    },
});

export default Header;
