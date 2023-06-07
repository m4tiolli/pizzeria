import { View, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Item from "../components/Item/Item";
import ItemCart from './../components/ItemCart/ItemCart';

export default function Search() {
  const route = useRoute();
  const navigation = useNavigation();
  const {pizza, pesquisa} = route.params;

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header />
      <Text>mostrando resultados para:{pesquisa}</Text>
      <ScrollView>
        {pesquisa.map((pizza, index) => (
          <ItemCart item={pizza} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
