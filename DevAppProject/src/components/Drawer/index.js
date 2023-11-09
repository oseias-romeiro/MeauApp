import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/app';
import { auth } from ''
import 'firebase/auth';
import { signOut } from 'firebase/auth';

import LoginScreen from '../../screens/Login';
import VisualizacaoPerfil from '../../screens/VisualizacaoPerfil';
import CadastroForm from '../../screens/CadastroForm';
import Cadastro from '../../screens/Cadastro';
import Dashboard from '../../screens/Dashboard';
import CadastroPetForm from '../../screens/CadastroAnimal';
import EditarPerfil from '../../screens/EditarPerfil';
import { useAuth } from '../../config/auth';

const Drawer = createDrawerNavigator();

const CustomDrawerContentLogout = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style ={styles.drawerHeader}>
        <Text style={styles.text}>Seu Nome</Text>
      </View>
      <DrawerItem label="Login" onPress={() => navigation.navigate('Login')}/>
      <DrawerItem label="Cadastro" onPress={() => navigation.navigate('CadastroForm')}/>
    </DrawerContentScrollView>
  )
}

const CustomDrawerContentLogin = ({ navigation }) => {

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      logout();
    } catch(error){
      console.error('Erro ao fazer logout: ', error);
    }
  }

  return (
    <DrawerContentScrollView>
      <DrawerItem label='Visualização do Perfil' onPress={() => navigation.navigate('VisualizacaoPerfil')} />
      <DrawerItem label='Cadastro do Animal' onPress={() => navigation.navigate('CadastroAnimal')} />
      <DrawerItem label='Editar Perfil' onPress={() => navigation.navigate('EditarPerfil')} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>

  )
}

export default function MyDrawer() {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(getAuth(),(authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  },[]);

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={(props) => (user ? <CustomDrawerContentLogin {...props} /> : <CustomDrawerContentLogout{...props} />)}>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="CadastroForm" component={CadastroForm} />
        <Drawer.Screen name="VisualizacaoPerfil" component={VisualizacaoPerfil} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="CadastroAnimal" component={CadastroPetForm} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="EditarPerfil" component={EditarPerfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start', 
    padding: 20, 
    backgroundColor: '#88c9bf',
    height:172,
  },
  text:{
    color: 'white',
    fontSize: 18,
  }
})
