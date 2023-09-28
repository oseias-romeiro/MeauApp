import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Login';
import Header from './Components/header';
import Status_bar from './Components/retangulo';


export default function App() {
  return (
    <View style={styles.container}>
      <View></View>
      <Status_bar />
      <Header />
      <LoginScreen />
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
