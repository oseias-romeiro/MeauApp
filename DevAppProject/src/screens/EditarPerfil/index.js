import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, collection, updateDoc, getDoc, getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';

import config from '../../config/index';
import Header from "../../components/Header/index";
import Container from "../../components/Container";
import styles from "../CadastroPessoal/styles";
import { useAuth } from "../../config/auth";

const EditarPerfil = ({ navigation }) => {

  const { user, login } = useAuth();

  const [nome_completo, setNomeCompleto] = useState(user.nome_completo);
  const [idade, setIdade] = useState(user.idade);
  const email = user.email;
  const [estado, setEstado] = useState(user.estado);
  const [cidade, setCidade] = useState(user.cidade);
  const [endereco, setEndereco] = useState(user.endereco);
  const [telefone, setTelefone] = useState(user.telefone);
  const [nome_perfil, setNomePerfil] = useState(user.nome_perfil);
  const [senha, setSenha] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleEdit = async () => {
    updateDoc(doc(collection(config.db, "users"), user.docId), {
      nome_completo: nome_completo,
      idade: idade,
      estado: estado,
      cidade: cidade,
      endereco: endereco,
      telefone: telefone,
      nome_perfil: nome_perfil
    })
      .then(async (data) => {
        if (image != null) {
          fetch(image)
          .then(async (response) => { response.blob().then(async (blob) => {
            console.log('imagem:', blob);
            uploadBytesResumable(ref(getStorage(), `profilePhotos/${email}`), blob)
            .then((snapshot) => {
              login(email, senha).then((res) =>{
                if (res) navigation.goBack()
              });
            })
            })
          })
        }else {
          login(email, senha).then((res) =>{
            if (res) navigation.goBack()
          });
        }
      })
  };

  return (
    <Container>
      <Header navigation={navigation} text="Editar Perfil" />
      <ScrollView>
      <View style={styles.content}>
        <Text style={styles.sectionText}>INFORMAÇÕES PESSOAIS</Text>
        <TextInput
          placeholder="Nome completo"
          style={styles.input}
          value={nome_completo}
          onChangeText={(text) => setNomeCompleto(text)}
        />
        <TextInput
          placeholder="Idade"
          inputMode="numeric"
          style={styles.input}
          value={idade}
          onChangeText={(text) => setIdade(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          editable={false}
          selectTextOnFocus={false}
          /*onChangeText={(text) => setEmail(text)}*/
        />
        <TextInput
          placeholder="Estado"
          style={styles.input}
          value={estado}
          onChangeText={(text) => setEstado(text)} />
        <TextInput
          placeholder="Cidade"
          style={styles.input}
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          placeholder="Endereço"
          style={styles.input}
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />
        <TextInput
          placeholder="Telefone"
          inputMode="numeric"
          style={styles.input}
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />
        <Text style={styles.sectionText}>INFORMAÇÕES DE PERFIL</Text>
        <TextInput
          placeholder="Nome de usuário"
          style={styles.input}
          value={nome_perfil}
          onChangeText={(text) => setNomePerfil(text)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Text style={styles.sectionText}>FOTO DE PERFIL</Text>
        <Pressable style={styles.btnImage} onPress={pickImage}>
          <Text style={styles.btnImageText}>mudar foto</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>EDITAR PERFIL</Text>
        </Pressable>
      </View>

      </ScrollView>
    </Container>
  );
};

export default EditarPerfil;
