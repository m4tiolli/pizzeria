import {
  Text,
  View,
  StyleSheet,
  PixelRatio,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
function Payment({ cartao }) {
  const [modalEditVisible, setModalEditVisible] = useState(false);

  const [nome, setName] = useState("");
  const [numero, setNumber] = useState("");
  const [datavalidade, setData] = useState("");

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

  useEffect(() => {
    if (cartao) {
      setName(cartao.nome);
      setNumber(cartao.numero);
      setData(cartao.datavalidade);
    }
  }, [cartao])

  //Corpo para edição de dados
  const body = { id_usuario: Number(cartao?.id_usuario), numero, nome, datavalidade };

  function AlterarCartão() {
    fetch("https://pizzeria3.azurewebsites.net/api/endereco", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        alert("Cartão editado com sucesso");
      })
      .then(() => setModalEditVisible(!modalEditVisible))
      .catch((err) => {
        console.log(err);
        alert("Erro ao editar o cartão");
      });
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.text1}>{cartao.nome}</Text>
        <Text style={styles.text2}>{cartao.numero + " " + cartao.cvc}</Text>
      </View>
      <TouchableOpacity onPress={() => setModalEditVisible(true)}>
        <AntDesign
          name="edit"
          color="#8e1c1a"
          size={PixelRatio.getPixelSizeForLayoutSize(8)}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEditVisible}
        onRequestClose={() => {
          setModalEditVisible(!modalEditVisible);
        }}
      >
        <View
          style={styles.modalcontainer}
          onPress={() => setModalEditVisible(!modalEditVisible)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalEditVisible(!modalEditVisible)}
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
            <Text style={styles.text1}>edit payment info</Text>
            <View style={styles.boxinput}>
              <Text style={styles.textinput}>name</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: home"
                underlineColorAndroid="transparent"
                placeholderTextColor={"#898989"}
                value={nome}
                onChangeText={setName}
                selectTextOnFocus={true}
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
                value={numero}
                selectTextOnFocus={true}
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
                value={datavalidade}
                selectTextOnFocus={true}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={AlterarCartão}>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  color: "#efefef",
                  fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
                }}
              >
                save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    width: "70%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  text1: {
    fontFamily: "Poppins_500Medium",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    color: "#8e1c1a",
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

export default Payment;
