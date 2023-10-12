import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";

import auth from '../config/index';

const CadastroForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        alert(error);
      })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Login"
        style={styles.input}
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 12,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#88C9BF',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#434343',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default CadastroForm;
