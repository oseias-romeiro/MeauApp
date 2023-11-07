import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import config from "../../config";
import Header from "../../components/Header";
import AnimalCard from "../../components/AnimalCard";

const VisualizacaoAnimais = ({ navigation }) => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchAnimais = async () => {
      const animaisCollection = collection(config.db, "animais");
      const q = query(animaisCollection, where("adocao", "==", "Sim"));
      const animaisSnapshot = await getDocs(q);

      const animaisData = [];
      for (const doc of animaisSnapshot.docs) {
        const data = doc.data();
        const imageUrl = await getAnimalImageUrl(doc.id);
        animaisData.push({ id: doc.id, ...data, imageUrl });
      }

      setAnimais(animaisData);
    };

    fetchAnimais();
  }, []);

  const getAnimalImageUrl = async (animalId) => {
    const imageRef = ref(config.storage, `animaisPhoto/${animalId}`);
    try {
      return await getDownloadURL(imageRef);
    } catch (error) {
      console.error("Erro ao obter a URL da imagem:", error);
      return null;
    }
  };

  return (
    <>
      <Header
        text={"Animais disponíveis para doação"}
        backgroundColor={"#cfe9e5"}
        topBarColor={"#88c9bf"}
      >
        {" "}
      </Header>
      <ScrollView>
        <View>
          <FlatList
            data={animais}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetalhesAnimal", { animalId: item.id });
                }}
              >
                <AnimalCard animal={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};



export default VisualizacaoAnimais;
