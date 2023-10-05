import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import EntrarButton from '../components/CustomButton/index';
import AppButton from '../components/SocialMediaButton/index';

const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        if (username == 'usuario' && password == 'senha'){
            navigation.navigate('VisualizacaoPerfil');
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

            <EntrarButton title='Entrar' onPress={handleLogin} />

            <AppButton title = 'Entrar com Facebook' url = 'https://pt-br.facebook.com/' tipo = 'facebook'/>

            <AppButton title = 'Entrar com Google' url = 'https://www.google.com/' tipo = 'google' />

        </View>


        

    );

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