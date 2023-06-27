import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
  ScrollView
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import BackButton from "../components/BackButton/BackButton";

export default function Produto() {
  const route = useRoute();
  const { pizzas } = route.params;
  const navigation = useNavigation();

  const [observacao, setObservacao] = useState("");

  async function carrinho() {
    try {
      const item = {
        ProdutoID: pizzas.id,
        Nome: pizzas.nome,
        Observacao: observacao,
        Valor: pizzas.valor,
        Quantidade: quantidade, // Utilizar a quantidade atual do estado
        descricao: pizzas.descricao,
        imagem: pizzas.imagem
      };
      let carrinho = await AsyncStorage.getItem("carrinho");
      if (!carrinho || carrinho.length === 0) {
        await AsyncStorage.setItem("carrinho", JSON.stringify([item]));
        navigation.navigate("Cart");
        return;
      }
  
      carrinho = JSON.parse(carrinho);
  
      // Verificar se o produto já existe no carrinho
      const existingItemIndex = carrinho.findIndex((i) => i.ProdutoID === pizzas.id);
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
  const [quantidade, setQuantidade] = useState(1);

  const QuantAdd = () => {
    setQuantidade(quantidade + 1);
  };

  const QuantRemove = () => {
    setQuantidade(quantidade - 1);
  };

  return (
    <ScrollView>
      <BackButton />
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
          source={{ uri: `data:image/png;base64,${pizzas.imagem}` }}
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(80),
            width: "50%",
            borderRadius: 15,

            top: PixelRatio.getPixelSizeForLayoutSize(0),
          }}
        />
        <Text style={styles.title}>{pizzas.nome}</Text>
        <Text style={styles.infos}>{pizzas.descricao}</Text>
        <View style={styles.boxqtd}>
          <TextInput
            keyboardType="numeric"
            placeholder={quantidade.toString()}
            value={quantidade}
            style={styles.inputqtd}
          />
          <View style={styles.buttonsqtd}>
            <TouchableOpacity style={styles.textplus} onPress={QuantAdd}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#fff",
                  fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.textplus}
              onPress={QuantRemove}
              disabled={quantidade < 2}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#fff",
                  fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
                }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.observacao}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
              color: "#8e1c1a",
            }}
          >
            add any notes?
          </Text>
          <TextInput
            placeholder="Ex: no onions"
            style={styles.observacaoText}
            multiline={true}
            value={observacao}
            onChangeText={(texto) => setObservacao(texto)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",

            bottom: PixelRatio.getPixelSizeForLayoutSize(0),
          }}
        >
          <Text style={styles.price}>R${pizzas.valor * quantidade}</Text>
          <TouchableOpacity style={styles.cart}>
            <Text style={styles.carttext} onPress={carrinho}>
              add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cart: {
    backgroundColor: "#8E1C1A",
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  carttext: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(9),
  },
  infos: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    width: "80%",
  },
  price: {
    fontFamily: "Poppins_500Medium",
    color: "#698C3D",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  boxqtd: { flexDirection: "row", alignItems: "center" },
  inputqtd: {
    backgroundColor: "#e8e8e8",
    textAlign: "center",
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    width: PixelRatio.getPixelSizeForLayoutSize(25),
    elevation: 2,
    borderRadius: 1000,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  textplus: {
    backgroundColor: "#8e1c1a",
    margin: 3,
    width: 40,
    height: 40,
    borderRadius: 1000,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  buttonsqtd: { margin: 10 },
  observacao: {
    padding: 10,
    width: "70%",
    height: PixelRatio.getPixelSizeForLayoutSize(50),
    alignItems: "center",
    borderRadius: 10,
  },
  observacaoText: {
    fontFamily: "Poppins_400Regular",
    textAlignVertical: "center",
    width: "90%",
    height: "60%",
    backgroundColor: "#f4f4f4",
    borderRadius: 5,
    elevation: 3,
    paddingHorizontal: 10,
  },
});
