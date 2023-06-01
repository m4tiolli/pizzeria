import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../../screens/Initial";
import Autentication from "../../screens/Autentication";
import Home from "../../screens/Home";
import Produto from "../../screens/Produto";
import WhereEat from "../../screens/WhereEat";
import Search from "../../screens/Search";
import EatHerePayment from "../../screens/EatHerePayment";
import Pix from "../../screens/Pix"
import Success from "../../screens/Success";

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
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="WhereEat"
        component={WhereEat}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="EatHerePayment"
        component={EatHerePayment}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Pix"
        component={Pix}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
