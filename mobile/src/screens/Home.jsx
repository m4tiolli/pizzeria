import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Icon from "react-native-vector-icons/SimpleLineIcons";


export default function Home() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  return (
    <View style={styles.docker}>
      <Image
        source={require("../assets/logo2.png")}
        style={{ width: 170, height: 170 }}
      />
      <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Autentication");
        }}
      >
        <Icon name="login" size={30} color="#fff" />
        <Text style={styles.text}>log in or register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Autentication");
        }}
      >
        <Image source={require('../assets/iconuser.png')} style={{width: 30, height: 30}} />
        <Text style={styles.text}>enter as a guest</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  docker: {
    backgroundColor: "#efefef",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 120
  },
  button: {
    backgroundColor: "#8E1C1A",
    width: 270,
    height: 40,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    gap: 30
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: "#fff",
    fontSize: 20,
    letterSpacing: 1,
  },
});