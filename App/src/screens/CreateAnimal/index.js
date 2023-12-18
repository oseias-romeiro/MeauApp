import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  ScrollView,
  Image
} from "react-native";

import { useState } from "react";
import config from "../../config/index";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { getAuth } from "firebase/auth";
import { Alert } from "react-native";

import styles from "./styles";

export default CreateAnimal = ({ navigation }) => {
  const [nomePet, setNomePet] = useState("");
  const [tipo, setTipo] = useState("");
  const [porte, setPorte] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [peso, setPeso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sexo, setSexo] = useState("");
  const [adocao, setAdocao] = useState("");
  const [vacinado, setVacinado] = useState("");
  const [imagemPerfilAnimal, setImagemPerfilAnimal] = useState(null);

  const auth = getAuth();

  const selecionarImagemPerfilAnimal = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagemPerfilAnimal(result.assets[0].uri);
    }
  };

  const handleCadastro = async () => {
    const user = auth.currentUser;
    console.log(user);

    const animalData = {
      nomePet: nomePet,
      tipo: tipo,
      idade: idade,
      raca: raca,
      adocao: adocao,
      vacinado: vacinado,
      peso: peso,
      descricao: descricao,
      sexo: sexo,
      porte: porte,
      dono: user.uid,
    };
    try {
      const docRef = await addDoc(
        collection(config.db, "animais"),
        animalData
      );
      if (imagemPerfilAnimal) {
        const response = await fetch(imagemPerfilAnimal);
        const blob = await response.blob();
        await uploadBytesResumable(
          ref(getStorage(), `animaisPhoto/${docRef.id}`),
          blob
        );
      }
      Alert.alert("Animal cadastrado com sucesso!");
      navigation.navigate("Perfil");
    } catch (e) {
      console.error("Erro ao cadastrar animal:", e);
      Alert.alert("Falha ao cadastrar o animal!");
      navigation.navigate("Perfil");
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            style={styles.btnImage}
            onPress={selecionarImagemPerfilAnimal}
          >
            {imagemPerfilAnimal ? 
              <Image source={{ uri: imagemPerfilAnimal }} style={{ width: 128, height: 128 }} />
            :
              <Text style={styles.btnImageText}>
                Adicionar foto de perfil do Animal
              </Text>
            }
            
          </Pressable>

          <TextInput
            placeholder="Nome do Pet"
            style={styles.input}
            value={nomePet}
            onChangeText={(text) => setNomePet(text)}
          />

          <View style={styles.buttonContainer}>
            <Text>Tipo</Text>
            <Button
              title="Gato"
              onPress={() => setTipo("Gato")}
              color={tipo === "Gato" ? "#ffd358" : "gray"}
            />
            <Button
              title="Cachorro"
              onPress={() => setTipo("Cachorro")}
              color={tipo === "Cachorro" ? "#ffd358" : "gray"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Text>Porte</Text>
            <Button
              title="Pequeno"
              onPress={() => setPorte("Pequeno")}
              color={porte === "Pequeno" ? "#ffd358" : "gray"}
            />
            <Button
              title="Médio"
              onPress={() => setPorte("Médio")}
              color={porte === "Médio" ? "#ffd358" : "gray"}
            />
            <Button
              title="Grande"
              onPress={() => setPorte("Grande")}
              color={porte === "Grande" ? "#ffd358" : "gray"}
            />
          </View>

          <TextInput
            placeholder="Idade do Pet"
            style={styles.input}
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />
          <TextInput
            placeholder="Raça do Pet"
            style={styles.input}
            value={raca}
            onChangeText={(text) => setRaca(text)}
          />
          <TextInput
            placeholder="Peso do Pet"
            style={styles.input}
            value={peso}
            onChangeText={(text) => setPeso(text)}
          />

          <View style={styles.buttonContainer}>
            <Text>Adoção</Text>
            <Button
              title="Sim"
              onPress={() => setAdocao("Sim")}
              color={adocao === "Sim" ? "#ffd358" : "gray"}
            />
            <Button
              title="Não"
              onPress={() => setAdocao("Não")}
              color={adocao === "Não" ? "#ffd358" : "gray"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Text>Sexo</Text>
            <Button
              title="Macho"
              onPress={() => setSexo("Macho")}
              color={sexo === "Macho" ? "#ffd358" : "gray"}
            />
            <Button
              title="Fêmea"
              onPress={() => setSexo("Fêmea")}
              color={sexo === "Fêmea" ? "#ffd358" : "gray"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Text>Vacinado</Text>
            <Button
              title="Sim"
              onPress={() => setVacinado("Sim")}
              color={vacinado === "Sim" ? "#ffd358" : "gray"}
            />
            <Button
              title="Não"
              onPress={() => setVacinado("Não")}
              color={vacinado === "Não" ? "#ffd358" : "gray"}
            />
          </View>

          <TextInput
            placeholder="Descrição"
            style={styles.input}
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#ffd358" }]}
            onPress={handleCadastro}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
