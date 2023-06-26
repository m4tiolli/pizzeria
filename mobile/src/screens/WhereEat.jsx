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
import delivery from '../assets/delivery.png';
import garfo from '../assets/garfo.png';
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "../components/BackButton/BackButton";

function WhereEat() {
  const navigation = useNavigation();
  const route = useRoute();
  let { pedido } = route.params;

  const navigateDelivery = () => {
    pedido = { ...pedido, tipo: "delivery" }
    navigation.navigate("SelectAddress", { pedido: pedido })
  }
  const navigateLocal = () => {
    pedido = {
      ...pedido,
      tipo: "local"
    }
    navigation.navigate("Payment", { pedido: pedido })
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efefef",
        alignItems: 'center'
      }}
    >

      <BackButton />
      <Text style={[styles.text, { marginVertical: PixelRatio.getPixelSizeForLayoutSize(10) }]}>where are you going to eat?</Text>
      <TouchableOpacity style={styles.button} onPress={navigateDelivery}>
        <Image
          source={delivery}
          style={{ width: PixelRatio.getPixelSizeForLayoutSize(15), height: PixelRatio.getPixelSizeForLayoutSize(15) }}
        />
        <Text style={styles.text}>to delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateLocal}>
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
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    color: "#8e1c1a",
    textAlign: 'left',
  }
});

export default WhereEat;
