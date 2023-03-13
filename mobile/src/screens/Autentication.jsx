import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import { useNavigation, tabNavigator } from "@react-navigation/native";

export default function Autentication() {
  const navigation = useNavigation();

  const LoginScreen = () => {
    <View>
      <View>
        <Text>E-mail</Text>
        <TextInput placeholder="youremail@email.com" />
      </View>
      <TextInput />
      <TouchableOpacity>
        <Text>log in</Text>
      </TouchableOpacity>
    </View>;
  };

  const RegisterScreen = () => {
    <View>
      <View>
        <Text>E-mail</Text>
        <TextInput placeholder="youremail@email.com" />
      </View>
      <TextInput />
      <TouchableOpacity>
        <Text>log in</Text>
      </TouchableOpacity>
    </View>;
  };

  const Tabs = TabNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
  });

  return (
    <View>
      <Text>Tela 2</Text>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "blue",
    borderRadius: 10,
    width: 300,
    height: 200,
  },
});
