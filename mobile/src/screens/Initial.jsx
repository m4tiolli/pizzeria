import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  PixelRatio,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Loading from "../components/Loading";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect } from "react";
import { ChecarLoginUsuario } from "../components/AuthContext";

export default function Initial() {
  const navigation = useNavigation();
  async function ValidarLogin() {
    const login = await ChecarLoginUsuario();
    if (login == true) {
      navigation.navigate("Home")
    }
  }

  useEffect(() => {
    ValidarLogin()
  }, [])

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) return <Loading />;


  return (
    <View style={styles.docker} gap={30}>
      <Image
        source={require("../assets/text.png")}
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(50),
          height: PixelRatio.getPixelSizeForLayoutSize(63),
          marginVertical: 60,
        }}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Autentication");
          }}
        >
          <SimpleLineIcons
            name="login"
            size={PixelRatio.getPixelSizeForLayoutSize(8)}
            color="#fff"
          />
          <Text style={styles.text}>log in or register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <FontAwesome
            name="user"
            size={PixelRatio.getPixelSizeForLayoutSize(8)}
            color="#fff"
          />
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
    gap: 120,
  },
  button: {
    backgroundColor: "#8E1C1A",
    width: 270,
    height: 40,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttons: {
    gap: 30,
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
