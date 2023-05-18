import { View, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Item from "../components/Item/Item";

export default function Search() {
  const pizza = {
    nome: "Pizza",
    preco: 100,
    descricao: "pizza sla",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdjeyjHf4gl0eN_iw0VCw4GbMriPi_fmS2w&usqp=CAU",
  };
  const route = useRoute();
  const navigation = useNavigation();
  const { param } = route.params;

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header />
      <Text>mostrando resultados para:{param}</Text>
      <ScrollView>
        {param.map((pizza, index) => (
          <Item pizza={pizza} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
