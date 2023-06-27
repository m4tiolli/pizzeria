import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function Register() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("usuario");

  function Cadastrar() {
    const body = { nome, cpf, email, senha, tipo };

    fetch("https://pizzeria3.azurewebsites.net/api/auth/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        alert("Usuário cadastrado com sucesso");
      })
      .then(() => {
        navigation.goBack()
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao cadastrar usúario");
      });
  }
  const navigation = useNavigation();

  const handleTextChange = (text) => {
    if (text.length <= 11) {
      let maskedText = text.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
        "$1.$2.$3-$4"
      );
      setCPF(maskedText);
    }
  };
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  const handleFirstInputSubmit = () => {
    secondInputRef.current.focus();
  };

  const handleSecondInputSubmit = () => {
    thirdInputRef.current.focus();
  };

  const handleThirdInputSubmit = () => {
    fourthInputRef.current.focus();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.dockerauth}>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>name</Text>
        <TextInput
          value={nome}
          onChangeText={(texto) => setNome(texto)}
          style={styles.input}
          placeholder="name"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="words"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          onSubmitEditing={handleFirstInputSubmit}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>cpf</Text>
        <TextInput
          value={cpf}
          onChangeText={handleTextChange}
          style={styles.input}
          keyboardType="numeric"
          placeholder="999.999.999-99"
          placeholderTextColor="#999"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          onSubmitEditing={handleSecondInputSubmit}
          ref={secondInputRef}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>e-mail</Text>
        <TextInput
          value={email}
          onChangeText={(texto) => setEmail(texto)}
          style={styles.input}
          autoComplete={"email"}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          autoCorrect={false}
          returnKeyType={"next"}
          placeholder="yourmail@mail.com"
          underlineColorAndroid="transparent"
          onSubmitEditing={handleThirdInputSubmit}
          ref={thirdInputRef}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>password</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            secureTextEntry={!showPassword}
            value={senha}
            onChangeText={(texto) => setSenha(texto)}
            style={[styles.input, {width: "70%",}]}
            autoComplete={"password"}
            returnKeyType={"next"}
            onSubmitEditing={() => Cadastrar()}
            placeholder="yourpassword"
            underlineColorAndroid="transparent"
            ref={fourthInputRef}
          />
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={PixelRatio.getPixelSizeForLayoutSize(8)}
              color={"#8e1c1a"}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          value={"usuario"}
          onChangeText={(texto) => setTipo(texto)}
          style={{ display: "none" }}
        />
      </View>
      <TouchableOpacity onPress={Cadastrar} style={styles.next}>
        <Text style={styles.nexttext}>register</Text>
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
    marginVertical: 10,
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
    elevation: 4,
  },
  nexttext: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
  },
});
