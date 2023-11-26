import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-reanimated';


import { AuthProvider } from "./src/config/auth.js"
import MyDrawer from "./src/components/Drawer";

const Stack = createNativeStackNavigator();


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
