import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from './../components/Header/Header';
import { useNavigation } from "@react-navigation/native";
import Alert from "../components/Alert/Alert";

function Settings() {
  const navigation = useNavigation()
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#efefef" }}>
      <Header/>
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
        <Text style={styles.name}>Gabriel Matiolli</Text>
        <TouchableOpacity style={styles.button}>
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
      </View>
      <Alert message={"Seu pedido está pronto!"}/> 
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
    color: '#8e1c1a'
  },
});
export default Settings;
