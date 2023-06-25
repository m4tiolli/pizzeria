import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { DadosUsuario } from "../components/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function EditUser() {
  //Navegação
  const navigation = useNavigation();

  //Dados para edição do usuario
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  //Dados usuario
  const [usuario, setUsuario] = useState();

  //Dados por id
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
      const response = await fetch(`https://localhost:44383/api/usuario/${jwt.ID}`, {
        method: "GET",
      });
      if (response.ok) {
        const json = await response.json();
        console.log(json)
        setUsuarioID(json);
      } else {
        throw new Error("Erro ao buscar usuário por ID");
      }
    } else {
      throw new Error("ID do usuário não definido");
    }
  }
  const body = { email, cpf };

  function ALterarDados() {
    useEffect(() => {
      fetch("https://localhost:44383/api/usuario", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => {
          alert("Dados alterados com sucesso");
        })
        .then(() => navigation.navigate("Settings"))
        .catch((err) => {
          console.log(err);
          alert("Erro ao editar usuarios");
        });
    });
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>{usuario?.ID}</Text>
      <Text>{usuario?.Email}</Text>
      <Text>{usuario?.CPF}</Text>
      <TouchableOpacity
        onPress={() => console.log(usuario?.ID)}
      >
        <Text>Teste console</Text>
      </TouchableOpacity>
      <Text>{usuarioPorID?.email}</Text>
      <Text>{usuarioPorID?.cpf}</Text>
    </View>
  );
}
