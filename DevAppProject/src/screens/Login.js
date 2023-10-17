import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import EntrarButton from '../components/CustomButton/index';
import AppButton from '../components/SocialMediaButton/index';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import config from '../config/index';

const {auth} = config;
const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword] =
    useSignInWithEmailAndPassword(auth);

    const handleLogin = async () => {
        try {
            const authentication = await signInWithEmailAndPassword(email, password);
            if (authentication) {
                alert('Sucesso!')
                navigation.navigate('VisualizacaoPerfil');
            }
            else {
                console.error('Usuário / Senha incorretos!');
            }
        } catch (error) {
            console.error('Erro ao fazer o login', error);
        }
        
    };

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = 'Email do Usuario'
                onChangeText = {text => setEmail(text)}
                value = {email} 
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