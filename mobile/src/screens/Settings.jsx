import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from './../components/Header/Header';
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { DadosUsuario, ChecarLoginUsuario } from "../components/AuthContext"
import AsyncStorage from "@react-native-async-storage/async-storage";

function Settings() {
  const navigation = useNavigation()

  async function ValidarLogin() {
    const login = await ChecarLoginUsuario();
    if (login == false) {
      navigation.navigate("Autentication")
    }
  }

  useEffect(() => {
    ValidarLogin()
  }, [])

  const [usuario, setUsuario] = useState("");

  async function PreencherDados() {
    const jwt = await DadosUsuario();
    setUsuario(jwt);
  }

  useEffect(() => {
    PreencherDados();
  }, []);

  function deslogar() {
    AsyncStorage.removeItem('@jwt')
    alert("Você saiu da sua conta!")
    navigation.goBack()
  }

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#efefef" }}>
      <Header />
      <View
        style={{
          width: "100%",
          height: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
        }}
      >
        <FontAwesome
          name="user-circle-o"
          color={"#8e1c1c"}
          size={PixelRatio.getPixelSizeForLayoutSize(35)}
        />
        <Text style={styles.name}>{usuario?.Nome}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditUser')}
        >
          <Text style={styles.textbtn}>editar perfil</Text>
          <AntDesign
            name="user"
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
            color={"#8e1c1a"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddressMethods")}>
          <Text style={styles.textbtn}>meus endereços</Text>
          <MaterialIcons
            name="location-pin"
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
            color={"#8e1c1a"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PaymentMethods")}>
          <Text style={styles.textbtn}>formas de pagamento</Text>
          <AntDesign
            name="creditcard"
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
            color={"#8e1c1a"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deslogar}>
          <Text style={{color: "#8e1c1c"}}>log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: "13%",
    backgroundColor: "#efefef",
    margin: PixelRatio.getPixelSizeForLayoutSize(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    elevation: 3
  },
  textbtn: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    color: '#8e1c1a'
  },
  name: {
    fontFamily: "Poppins_500Medium",
    margin: PixelRatio.getPixelSizeForLayoutSize(9),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    color: '#8e1c1a',
    textAlign: "center"
  },
});
export default Settings;
