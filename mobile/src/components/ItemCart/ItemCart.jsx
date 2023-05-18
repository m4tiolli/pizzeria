import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ItemCart({ item }) {
  const navigation = useNavigation();
  function navegar() {
    navigation.navigate("Produto", { pizzas: item });
  }

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View style={styles.item}>
        <Image
          source={{ uri: item.imagem }}
          style={{
            height: 120,
            width: 120,
            position: "absolute",
            left: -35,
            top: -5,
          }}
        />
        <View style={styles.box}>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>{item.nome}</Text>
          </View>
          <Text style={styles.infos}>{item.descricao}</Text>
          <View
            style={{
              flexDirection: "row",
              width: "85%",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 10,
            }}
          >
            <TouchableOpacity style={styles.cart} onPress={() => navegar(item)}>
              <Text style={styles.carttext}>ver informações</Text>
            </TouchableOpacity>
            <Text style={styles.price}>R${item.preco}</Text>
          </View>
        </View>
      </View>
    </View>
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
    fontSize: 12,
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
  infos: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
    width: "90%",
    textAlign: "left",
  },
  price: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
    fontSize: 20,
  },
});
export default ItemCart;
