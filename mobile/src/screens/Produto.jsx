import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Produto() {
  const route = useRoute();
  const { pizzas } = route.params;

  function navegar() {
    navigation.navigate("Cart", { pizzas: pizzas });
  }

  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Image
        source={{ uri: pizzas.imagem }}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(100),
          width: "80%",
          borderRadius: 15,
          position: "absolute",
          top: PixelRatio.getPixelSizeForLayoutSize(10),
        }}
      />
      <Text style={styles.title}>{pizzas.nome}</Text>
      <Text style={styles.infos}>{pizzas.descricao}</Text>
        <Text style={styles.price}>R${pizzas.preco}</Text>
      <TouchableOpacity style={styles.cart}>
        <Text
          style={styles.carttext}
          onPress={navegar}
        >
          add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  cart: {
    backgroundColor: "#8E1C1A",
    width: "75%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: PixelRatio.getPixelSizeForLayoutSize(25)
  },
  carttext: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  infos: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  price: {
    fontFamily: "Poppins_500Medium",
    color: "#698C3D",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    position: "absolute",
    bottom: PixelRatio.getPixelSizeForLayoutSize(50)
  },
});
