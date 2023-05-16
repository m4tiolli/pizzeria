import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Produto() {
  const route = useRoute();
  const { pizzas } = route.params;
  const navigation = useNavigation()

  async function carrinho() {
    const item = {
      id: pizzas.id,
      nome: pizzas.nome,
      descricao: pizzas.descricao,
      preco: pizzas.preco,
      imagem: pizzas.imagem,
    };
    let carrinho = await AsyncStorage.getItem("carrinho");
    if (!carrinho || carrinho.length === 0) {
      await AsyncStorage.setItem("carrinho", JSON.stringify([item]));
      navigation.navigate("Cart");
      return;
    }

    carrinho = JSON.parse(carrinho);

    carrinho = carrinho.concat([item]);
    AsyncStorage.setItem("carrinho", JSON.stringify(carrinho));
    navigation.navigate("Cart");
  }
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
        <Text style={styles.carttext} onPress={carrinho}>
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
    bottom: PixelRatio.getPixelSizeForLayoutSize(25),
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
    bottom: PixelRatio.getPixelSizeForLayoutSize(50),
  },
});
