import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import ItemCart from "../components/ItemCart/ItemCart";
import Feather from "react-native-vector-icons/Feather";
import { ChecarLoginUsuario } from "../components/AuthContext";


// const pedido = {
//   "id": 1,
//   "itens": [
//     {
//       "id": 0,
//       "produtoID": 0,
//       "nome": "Pizza",
//       "observacao": "",
//       "valor": 0.0,
//       "quantidade": 1
//     }
//   ],
//   "valorTotal": 0,
//   "situacao": "",
//   "tipo": "delivery",
//   "endereco": {
//     "id": 0
//   }
// }



function Cart() {
  const navigation = useNavigation();

  async function ValidarLogin() {
    const login = await ChecarLoginUsuario();
    if (login == false) {
      return false
    } else {
      navigation.navigate("where eat?", { pedido: pedido })
    }
  }


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

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.Valor * item.Quantidade;
    });
    return total.toFixed(2);
  };

  const pedido = {
    itens: cart.map((item) => ({
      ProdutoID: item.ProdutoID,
      Nome: item.Nome,
      Observacao: item.Observacao,
      Valor: item.Valor,
      Quantidade: item.Quantidade,
    })),
    valorTotal: parseFloat(calculateTotal()),
    situacao: "aberto",
  };

  console.log(pedido)

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
              onPress={ValidarLogin}
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
