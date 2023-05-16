import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
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
        <Text style={styles.nexttext} onPress={()=>{navigation.navigate("Home")}}>login</Text>
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
    marginVertical: 15
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
    marginVertical: 10
  },
  nexttext: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
  },
});
