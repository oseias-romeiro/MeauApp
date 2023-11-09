import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated';


import Header from "./src/components/Header/index";
import Cadastro from './src/screens/Cadastro.js'
import LoginScreen from "./src/screens/Login.js";
import VisualizacaoPerfil from "./src/screens/VisualizacaoPerfil.js";
import CadastroPessoal from "./src/screens/CadastroPessoal";
import EditarPerfil from "./src/screens/EditarPerfil";
import Dashboard from "./src/screens/Dashboard";
import CadastroAnimal from "./src/screens/CadastroAnimal";
import { AuthProvider } from "./src/config/auth.js"
import MyDrawer from "./src/components/Drawer";

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
    <NavigationContainer independent = {true}>
      <AuthProvider>
      <MyDrawer />
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
