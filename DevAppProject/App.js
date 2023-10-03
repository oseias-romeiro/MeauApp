import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./Components/header";
import Cadastro from "./Components/cadastro";
import LoginScreen from "./Login";
import Home from "./home";
import CadastroForm from "./Components/CadastroForm";
import EditarPerfil from "./Components/EditarPerfil";

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
        <Stack.Screen name="Home" component={Home} />
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
