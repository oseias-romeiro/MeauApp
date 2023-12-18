import React from "react";
import {TouchableOpacity,Text,ScrollView,SafeAreaView,View,Image,} from "react-native";


import { useAuth } from "../../config/auth";
import styles from "./styles";


export default Profile = ({ navigation }) => {
  const { user, photoURL } = useAuth();
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <View>
              <Image source={{ uri: photoURL }} style={styles.profilePhoto} />
            </View>
            <Text style={styles.texto2}>{user.nome_perfil}</Text>
            <View style={styles.campo}>
              <Text style={styles.title}>{"NOME COMPLETO"}</Text>
              <Text style={styles.textContent}>{user.nome_completo}</Text>
            </View>
            <View style={styles.campo}>
              <Text style={styles.title}>{"IDADE"}</Text>
              <Text style={styles.textContent}>{user.idade}</Text>
            </View>
            <View>
              <View style={styles.campo}>
                <Text style={styles.title}>{"EMAIL"}</Text>
                <Text style={styles.textContent}>{user.email}</Text>
              </View>
              <View style={styles.campo}>
                <Text style={styles.title}>{"LOCALIZAÇÃO"}</Text>
                <Text style={styles.textContent}>{user.estado}</Text>
              </View>
              <View style={styles.campo}>
                <Text style={styles.title}>{"ENDEREÇO"}</Text>
                <Text style={styles.textContent}>{user.endereco}</Text>
              </View>
              <View style={styles.campo}>
                <Text style={styles.title}>{"TELEFONE"}</Text>
                <Text style={styles.textContent}>{user.telefone}</Text>
              </View>
              <View style={styles.campo}>
                <Text style={styles.title}>{"NOME DE USUÁRIO"}</Text>
                <Text style={styles.textContent}>{user.nome_perfil}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("EditarPerfil")}
              >
                <Text style={styles.btnText}>{"EDITAR PERFIL"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
