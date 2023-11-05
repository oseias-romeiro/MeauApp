import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Header from "../components/Header";
import EntrarButton from "../components/CustomButton";
import EditarAnimalForm from "./EditarAnimal";

import config from "../config/index";
import { collection, getDoc,doc } from "firebase/firestore";

const Dashboard = ({ navigation }) => {
  const navigateToCadastroAnimal = () => {
    navigation.navigate("CadastroAnimal");
  };

  const navigateToVisualizacaoPerfil = () => {
    navigation.navigate("VisualizacaoPerfil");
  };

  const navigateToCadastroForm = () => {
    navigation.navigate("CadastroPessoal");
  };

  const navigateToEditarPerfil = () => {
    navigation.navigate("EditarPerfil");
  };

  const navigateToEditarAnimal = () => {
    getDoc(doc(collection(config.db, "animais"), "FqmCQ5gQeBoq1xTqaxaj")).then((animalData)=>{
      console.log("animalData:", animalData.data());
      navigation.navigate("EditarAnimal", { animalData: animalData.data() });
    });
  };

  return (
    <><Header text={"Dashboard do aplicativo"} backgroundColor={"#cfe9e5"} topBarColor={"#88c9bf"}> </Header><View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <EntrarButton title="Cadastrar Animal" onPress={navigateToCadastroAnimal} style={styles.button} />
      <EntrarButton title="Visualizar Perfil" onPress={navigateToVisualizacaoPerfil} style={styles.button} />
      <EntrarButton title="Cadastrar um Usuário" onPress={navigateToCadastroForm} style={styles.button} />
      <EntrarButton title="Editar Perfil" onPress={navigateToEditarPerfil} style={styles.button} />
      <EntrarButton title="Editar Animal" onPress={navigateToEditarAnimal} style={styles.button} />
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    paddingTop:"30px",
    marginTop: "30px",
    paddingBottom: "30px",
    marginBottom: "30px", // Adiciona espaçamento inferior de 10 unidades entre os botões
  },
});

export default Dashboard;
