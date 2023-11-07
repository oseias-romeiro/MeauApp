import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { collection, getDocs, where, query } from "firebase/firestore";
import config from "../../config";
import { getAuth, useAuth } from "firebase/auth";
import { ScrollView } from "react-native-web";
import Header from "../../components/Header";

const VisualizacaoAnimaisUsuario = ({ navigation }) => {
  const [animais, setAnimais] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchMeusAnimais = async () => {
      if (!user) {
        return;
      }

      const animaisCollection = collection(config.db, "animais");
      const animaisQuery = query(
        animaisCollection,
        where("dono", "==", user.uid)
      );

      const animaisSnapshot = await getDocs(animaisQuery);

      const animaisData = [];
      animaisSnapshot.forEach((doc) => {
        animaisData.push({ id: doc.id, ...doc.data() });
      });

      setAnimais(animaisData);
    };

    fetchMeusAnimais();
  }, [user]);
  return (
    <>
      <Header
        text={"Meus Animais"}
        backgroundColor={"#cfe9e5"}
        topBarColor={"#88c9bf"}
      >
        {" "}
      </Header>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 24, textAlign: "center" }}>
            Meus Animais
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

export default VisualizacaoAnimaisUsuario;
