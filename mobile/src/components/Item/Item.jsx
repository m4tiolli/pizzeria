import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import pizzaexemplo from "../../assets/pizzaexemplo.png";
import { useNavigation } from "@react-navigation/native";

export default function Item({ pizza }) {
  const navigation = useNavigation();
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
          source={{ uri: pizza.imagem}}
          style={{
            height: 120,
            width: 120,
            position: "absolute",
            left: -35,
            top: -5,
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
            <TouchableOpacity style={styles.cart}>
              <Text
                style={styles.carttext}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                add to cart
              </Text>
            </TouchableOpacity>
            <Text style={styles.price}>{pizza.preco}</Text>
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
