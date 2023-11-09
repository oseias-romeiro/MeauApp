import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";



const Cadastro = ({ navigation }) => {
  return (
<<<<<<< HEAD
    <><Header text={" "} backgroundColor={"#cfe9e5"} topBarColor={"#88c9bf"}></Header><View style={styles.content}>
      <Text style={styles.ops}>Ops!</Text>
=======
    <View style={styles.content}>
         <Text style={styles.ops}>Ops!</Text>
>>>>>>> b73feee2bd4458c39e7d6ab3b3569b76c0e1dfe3
      <Text style={styles.textContent}>
        Você não pode realizar esta ação{"\n"}
        sem possuir um cadastro.
      </Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("CadastroPessoal")}
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

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    textAlign: "center",
  },
  ops: {
    fontSize: 60,
    fontStyle: "italic",
    paddingTop: 50,
    marginBottom: 30,
    color: "#88C9BF",
  },
  btnContainer: {
    backgroundColor: "#88C9BF",
    minWidth: 232,
    minHeight: 40,
  },
  btnText: {
    color: "#434343",
    textAlign: "center",
    paddingTop: 13,
    fontSize: 12,
  },
  textContent: {
    marginBottom: 10,
    marginTop: 40,
    color: "#BDBDBD",
    fontSize: 14,
  },
});

export default Cadastro;
