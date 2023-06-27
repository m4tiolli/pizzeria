import { View, Image, StyleSheet, Text, TouchableOpacity, PixelRatio } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ItemCart({ item }) {
  const navigation = useNavigation();
  function navegar() {
    navigation.navigate("Produto", { pizzas: item });
  }

  const longDesc = item.descricao;
  const shortDesc =
    longDesc.length < 26 ? longDesc + "..." : longDesc.slice(0, 25) + "...";


  return (
    <View style={styles.container}>
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
            source={{ uri: `data:image/png;base64, ${item.imagem}` }}
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

            <Text style={styles.title}>{item.Nome}</Text>
            <Text style={styles.infos}>{shortDesc}</Text>

            <View
              style={{
                flexDirection: "row",
                width: "85%",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.cart}
                onPress={() => navegar(item)}
              >
                <Text style={styles.carttext}>show info</Text>
              </TouchableOpacity>
              <Text style={styles.price}>x{item.Quantidade}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(20),
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
    height: PixelRatio.getPixelSizeForLayoutSize(13),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  carttext: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
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
    color: "#898989",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});
export default ItemCart;
