import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./src/components/Header/index";
import Cadastro from './src/screens/Cadastro.js'
import LoginScreen from "./src/screens/Login.js";
import VisualizacaoPerfil from "./src/screens/VisualizacaoPerfil.js";
import CadastroPessoal from "./src/screens/CadastroPessoal";
import EditarPerfil from "./src/screens/EditarPerfil";
import Dashboard from "./src/screens/Dashboard";
import CadastroAnimal from "./src/screens/CadastroAnimal";
import { AuthProvider } from "./src/config/auth.js"
import TelaSucessoAnimal from "./src/screens/TelaSucessoAnimal/index";
import EditarAnimalForm from "./src/screens/EditarAnimal";

const Stack = createNativeStackNavigator();

const CadastroTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Cadastro navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Cadastro" component={CadastroTela} />
          <Stack.Screen name="CadastroPessoal" component={CadastroPessoal} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} />
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
          <Stack.Screen name="VisualizacaoPerfil" component={VisualizacaoPerfil} />
          <Stack.Screen name="EditarAnimal" component={EditarAnimalForm} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    minHeight: 360,
  },
});
