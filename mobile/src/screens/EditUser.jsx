import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, PixelRatio } from "react-native";
import { DadosUsuario } from "../components/AuthContext";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton/BackButton";

export default function EditUser() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [usuario, setUsuario] = useState();

  const [usuarioPorID, setUsuarioID] = useState();

  async function Dados() {
    const jwt = await DadosUsuario();
    setUsuario(jwt);
    BuscarDados(jwt);
  }

  useEffect(() => {
    Dados();
  }, []);

  async function BuscarDados(jwt) {
    if (jwt?.ID) {
      const response = await fetch(`https://pizzeria3.azurewebsites.net/api/usuario/${jwt.ID}`, {
        method: "GET",
      });
      if (response.ok) {
        const json = await response.json();
        setUsuarioID(json);
        setSenha("");
      } else {
        throw new Error("Erro ao buscar usuário por ID");
      }
    } else {
      throw new Error("ID do usuário não definido");
    }
  }

  useEffect(() => {
    if (usuarioPorID) {
      setNome(usuarioPorID.nome);
      setCpf(usuarioPorID.cpf);
      setTelefone(usuarioPorID.telefone);
      setEmail(usuarioPorID.email);
    }
  }, [usuarioPorID]);


  function AlterarDados() {
    if (senha === usuarioPorID?.senha) {
      const body = { nome, cpf, telefone, email, id: usuarioPorID.id};
      fetch(`https://pizzeria3.azurewebsites.net/api/usuario`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => {
          alert("Dados alterados com sucesso")
        })
        .then(() => navigation.navigate("Settings"))
        .catch((err) => {
          console.log(err);
          alert("Erro ao editar informações")
        });
    } else {
      alert("Senha incorreta");
    }
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <BackButton />
      <Text style={styles.text1}>edit your data</Text>

      <View style={styles.boxinput}>
        <Text style={styles.textinput}>name</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>cpf</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>phone</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>e-mail</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>your actual password</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry="true"
        />
      </View>


      <TouchableOpacity
        onPress={AlterarDados}
        style={styles.button}
      >
        <Text style={{ fontFamily: 'Poppins_500Medium', color: '#efefef', fontSize: PixelRatio.getPixelSizeForLayoutSize(9) }}>edit data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxinput: {
    width: PixelRatio.getPixelSizeForLayoutSize(90),
    height: PixelRatio.getPixelSizeForLayoutSize(22),
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
  button: {
    backgroundColor: '#8e1c1c',
    borderRadius: 5,
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
    width: '80%',
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  text1: {
    fontFamily: 'Poppins_500Medium',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    color: "#8e1c1a",
    textAlign: 'center'
  },
})