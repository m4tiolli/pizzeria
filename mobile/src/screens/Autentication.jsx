import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Autentication() {
  function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <View>
        <Text>Login Screen</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity title="Login" onPress={() => alert("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
      <View>
        <Text>Register Screen</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity title="Register" onPress={() => alert("Register")}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function Alternar() {

  }

  return (
    <View>
      <Text id="login" onPress={Alternar(log)}>Login</Text>
      <Text id="register" onPress={() => {RegisterScreen}}>Register</Text>
      <View id="autenticar" render>
      <Section />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "blue",
    borderRadius: 10,
    width: 300,
    height: 200,
  },
});
