import { useFonts, Poppins_300Light_Italic, Poppins_400Regular_Italic } from "@expo-google-fonts/poppins";
import { View, Image, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
export default function Landing() {
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
            <TextInput placeholder="pesquisar por pizzas" style={{fontFamily: 'Poppins_600SemiBold'}} />
            <Icon name="search1" size={'60%'} color={"#8e1c1c"} />
          </View>
        </View>
      </View>
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
