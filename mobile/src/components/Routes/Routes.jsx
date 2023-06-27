import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../../screens/Initial";
import Autentication from "../../screens/Autentication";
import Home from "../../screens/Home";
import Produto from "../../screens/Produto";
import WhereEat from "../../screens/WhereEat";
import Search from "../../screens/Search";
import Pix from "../../screens/Pix"
import Success from "../../screens/Success";
import PaymentMethods from "../../screens/PaymentMethods";
import AddressMethods from "../../screens/AddressMethods";
import Payment from "../../screens/Payment";
import PaymentCredit from "../../screens/PaymentCredit";
import EditUser from "../../screens/EditUser";
import SelectAddress from "../../screens/SelectAddress";
import SelectPayment from "../../screens/SelectPayment";
import Cartao from "../../screens/Cartao";
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
        options={{ headerShown: false }}
        title=""
      />
      <Stack.Screen
        name="where eat?"
        component={WhereEat}
        options={{ headerShown: false }}
        title=""
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
        title=""
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
        title=""
      />
      <Stack.Screen
        name="Pix"
        component={Pix}
        options={{ headerShown: false,  }}
        title="confirm payment"
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
      <Stack.Screen
        name="AddressMethods"
        component={AddressMethods}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentCredit"
        component={PaymentCredit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='EditUser'
        component={EditUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SelectAddress'
        component={SelectAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SelectPayment'
        component={SelectPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Cartao'
        component={Cartao}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
