import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../../screens/Login';
import VisualizacaoPerfil from '../../screens/VisualizacaoPerfil';
import CadastroForm from '../../screens/CadastroForm';
import Cadastro from '../../screens/Cadastro';
import Dashboard from '../../screens/Dashboard';
import CadastroPetForm from '../../screens/CadastroAnimal';
import EditarPerfil from '../../screens/EditarPerfil';

const Drawer = createDrawerNavigator();


export default function MyDrawer() {
  return (
    <NavigationContainer independent = {true}>
      <Drawer.Navigator>
        <Drawer.Screen name = "Login" component={LoginScreen} />
        <Drawer.Screen name = "CadastroForm" component={CadastroForm} />
        <Drawer.Screen name = "VisualizacaoPerfil" component={VisualizacaoPerfil} />
        <Drawer.Screen name = "Dashboard" component={Dashboard} />
        <Drawer.Screen name = "CadastroAnimal" component={CadastroPetForm} />
        <Drawer.Screen name = "Cadastro" component={Cadastro} />
        <Drawer.Screen name = "EditarPerfil" component={EditarPerfil} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}