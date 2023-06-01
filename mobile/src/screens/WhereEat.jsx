import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
  TextInput,
} from "react-native";
import Header from "../components/Header/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import delivery from '../assets/delivery.png';
import garfo from '../assets/garfo.png';
import { useNavigation, useRoute } from "@react-navigation/native";

function WhereEat() {
  const navigation = useNavigation();
  const route = useRoute();
  const { pedido } = route.params;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efefef",
        alignItems: 'center'
      }}
    >
      <Header />
      <TouchableOpacity style={styles.button}>
        <Image
          source={delivery}
          style={{ width: PixelRatio.getPixelSizeForLayoutSize(15), height: PixelRatio.getPixelSizeForLayoutSize(15) }}
        />
        <Text style={styles.text}>to delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EatHerePayment", {pedido: pedido})}>
        <Image
          source={garfo}
          style={{ width: PixelRatio.getPixelSizeForLayoutSize(15), height: PixelRatio.getPixelSizeForLayoutSize(15) }}
        />
        <Text style={styles.text}>eat here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
    backgroundColor: "#fff",
    marginVertical: 20,
    elevation: 8,
    paddingVertical: 15
  },
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    color: "#8e1c1a",
    textAlign: 'left',
  }
});

export default WhereEat;
