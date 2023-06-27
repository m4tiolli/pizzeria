import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Item({ pizza }) {
  const navigation = useNavigation();
  function navegar() {
    navigation.navigate("Produto", { pizzas: pizza });
  }
  async function carrinho() {
    try {
      const item = {
        ProdutoID: pizza.id,
        Nome: pizza.nome,
        Observacao: "",
        Valor: pizza.valor,
        Quantidade: 1, // Utilizar a quantidade atual do estado
        descricao: pizza.descricao,
        imagem: pizza.imagem
      };
      let carrinho = await AsyncStorage.getItem("carrinho");
      if (!carrinho || carrinho.length === 0) {
        await AsyncStorage.setItem("carrinho", JSON.stringify([item]));
        navigation.navigate("Cart");
        return;
      }
  
      carrinho = JSON.parse(carrinho);
  
      // Verificar se o produto já existe no carrinho
      const existingItemIndex = carrinho.findIndex((i) => i.ProdutoID === pizza.id);
      if (existingItemIndex !== -1) {
        // O produto já existe no carrinho, então apenas atualize a quantidade  
        carrinho[existingItemIndex].Quantidade += quantidade;
      } else {
        // O produto não existe no carrinho, adicione-o
        carrinho.push(item);
      }
  
      await AsyncStorage.setItem("carrinho", JSON.stringify(carrinho));
      navigation.navigate("Cart");
    } catch (err) {
      console.log(err);
    }
  }
  const longDesc = pizza.descricao;
  const shortDesc =
    longDesc.length < 26 ? longDesc + "..." : longDesc.slice(0, 25) + "...";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignSelf: "auto" }}
        onPress={() => navegar(pizza)}
      >
        <View style={styles.item}>
          <Image
            source={{ uri: `data:image/png;base64,${pizza.imagem}` }}
            style={{
              height: PixelRatio.getPixelSizeForLayoutSize(40),
              width: PixelRatio.getPixelSizeForLayoutSize(40),
              position: "absolute",
              left: PixelRatio.getPixelSizeForLayoutSize(-20),
              top: PixelRatio.getPixelSizeForLayoutSize(-20),
              borderRadius: 15,
            }}
          />
          <View style={styles.box}>
            <Text style={styles.title}>{pizza.nome}</Text>
            <Text style={styles.infos}>{shortDesc}</Text>
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.cart} onPress={() => carrinho()}>
                <Text style={styles.carttext}>add to cart</Text>
              </TouchableOpacity>
              <Text style={styles.price}>R${pizza.valor}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5)
  },
  box: {
    backgroundColor: "#fff",
    zIndex: 2,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
    alignItems: "center",
    elevation: 10,
    width: PixelRatio.getPixelSizeForLayoutSize(80),
  },
  cart: {
    backgroundColor: "#8E1C1A",
    width: PixelRatio.getPixelSizeForLayoutSize(37),
    height: PixelRatio.getPixelSizeForLayoutSize(14),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  carttext: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  infos: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
  },
  price: {
    fontFamily: "Poppins_500Medium",
    color: "#698C3D",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});
