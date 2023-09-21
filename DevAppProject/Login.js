import React, { useState } from 'react';
import { View, TouchableOpacity,Text, TextInput, Button, StyleSheet } from 'react-native';
import AppButton from './Components/customButton';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        if (username == 'usuario' && password == 'senha'){

            alert('Login bem-sucedido!');
        } else {
            alert('Login falhou.');
        }

    };

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = 'Nome de Usuário'
                onChangeText = {text => setUsername(text)}
                value = {username} 
            />

            <TextInput
            
                style = {styles.input}
                placeholder = 'Senha'
                onChangeText = {text => setPassword(text)}
                value = {password}
                secureTextEntry
            
            />

            <AppButton title='Entrar' onPress={handleLogin} />
        </View>

        

    );s

};



const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 50,
    
    },
    input: {
      width: 300,
      height: 40,
      borderBottomWidth: 1,
      marginBottom: 20,
      padding: 10,
      
    },


  });

  export default LoginScreen;