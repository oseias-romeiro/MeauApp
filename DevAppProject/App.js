import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./src/components/Header/index";
import Cadastro from './src/screens/Cadastro.js'
import LoginScreen from "./src/screens/Login.js";
import VisualizacaoPerfil from "./src/screens/VisualizacaoPerfil.js";
import CadastroForm from "./src/screens/CadastroForm.js";
import EditarPerfil from "./src/screens/EditarPerfil.js";

const Stack = createNativeStackNavigator();

const CadastroTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} text="Cadastro" />
      <Cadastro navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const LoginTela = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} text="Login" />
      <LoginScreen navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cadastro" component={CadastroTela} />
        <Stack.Screen name="CadastroForm" component={CadastroForm} />
        <Stack.Screen name="Login" component={LoginTela} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="VisualizacaoPerfil" component={VisualizacaoPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    minHeight: 360,
    // alignItems: 'center',
    // flexDirection: 'column',
  },
});
