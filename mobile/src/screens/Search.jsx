import { View, Text, ScrollView, StyleSheet, PixelRatio } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Item from "../components/Item/Item";
import BackButton from './../components/BackButton/BackButton';

export default function Search() {
  const route = useRoute();
  const navigation = useNavigation();
  const { pesquisa, pizza } = route.params;

  function filtrarArrayDeObjetos(arrayDeObjetos, arrayDeStrings) {
    return arrayDeObjetos.filter(objeto => {
      for (let i = 0; i < arrayDeStrings.length; i++) {
        const string = arrayDeStrings[i];
        const values = Object.values(objeto);
        if (values.some(value => typeof value === 'string' && value.includes(string))) {
          return true;
        }
      }
      return false;
    });
  }

  const objetosFiltrados = filtrarArrayDeObjetos(pizza, pesquisa);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <BackButton />
      <Text style={styles.text}>mostrando resultados para: {pesquisa}</Text>
      <ScrollView>
        {objetosFiltrados.map((pizza, index) => (
          <Item pizza={pizza} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    color: "#8e1c1c",
    textAlign: "center",
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(5)
  }
})
