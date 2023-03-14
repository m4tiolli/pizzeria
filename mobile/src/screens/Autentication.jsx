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
<<<<<<< HEAD
    <View>
      <Text id="login" onPress={Alternar(log)}>Login</Text>
      <Text id="register" onPress={() => {RegisterScreen}}>Register</Text>
      <View id="autenticar" render>
      <Section />
=======
    <View style={styles.dockerauth}>
      <View style={styles.boxinput}>
        <Text style={styles.textinput}>name</Text>
        <TextInput placeholder="matiolli" style={styles.input} />
>>>>>>> 1d3c477 (bla)
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
<<<<<<< HEAD
=======
  buttons: {
    width: "70%",
    height: '5%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    color: "#8E1C1A",
    fontSize: 20,
    letterSpacing: 1,
  },
  dockerauth: {
    width: '100%',
    height: '40%',
    backgroundColor: '#efefef',
    alignItems: 'center'
  },
  boxinput: {
    width: "50%",
    height: 40,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#8E1C1A",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textinput: {
    top: -14,
    left: 10,
    color: '#8E1C1A',
    backgroundColor: '#efefef',
    fontFamily: 'Poppins_600SemiBold',
    position: 'absolute',
    padding: 2,
  },
  input: {
    width: '90%',
    height: '85%',
    borderRadius: 2,
    backgroundColor: '#efefef',
    outlineStyle: 'none'

  }
>>>>>>> 1d3c477 (bla)
});
