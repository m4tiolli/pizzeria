import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import ItemCart from "../components/ItemCart/ItemCart";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Table, Row, Rows } from "react-native-table-component";
import { Button } from "react-native-elements";
import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const cartData = await AsyncStorage.getItem("carrinho");
    console.log(cartData);

    if (cartData !== null) {
      setCart(JSON.parse(cartData));
    }
  };

  const clearCart = () => {
    setCart([]);
    AsyncStorage.removeItem("cart");
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((pizza) => {
      total += pizza.preco;
    });
    // return total.toFixed(2);
  };

  const tableHead = ["Produto", "Quantidade", "Preço Total", ""];
  const tableData = cart.map((item, index) => {
    return [
      item.nome,
      item.descricao,
      `R$${(item.preco).toFixed(2)}`,
      <Button title="Remover" onPress={() => removeItem(index)} />,
    ];
  });
  return (
    <View>
      {cart.length === 0 ? (
        <Text>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row data={tableHead} />
            <Rows data={tableData} />
          </Table>
          <View>
            <Text>Total: R${calculateTotal()}</Text>
            <Button
              title="Finalizar Compra"
              onPress={() => console.log("Compra finalizada")}
            />
            <Button title="Limpar Carrinho" onPress={clearCart} />
          </View>
        </>
      )}
    </View>
  );
}
export default Cart;
