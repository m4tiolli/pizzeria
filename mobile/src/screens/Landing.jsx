import { View, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import Loading from '../components/Loading'
import {
  useFonts, Poppins_100Thin,
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
  Poppins_900Black_Italic
} from "@expo-google-fonts/poppins";
import Item from "../components/Item/Item";

export default function Landing() {
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
    Poppins_900Black_Italic
  });
  if (!fontsLoaded) return <Loading />;
  return (
    <View style={styles.docker}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo2.png")}
          style={{ width: 60, height: 60 }}
        />
        <View style={styles.searchs}>
          <Icon name="filter" size={40} color={"#8e1c1c"} />
          <View style={styles.input}>
            <TextInput placeholder="pesquisar por pizzas" style={{ fontFamily: 'Poppins_300Light_Italic', outline: 'none' }} />
            <Icon name="search1" size={'150%'} color={"#8e1c1c"} />
          </View>
        </View>
      </View>
      <ScrollView>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  docker: {
    width: "100%",
    height: "100%",
  },
  header: {
    height: "15%",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchs: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  input: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    alignItems: 'center',
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 10,
    borderRadius: 5
  },
});
