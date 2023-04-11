import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import Loading from "../components/Loading";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const Autentication = () => {


  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) return <Loading />;

  return (
    <View style={styles.docker}>
      <View style={{justifyContent:'center', alignItems: 'baseline', paddingBottom: 20}}>
        <Image
          source={require("../assets/logo2.png")}
          style={{ height: 120, width: 120 }}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          disabled={isLoginFormVisible}
          onPress={toggleForm}
        >
          <Text style={styles.text}>log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          disabled={!isLoginFormVisible}
          onPress={toggleForm}
        >
          <Text style={styles.text}>register</Text>
        </TouchableOpacity>
      </View>
      {isLoginFormVisible ? <Login/> : <Register/>}
    </View>
  );
};

const styles = StyleSheet.create({
  docker: {
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttons: {
    width: "70%",
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
    marginBottom: 30
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: "#8E1C1A",
    fontSize: 25,
    letterSpacing: 1,
  },
  dockerauth: {
    width: "100%",
    height: "40%",
    backgroundColor: "#efefef",
    alignItems: "center",
    gap: 30,
  },
  boxinput: {
    width: "50%",
    height: 40,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#8E1C1A",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    top: -14,
    left: 10,
    color: "#8E1C1A",
    backgroundColor: "#efefef",
    fontFamily: "Poppins_600SemiBold",
    position: "absolute",
    padding: 2,
  },
  input: {
    width: "90%",
    height: "85%",
    borderRadius: 2,
    backgroundColor: "#efefef",
    outlineStyle: "none",
    color: "#8E1C1A",
    fontFamily: "Poppins_400Regular",
    fontWeight: 200,
  },
  next: {
    backgroundColor: "#8E1C1A",
    width: "50%",
    height: 55,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  nexttext: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
  },
});

export default Autentication;
