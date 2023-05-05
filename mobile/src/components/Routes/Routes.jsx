import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../../screens/Initial";
import Autentication from "../../screens/Autentication";
import Home from "../../screens/Home";
import Produto from "../../screens/Produto";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Autentication"
        component={Autentication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
