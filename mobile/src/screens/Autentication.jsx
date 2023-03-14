import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from "@expo-google-fonts/poppins";
import Loading from "../components/Loading";



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
      <Image
        source={require("../assets/logo2.png")}
        style={{ height: 120, width: 120 }}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} disabled={isLoginFormVisible} onPress={toggleForm}>
          <Text style={styles.text}>log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, underline]} disabled={!isLoginFormVisible} onPress={toggleForm}>
          <Text style={styles.text}>register</Text>
        </TouchableOpacity>
      </View>
      {isLoginFormVisible ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

const LoginForm = () => {
  return (
    <View style={styles.dockerauth}>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>e-mail</Text>
        <TextInput
          placeholder="youremail@email.com"
          style={styles.input}
          autoComplete={"email"}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>password</Text>
        <TextInput
          secureTextEntry
          placeholder="yourpassword"
          placeholderTextColor={"#8e1c1a"}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.next}>
        <Text style={styles.nexttext}>login</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterForm = () => {
  return (
    <View style={styles.dockerauth}>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>name</Text>
        <TextInput placeholder="matiolli" style={styles.input} />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>cpf</Text>
        <TextInput placeholder="999.999.999-99" style={styles.input} />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>e-mail</Text>
        <TextInput
          placeholder="youremail@email.com"
          style={styles.input}
          autoComplete={"email"}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>password</Text>
        <TextInput
          secureTextEntry
          placeholder="yourpassword"
          placeholderTextColor={"#8e1c1a"}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.next}>
        <Text style={styles.nexttext}>register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  docker: {
    backgroundColor: "#efefef",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
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
