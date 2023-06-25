import {
  View,
  Text,
  TextInput,
  Modal,
  PixelRatio,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Payment from "../components/Payment/Payment";
import { useState } from "react";
import { RadioButton } from "react-native-paper";
import BackButton from "../components/BackButton/BackButton";

function PaymentMethods() {
  const [modalNewVisible, setModalNewVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [data, setData] = useState("");

  const handleNumberChange = (text) => {
    if (text.length <= 16) {
      let maskedText = text.replace(
        /(\d{4})(\d{4})(\d{4})(\d{4})/,
        "$1 $2 $3 $4"
      );
      setNumber(maskedText);
    }
  };
  const handleCVCChange = (text) => {
    if (text.length <= 3) {
      let maskedText = text.replace(/\d/g, "*");
      setCvc(maskedText);
    }
  };
  const handleDataChange = (text) => {
    if (text.length <= 4) {
      let maskedText = text.replace(/^(\d{2})(\d{2})$/, "$1/$2");
      setData(maskedText);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efefef",
        alignItems: "center",
        paddingTop: "20%",
      }}
    >
      <BackButton />
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
          color: "#8e1c1a",
          marginVertical: PixelRatio.getPixelSizeForLayoutSize(7),
        }}
      >
        your payment methods
      </Text>

      <Payment />
      <Payment />

      <TouchableOpacity
        style={styles.addnew1}
        onPress={() => setModalNewVisible(!modalNewVisible)}
      >
        <AntDesign
          name="plus"
          size={PixelRatio.getPixelSizeForLayoutSize(7)}
          color={"#8e1c1a"}
        />
        <Text style={{ fontFamily: "Poppins_400Regular", color: "#8e1c1a" }}>
          add new
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalNewVisible}
        onRequestClose={() => {
          setModalNewVisible(!modalNewVisible);
        }}
      >
        <View
          style={styles.modalcontainer}
          onPress={() => setModalNewVisible(!modalNewVisible)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalNewVisible(!modalNewVisible)}
              style={{
                position: "absolute",
                top: PixelRatio.getPixelSizeForLayoutSize(2),
                right: PixelRatio.getPixelSizeForLayoutSize(2),
              }}
            >
              <AntDesign
                name="close"
                color="#8e1c1a"
                size={PixelRatio.getPixelSizeForLayoutSize(15)}
              />
            </TouchableOpacity>
            <Text style={styles.text1}>create new payment method</Text>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <RadioButton
                  value={checked ? "checked" : "unchecked"}
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => setChecked(!checked)}
                  color="#8e1c1a"
                />
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
                    color: "#8e1c1c",
                  }}
                >
                  debit
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <RadioButton
                  value={checked ? "unchecked" : "checked"}
                  status={checked ? "unchecked" : "checked"}
                  onPress={() => setChecked(!checked)}
                  color="#8e1c1a"
                />
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
                    color: "#8e1c1c",
                  }}
                >
                  credit
                </Text>
              </View>
            </View>
            <View style={styles.boxinput}>
              <Text style={styles.textinput}>name</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: my credit card"
                underlineColorAndroid="transparent"
                placeholderTextColor={"#898989"}
              />
            </View>
            <View style={styles.boxinput}>
              <Text style={styles.textinput}>number</Text>
              <TextInput
                style={styles.input}
                placeholder="1234 5678 9123 4567"
                underlineColorAndroid="transparent"
                placeholderTextColor={"#898989"}
                onChangeText={handleNumberChange}
                value={number}
              />
            </View>
            <View style={styles.boxinput}>
              <Text style={styles.textinput}>cvc</Text>
              <TextInput
                style={styles.input}
                placeholder="123"
                underlineColorAndroid="transparent"
                placeholderTextColor={"#898989"}
                onChangeText={handleCVCChange}
                value={cvc}
              />
            </View>
            <View style={styles.boxinput}>
              <Text style={styles.textinput}>validation data</Text>
              <TextInput
                style={styles.input}
                placeholder="07/28"
                underlineColorAndroid="transparent"
                placeholderTextColor={"#898989"}
                onChangeText={handleDataChange}
                value={data}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  color: "#efefef",
                  fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
                }}
              >
                confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  addnew1: {
    backgroundColor: "#efefef",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "30%",
    height: PixelRatio.getPixelSizeForLayoutSize(10),
    borderRadius: 5,
  },
  text1: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    color: "#8e1c1a",
    textAlign: "center",
  },
  text2: {
    fontFamily: "Poppins_300Light_Italic",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    color: "#898989",
  },
  modalcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "none",
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: PixelRatio.getPixelSizeForLayoutSize(20),
    width: PixelRatio.getPixelSizeForLayoutSize(150),
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
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
    backgroundColor: "#fff",
    fontFamily: "Poppins_600SemiBold",
    position: "absolute",
    padding: 2,
  },
  input: {
    width: "80%",
    height: "85%",
    borderRadius: 2,
    backgroundColor: "#fff",
    outlineStyle: "none",
    color: "#8E1C1A",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    backgroundColor: "#8e1c1c",
    borderRadius: 5,
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
    width: "80%",
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});

export default PaymentMethods;
