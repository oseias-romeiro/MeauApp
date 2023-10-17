import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";

const EditarPerfil = ({ navigation }) => {

  const [nome, setNome] = useState("Marília Martins de Souza");
  const [idade, setIdade] = useState("27 anos");
  const [email, setEmail] = useState("marilia_martins@gmail.com");
  const [localização, setLocalização] = useState(
    "Sobradinho - Distrito Federal"
  );
  const [endereco, setEndereco] = useState("Rua 203, conjunto B, casa 37");
  const [telefone, setTelefone] = useState("(61) 98274-2947");
  const [nomeUsuario, setNomeUsuario] = useState("mari_martins");
  const [historico, setHistorico] = useState("Adotou 1 gato");

  const handleSalvar = () => {
    // TODO: INTEGRAÇÃO COM BACKEND / BANCO DE DADOS
    // REST API / ETC
    // VOLTANDO PARA A TELA DE PERFIL
    navigation.goBack();
  };

  return (
    <>
    <Header></Header>
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <TextInput
        placeholder="Nome Completo"
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)} />
      <TextInput
        placeholder="Idade"
        style={styles.input}
        value={idade}
        onChangeText={(text) => setIdade(text)} />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder="Localização"
        style={styles.input}
        value={localização}
        onChangeText={(text) => setLocalização(text)} />
      <TextInput
        placeholder="Endereço"
        style={styles.input}
        value={endereco}
        onChangeText={(text) => setEndereco(text)} />
      <TextInput
        placeholder="Telefone"
        style={styles.input}
        value={telefone}
        onChangeText={(text) => setTelefone(text)} />
      <TextInput
        placeholder="Nome de usuário"
        style={styles.input}
        value={nomeUsuario}
        onChangeText={(text) => setNomeUsuario(text)} />
      <TextInput
        placeholder="Historico"
        style={styles.input}
        value={historico}
        onChangeText={(text) => setHistorico(text)} />
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#88C9BF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#434343",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditarPerfil;
