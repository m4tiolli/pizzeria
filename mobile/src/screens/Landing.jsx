import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Loading from "../components/Loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import Item from "../components/Item/Item";

export default function Landing() {
  useEffect(() => {
    fetch("https://localhost:44383/api/pizza", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUsuarios(json);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar pizzas");
      });
  }, []);

  const [usuarios, setUsuarios] = useState([]);
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) return <Loading />;

  return (
    <View style={styles.docker}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <Image
          source={require("../assets/logo2.png")}
          style={{ height: '30%' }}
        />
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Icon name="filter" size={30} color={"#8e1c1c"} />
          <View style={styles.input}>
            <TextInput
              placeholder="pesquisar por pizzas"
              style={{
                fontFamily: "Poppins_300Light_Italic",
                outline: "none",
                paddingRight: "20%",
                paddingLeft: 10,
              }}
            />
            <Icon name="search1" size={30} color={"#8e1c1c"} />
          </View>
        </View>
      </View>
      <ScrollView style={{ paddingBottom: 400 }}>
        {usuarios.map((pizza, index) => (
          <Item pizza={pizza} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  docker: {
    width: "100%",
    height: "100%",
    backgroundColor: "#efefef",
  },
  header: {
    height: "10%",
    flexDirection: "col",
    alignItems: 'center'
  },
  input: {
    flexDirection: "row",
    width: "70%",
    height: "60%",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#efefef",
  },
});
