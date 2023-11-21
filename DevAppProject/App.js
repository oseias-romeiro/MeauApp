import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from 'expo-notifications';
import { useEffect, useState, useRef } from 'react';

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
import VisualizacaoAnimais from "./src/screens/VisualizacaoAnimais/index";
import VisualizacaoAnimaisUsuario from "./src/screens/VisualizacaoAnimaisUsuario/index";
import DetalhesAnimal from "./src/screens/DetalhesAnimal/index";
import NotificationsScreen from "./src/screens/Notifications.js/index.js";

import { handleNotification, registerForPushNotificationsAsync, saveNotification } from "./src/config/notifications.js";

const Stack = createNativeStackNavigator();

const CadastroTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Cadastro navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

Notifications.setNotificationHandler({handleNotification: handleNotification,});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("Notification Listner: ", notification);
      saveNotification(notification);
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("Response Listner: ", response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
          <Stack.Screen name="VisualizacaoAnimais" component={VisualizacaoAnimais} />
          <Stack.Screen name="MeusAnimais" component={VisualizacaoAnimaisUsuario} />
          <Stack.Screen name="DetalhesAnimal" component={DetalhesAnimal} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
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
