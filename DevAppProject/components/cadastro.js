import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Cadastro = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.ops}>Ops!</Text>
      <Text style={styles.textContent}>
        Você não pode realizar esta ação{"\n"}
        sem possuir um cadastro.
      </Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>FAZER CADASTRO</Text>
      </TouchableOpacity>
      <Text style={styles.textContent}>Já possui cadastro?</Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>FAZER LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    textAlign: 'center',
  },
  ops: {
    fontSize: 60,
    fontStyle: 'italic',
    paddingTop: 50,
    marginBottom: 30,
    color: '#88C9BF',
  },
  btnContainer: {
    backgroundColor: '#88C9BF',
    minWidth: 232,
    minHeight: 40,
  },
  btnText: {
    color: '#434343',
    textAlign: 'center',
    paddingTop: 13,
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  textContent: {
    marginBottom: 10,
    marginTop: 40,
    color: '#BDBDBD',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

export default Cadastro;
