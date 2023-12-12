import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-reanimated';


import { AuthProvider } from "./src/config/auth.js"
import MyDrawer from "./src/components/Drawer";



export default function App() {

  return (
      <AuthProvider>
        <MyDrawer />
      </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    minHeight: 360,
  },
});
