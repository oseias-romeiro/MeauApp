import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate("LoginScreen")}
        title="Login"
      />
    </View>
  );
}




export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name = "Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}