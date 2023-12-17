import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import 'firebase/auth';

import { useAuth } from '../../config/auth.js'

import MyAnimals from '../../screens/MyAnimals';
import Animals from '../../screens/Animals';
import AnimalView from '../../screens/AnimalView';
import CreateAnimalSuccess from '../../screens/CreateAnimalSuccess';
import Login from '../../screens/Login';
import Profile from '../../screens/Profile';
import CadastroPessoal from '../../screens/CreateUser';
import Ops from '../../screens/Ops';
import CreateAnimal from '../../screens/CreateAnimal';
import EditProfile from '../../screens/EditProfile';
import NotifyList from '../../screens/Notifications'
import ChatScreen from '../../screens/Chat';
import ListChats from '../../screens/Chat/listChats';
import { screenOptions, styles } from "./styles.js";

const Drawer = createDrawerNavigator();

const CustomDrawerContentLogout = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style ={styles.drawerHeader}>
        <Image source={require('../../../assets/Meau_Icone.png')} style={styles.drawerImage} />
        <Text style={styles.text}>Meau</Text>
      </View>
      <DrawerItem 
      label= {() => (<Text style ={styles.customLabel}>Login</Text>)} 
      onPress={() => navigation.navigate('Login')}
      style ={styles.drawerItem}
      />
      <DrawerItem 
      label={() => (<Text style ={styles.customLabel}>Cadastro</Text>)} 
      onPress={() => navigation.navigate('CreateUser')}
      style ={styles.drawerItem}
      />
    </DrawerContentScrollView>
  )
}

const CustomDrawerContentLogin = (props) => {

  const handleLogout = async () => {
    props.logout();
    props.navigation.navigate('Login');
  }

  return (
    <DrawerContentScrollView>
      <View style ={styles.drawerHeader}>
        <Image source={require('../../../assets/Meau_Icone.png')} style={styles.drawerImage} />
        <Text style={styles.text}>{ props.user.nome_perfil }</Text>
      </View>
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Visualização do Perfil</Text>)} 
        onPress={() => props.navigation.navigate('Profile')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label= {() => (<Text style ={styles.customLabel}>Cadastro do Animal</Text>)} 
        onPress={() => props.navigation.navigate('CreateAnimal')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Editar Perfil</Text>)} 
        onPress={() => props.navigation.navigate('EditProfile')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Meus Animais</Text>)} 
        onPress={() => props.navigation.navigate('MyAnimals')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Ver Animais</Text>)} 
        onPress={() => props.navigation.navigate('Animals')}
        style ={styles.drawerItem} />
      <DrawerItem
        label={() => (<Text style ={styles.customLabel}>Notificações</Text>)}
        onPress={() => props.navigation.navigate('NotifyList')}
        style ={styles.drawerItem} />
      <DrawerItem
        label={() => (<Text style ={styles.customLabel}>Chats</Text>)}
        onPress={() => props.navigation.navigate('ListChats')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Logout</Text>)} 
        onPress={handleLogout}
        style ={styles.drawerItemLogout} />
    </DrawerContentScrollView>

  )
}

export default function MyDrawer() {
  const { user, logout } = useAuth();

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={screenOptions} drawerContent={(props) => ( user && user.nome_perfil!="" ? <CustomDrawerContentLogin {...props} user={user} logout={logout} /> : <CustomDrawerContentLogout {...props} />)}>
        <Drawer.Screen name="Ops" component={Ops} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={CadastroPessoal} />
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Cadastro Animal" component={CreateAnimal} />
        <Drawer.Screen name="Editar Perfil" component={EditProfile} />
        <Drawer.Screen name='Sucesso Animal' component={CreateAnimalSuccess} />
        <Drawer.Screen name='Animais' component={Animals} />
        <Drawer.Screen name='Meus Animais' component={MyAnimals} />
        <Drawer.Screen name='Detalhes Animal' component={AnimalView} />
        <Drawer.Screen name='Notificações' component={NotifyList} />
        <Drawer.Screen name='Chat' component={ChatScreen} />
        <Drawer.Screen name='Chats' component={ListChats} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
