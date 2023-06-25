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
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import ItemCart from "../components/ItemCart/ItemCart";
import Feather from "react-native-vector-icons/Feather";

function Cart({item}) {
  const navigation = useNavigation();

  const [cart, setCart] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getCart();
    }, [])
  );

  const getCart = async () => {
    const cartData = await AsyncStorage.getItem("carrinho");

    if (cartData !== null) {
      setCart(JSON.parse(cartData));
    }
  };

  const clearCart = () => {
    setCart([]);
    AsyncStorage.removeItem("carrinho");
  };

  const deleteItem = () => {
    setCart(cart.filter((item) => item.id !== id));
    AsyncStorage.setItem("carrinho", JSON.stringify(cart));
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.valor * item.quantidade;
    });
    return total.toFixed(2);
  };

  const pedido = {
    cart,
    valor: calculateTotal(),
    situacao: "aberto"
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efefef",
      }}
    >
      <Header />
      {cart.length === 0 ? (
        <View style={styles.viewcart}>
          <Feather
            name="shopping-cart"
            size={PixelRatio.getPixelSizeForLayoutSize(30)}
            color={"#8E1C1A"}
          />
          <Text style={styles.textcart}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <ScrollView>
            {cart.map((item, index) => (
              <ItemCart item={item} key={index} />
            ))}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}  
          >
            <TouchableOpacity style={styles.clear} onPress={clearCart}>
              <Icon
                name="trash-2"
                size={PixelRatio.getPixelSizeForLayoutSize(15)}
                color={"#8E1C1A"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.price}
              onPress={() => navigation.navigate("where eat?", {pedido: pedido})}
            >
              <Text style={styles.text}>go to checkout</Text>
              <Text style={styles.text}>R${calculateTotal()}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "60%",
    height: 150,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
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
    color: "#fff",
    fontSize: 20,
    backgroundColor: "#8E1C1A",
    width: "60%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  header: {
    height: "15%",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    width: "90%",
    height: PixelRatio.getPixelSizeForLayoutSize(15),
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#efefef",
    elevation: 5
  },
  viewcart: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textcart: {
    fontFamily: "Poppins_300Light",
    color: "#8e1c1a",
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});

export default Cart;
