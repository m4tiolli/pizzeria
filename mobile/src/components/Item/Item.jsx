import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Item({ pizza }) {
  const navigation = useNavigation();
  function navegar() {
    navigation.navigate("Produto", { pizzas: pizza });
  }
  async function carrinho() {
    //adicionar no asyncStorage
    const item = {
      nome: pizza.nome,
      descricao: pizza.descricao,
      preco: pizza.preco,
    };
    let carrinho = await AsyncStorage.getItem("carrinho");
    if (!carrinho || carrinho.length === 0) { 
      await AsyncStorage.setItem("carrinho", JSON.stringify([item]));
      navigation.navigate("Cart");
      return;
    }

    carrinho = JSON.parse(carrinho);

    carrinho.concat([item]);
    AsyncStorage.setItem("carrinho", JSON.stringify(carrinho));
    navigation.navigate("Cart");
  }

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
      onPress={() => navegar(pizza)}
    >
      <View style={styles.item}>
        <Image
          source={{ uri: pizza.imagem }}
          style={{
            height: 120,
            width: 120,
            position: "absolute",
            left: -35,
            top: -5,
            borderRadius: 15,
          }}
        />
        <View style={styles.box}>
          <Text style={styles.title}>{pizza.nome}</Text>
          <Text style={styles.infos}>{pizza.descricao}</Text>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 10,
            }}
          >
            <TouchableOpacity style={styles.cart} onPress={carrinho}>
              <Text style={styles.carttext}>add to cart</Text>
            </TouchableOpacity>
            <Text style={styles.price}>R${pizza.preco}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    width: "60%",
    height: 150,
    marginVertical: 10,
  },
  box: {
    width: "90%",
    height: "68%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 2,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
    alignItems: "center",
  },
  cart: {
    backgroundColor: "#8E1C1A",
    width: "60%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  carttext: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
  infos: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
  },
  price: {
    fontFamily: "Poppins_500Medium",
    color: "#698C3D",
    fontSize: 20,
  },
});
