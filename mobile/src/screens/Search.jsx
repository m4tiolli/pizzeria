import { View, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Item from "../components/Item/Item";
import ItemCart from './../components/ItemCart/ItemCart';

export default function Search() {
  const route = useRoute();
  const navigation = useNavigation();
  const { pesquisa, pizza } = route.params;

  function filtrarArrayDeObjetos(arrayDeObjetos, arrayDeStrings) {
    return arrayDeObjetos.filter(objeto => {
      return arrayDeStrings.some(string => {
        for (let key in objeto) {
          if (typeof objeto[key] === 'string' && objeto[key].includes(string)) {
            return true;
          }
        }
        return false;
      });
    });
  }

  const objetosFiltrados = filtrarArrayDeObjetos(pizza, pesquisa);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header />
      <Text>mostrando resultados para:{pesquisa}</Text>
      {objetosFiltrados.map((pizza, index) => (
        <Item pizza={pizza} key={index} />
      ))}
    </View>
  );
}
