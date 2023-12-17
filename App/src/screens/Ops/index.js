import { TouchableOpacity, Text, View } from "react-native";

import styles from "./styles";

export default Ops = ({ navigation }) => {
  return (
    <>
      <View style={styles.content}>
      <Text style={styles.ops}>Ops!</Text>
      <Text style={styles.textContent}>
        Você não pode realizar esta ação{"\n"}
        sem possuir um cadastro.
      </Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("CadastroForm")}
      >
        <Text style={styles.btnText}>FAZER CADASTRO</Text>
      </TouchableOpacity>
      <Text style={styles.textContent}>Já possui cadastro?</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>FAZER LOGIN</Text>
      </TouchableOpacity>
    </View></>
  );
};
