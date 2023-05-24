import { View, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Item from "../components/Item/Item";

export default function Search() {
  const route = useRoute();
  const navigation = useNavigation();
  const { pesquisa, pizza } = route.params;

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header />
      <Text>mostrando resultados para:{pesquisa}</Text>
      <ScrollView>
        {param.map((pizza, index) => (
          <Item pizza={pizza} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
