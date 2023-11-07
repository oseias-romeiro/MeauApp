import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import config from "../../config";
import Header from "../../components/Header";

const DetalhesAnimal = ({ route }) => {
  const { animalId } = route.params;
  const [animal, setAnimal] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      const animalRef = doc(config.db, "animais", animalId);
      const animalDoc = await getDoc(animalRef);

      if (animalDoc.exists()) {
        const animalData = animalDoc.data();
        setAnimal(animalData);
        const imageRef = ref(config.storage, `animaisPhoto/${animalId}`);
        const imageURL = await getDownloadURL(imageRef);
        setImageUrl(imageURL);
      } else {
        Alert.alert("Animal não encontrado!");
        console.error("Animal não encontrado");
      }
    };

    fetchAnimalDetails();
  }, [animalId]);

  return (
    <>
      <Header
        text={"Detalhes do Animal"}
        backgroundColor={"#cfe9e5"}
        topBarColor={"#88c9bf"}
      />

      <ScrollView>
        {animal && (
          <View style={{ alignItems: "center" }}>
            {imageUrl && (
              <Image source={{ uri: imageUrl }} style={{ width: 360, height: 184 }} />
            )}
            <Text style={{ fontSize: 20, color: "#434343", marginTop: 16 }}>
              {animal.nomePet}
            </Text>

            <Text style={{ fontSize: 16, color: "#434343" }}>
              {animal.localizacao}
            </Text>

            <Text style={{ fontSize: 16, color: "#434343" }}>
              {animal.horario}
            </Text>

            {/* Outras informações do animal */}
            <Text style={{ fontSize: 14, color: "#757575", marginTop: 16 }}>
              SEXO
            </Text>
            <Text style={{ fontSize: 16, color: "#434343" }}>
              {animal.sexo}
            </Text>

            <Text style={{ fontSize: 14, color: "#757575" }}>PORTE</Text>
            <Text style={{ fontSize: 16, color: "#434343" }}>
              {animal.porte}
            </Text>

            <Text style={{ fontSize: 14, color: "#757575" }}>IDADE</Text>
            <Text style={{ fontSize: 16, color: "#434343" }}>
              {animal.idade}
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default DetalhesAnimal;
