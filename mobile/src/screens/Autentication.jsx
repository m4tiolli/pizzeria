import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Autentication = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <View style={styles.docker}>
      <Image
        source={require("../assets/logo2.png")}
        style={{  height: 120, width: 120 }}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={toggleForm}>
          <Text style={styles.text}>log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleForm}>
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
        <TextInput placeholder="youremail@email.com" style={styles.input} />
      </View>
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
    gap: 20,
  },
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
});

export default Autentication;
