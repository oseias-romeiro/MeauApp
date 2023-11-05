import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { useState } from "react";
import { addDoc, collection, getDoc,doc } from "firebase/firestore";
import { Alert } from "react-native";

import Header from "../../components/Header";
import config from "../../config/index";
import styles from "./style";

const EditarAnimalForm = (props) => {
  const animalData = props.route.params.animalData;

  const [nomePet, setNomePet] = useState(animalData.nomePet);
  const [tipo, setTipo] = useState(animalData.tipo);
  const [porte, setPorte] = useState(animalData.porte);
  const [idade, setIdade] = useState(animalData.idade);
  const [raca, setRaca] = useState(animalData.raca);
  const [peso, setPeso] = useState(animalData.peso);
  const [descricao, setDescricao] = useState(animalData.descricao);
  const [sexo, setSexo] = useState(animalData.sexo);
  const [adocao, setAdocao] = useState(animalData.adocao);
  const [vacinado, setVacinado] = useState(animalData.vacinado);
  

  const handleEdit = async () => {
    // modelar o banco animal
    const animalRef = doc(collection(config.db, "animais"), animalData.docId);
    const animalData = await getDoc(animalRef);
    if (animalData.exists()) {
      await addDoc(collection(config.db, "animais"), {
        nomePet: nomePet,
        tipo: tipo,
        porte: porte,
        idade: idade,
        raca: raca,
        peso: peso,
        descricao: descricao,
        sexo: sexo,
        adocao: adocao,
        vacinado: vacinado,
      });
      Alert.alert("Sucesso!", "Animal editado com sucesso!");
    } else {
      Alert.alert("Erro!", "Erro ao editar animal!");
    }
  };

  return (
    <>
      <Header text={"Editar Animal"} backgroundColor={"#fee29b"} topBarColor={"#ffd358"} />
      <View style={styles.container}>
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
          onPress={handleEdit}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default EditarAnimalForm;
