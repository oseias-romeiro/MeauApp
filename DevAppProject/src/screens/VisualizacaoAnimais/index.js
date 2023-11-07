import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import config from "../../config";
import { ScrollView } from "react-native-web";
import Header from "../../components/Header";

const VisualizacaoAnimais = ({ navigation }) => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchAnimais = async () => {
      const animaisCollection = collection(config.db, "animais");
      const animaisSnapshot = await getDocs(animaisCollection);

      const animaisData = [];
      animaisSnapshot.forEach((doc) => {
        animaisData.push({ id: doc.id, ...doc.data() });
      });

      setAnimais(animaisData);
    };

    fetchAnimais();
  }, []);

  return (
    <>
      <Header
        text={"Todos os Animais"}
        backgroundColor={"#cfe9e5"}
        topBarColor={"#88c9bf"}
      >
        {" "}
      </Header>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 24, textAlign: "center" }}>
            Visualização de Animais
          </Text>
          <FlatList
            data={animais}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetalhesAnimal", { animalId: item.id });
                }}
              >
                <View
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 16,
                    margin: 8,
                  }}
                >
                  <Text>Nome: {item.nomePet}</Text>
                  <Text>Tipo: {item.tipo}</Text>
                  <Text>Porte: {item.porte}</Text>
                 
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default VisualizacaoAnimais;
