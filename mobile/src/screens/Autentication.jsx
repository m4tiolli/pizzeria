import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Loading from "../components/Loading";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const Tab = createMaterialTopTabNavigator();

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
        <Image source={require('../assets/logo2.png')} style={{width: 140, height: 140}}/>
        <Tab.Navigator
      initialRouteName="Login"
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarLabel: "login" }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{ tabBarLabel: "register" }}
      />
    </Tab.Navigator>
        </View>
  );
};

const styles = StyleSheet.create({
  docker: {
    backgroundColor: "#efefef",
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttons: {
    width: "70%",
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: "#8E1C1A",
    fontSize: 20,
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

const underline = StyleSheet.create({
  under: {
    textDecorationLine: 'underline',
    textDecorationColor: '#8e1c1a',
  },
});

export default Autentication;
