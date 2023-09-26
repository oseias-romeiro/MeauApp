import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/header';
import Cadastro from './components/cadastro';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Cadastro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    minHeight: 360,
  },
});
