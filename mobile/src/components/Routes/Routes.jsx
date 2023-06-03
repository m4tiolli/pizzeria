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
import PaymentMethods from "../../screens/PaymentMethods";

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
        title=""
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
        title=""
      />
      <Stack.Screen
        name="WhereEat"
        component={WhereEat}
        options={{ headerShown: true }}
        title=""
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: true }}
        title=""
      />
      <Stack.Screen
        name="EatHerePayment"
        component={EatHerePayment}
        options={{ headerShown: true }}
        title=""
      />
      <Stack.Screen
        name="Pix"
        component={Pix}
        options={{ headerShown: true,  }}
        title=""
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
