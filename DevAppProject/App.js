import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Login';
import Header from './Components/header';
import Retangulo from './Components/retangulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Retangulo />
      <Header />
      <LoginScreen />
      <Teste />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
  },




});

const Teste = () => {

  return (

    <View></View>

  );

};
