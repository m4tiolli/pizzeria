import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import { ChecarLoginUsuario, SalvarJWT } from "../AuthContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const secondInputRef = useRef();

  const handleFirstInputSubmit = () => {
    secondInputRef.current.focus();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  useEffect(() => {
    verificarLogin();
  });

  async function verificarLogin() {
    const usuarioLogado = await ChecarLoginUsuario();
    if (usuarioLogado) {
      navigation.navigate("Home");
    }
  }

  function Login() {
    if (email == "" || senha == "") {
      alert("Preencha todos os campos.");
    } else {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("senha", senha);
      axios.post(
        "https://pizzeria3.azurewebsites.net/api/auth/login",
        formData.toString(),
        {
          headers: { "Content-type": "application/x-www-form-urlencoded" },
        }
      )
        .then((response) => {
          SalvarJWT(response.data.token)
        })
        .then(() => navigation.navigate("Home"))
        .catch((err) => {
          alert("Usuário ou senha inválidos.");
          console.log(err)
        })
    }
  }

  return (
    <View style={styles.dockerauth}>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>e-mail</Text>
        <TextInput
          style={styles.input}
          autoComplete={"email"}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          autoCorrect={false}
          returnKeyType={"next"}
          placeholder="yourmail@mail.com"
          underlineColorAndroid="transparent"
          onSubmitEditing={handleFirstInputSubmit}
          value={email}
          onChangeText={(texto) => setEmail(texto)}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>password</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            ref={secondInputRef}
            secureTextEntry={!showPassword}
            placeholderTextColor={"#999"}
            placeholder="yourpassword"
            style={[styles.input, { width: "70%" }]}
            onSubmitEditing={null}
            underlineColorAndroid="transparent"
            autoCapitalize={"none"}
            autoCorrect={false}
            returnKeyType={"next"}
            value={senha}
            onChangeText={(texto) => setSenha(texto)}
          />
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={PixelRatio.getPixelSizeForLayoutSize(8)}
              color={"#8e1c1a"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.next} onPress={() => Login()}>
        <Text style={styles.nexttext}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dockerauth: {
    width: "100%",
    height: "40%",
    backgroundColor: "#efefef",
    alignItems: "center",
  },
  boxinput: {
    width: "50%",
    height: 40,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#8E1C1A",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  textinput: {
    top: -16,
    left: 10,
    color: "#8E1C1A",
    backgroundColor: "#efefef",
    fontFamily: "Poppins_600SemiBold",
    position: "absolute",
    padding: 2,
  },
  input: {
    width: "80%",
    height: "85%",
    borderRadius: 2,
    backgroundColor: "#efefef",
    outlineStyle: "none",
    color: "#8E1C1A",
    fontFamily: "Poppins_400Regular",
  },
  next: {
    backgroundColor: "#8E1C1A",
    width: "50%",
    height: 55,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    elevation: 5,
  },
  nexttext: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
  },
});
