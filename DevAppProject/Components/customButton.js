import React from "react";
import { TouchableOpacity,Text, StyleSheet } from 'react-native';

const AppButton = ({onPress,title}) =>(
    <TouchableOpacity onPress = {onPress} style = {styles.button}>
        <Text style = {styles.button}>{title}</Text>
    </TouchableOpacity>

)

const styles = StyleSheet.create ({

    
    button: {
        backgroundColor: '#88C9BF',
        width: 232,
        height: 40,
        textAlign: 'center',
        alignSelf:'center',
        paddingTop:10,
        
    },

})

export default AppButton
