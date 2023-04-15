import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Register() {
    
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("usuario");

  function Cadastrar() {
      const body = { nome, cpf, email, senha, tipo };

      fetch("https://localhost:44383/api/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then((response) => { alert("Usuário cadastrado com sucesso"); })
        .then(() => {navigation.navigate('Home')})
        .catch((error) => {
            console.log(error);
            alert("Erro ao cadastrar resultado");
        });
}
  const navigation = useNavigation()
  return (
    <View style={styles.dockerauth}>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>name</Text>
        <TextInput 
        placeholder="name" 
        value={nome}
        onChangeText={(texto) => setNome(texto)} 
        style={styles.input} />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>cpf</Text>
        <TextInput 
        placeholder="cpf"
        value={cpf}
        onChangeText={(texto) => setCPF(texto)} 
        style={styles.input} />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>e-mail</Text>
        <TextInput
          placeholder="youremail@email.com"
          value={email}
          onChangeText={(texto) => setEmail(texto)} 
          style={styles.input}
          autoComplete={"email"}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>password</Text>
        <TextInput
          secureTextEntry
          placeholder="yourpassword"
          value={senha}
          onChangeText={(texto) => setSenha(texto)} 
          placeholderTextColor={"#8e1c1a"}
          style={styles.input}
        />
        <TextInput
          value={'usuario'}
          onChangeText={(texto) => setTipo(texto)} 
          style={{display: 'none'}}
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
    marginVertical: 10
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
