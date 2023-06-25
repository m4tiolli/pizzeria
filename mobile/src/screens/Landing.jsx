import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  PixelRatio,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Item from "../components/Item/Item";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Drawer } from "react-native-drawer-layout";
import { CheckBox } from "@rneui/themed";

export default function Landing() {
  const [pesquisas, setPesquisas] = useState([]);
  const [checkboxes, setCheckboxes] = useState({
    grande: false,
    pequena: false,
    doce: false,
    salgada: false,
    bebida: false,
    sobremesa: false,
  });
  const [pesquisasFormatadas, setPesquisasFormatadas] = useState("");

  const handleCheckboxPress = (checkboxName) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  useEffect(() => {
    let atLeastOneCheckboxChecked = false;
    for (const checkboxName in checkboxes) {
      if (checkboxes[checkboxName]) {
        atLeastOneCheckboxChecked = true;
        break;
      }
    }
    const updatedPesquisas = Object.keys(checkboxes).filter(
      (checkboxName) => checkboxes[checkboxName]
    );
    setPesquisas(updatedPesquisas);

    let pesquisasFormatadas = "";
    if (updatedPesquisas.length === 1) {
      pesquisasFormatadas = updatedPesquisas[0];
    } else {
      pesquisasFormatadas = updatedPesquisas.join(", ");
    }
    setPesquisasFormatadas(pesquisasFormatadas);
  }, [checkboxes]);

  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pizzeria3.azurewebsites.net/api/produto",
          {
            method: "GET",
          }
        );
        const json = await response.json();
        setPizza(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
       alert("Erro ao buscar pizzas")
      }
    };
    fetchData();
  }, []);

  const navigation = useNavigation();

  const [texto, setTexto] = useState("");
  const [valorEnviado, setValorEnviado] = useState("");

  useEffect(() => {
    const delayDeDigitacao = 1000;

    const timeoutId = setTimeout(() => {
      setValorEnviado(texto);
      if (texto !== "") {
        setPesquisas([...pesquisas, texto]);
      }
    }, delayDeDigitacao);

    return () => clearTimeout(timeoutId);
  }, [texto]);

  const handleChangeTexto = (novoTexto) => {
    setTexto(novoTexto);
  };

  const [pizza, setPizza] = useState([]);
  if (isLoading)
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={"#8e1c1a"} />
      </View>
    );

  return (
    <View style={styles.docker}>
      <View style={styles.header}>
        <Image
          source={require("../assets/text.png")}
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(20),
            width: PixelRatio.getPixelSizeForLayoutSize(16),
          }}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity onPress={() => setOpen((prevOpen) => !prevOpen)}>
            <Icon
              name="filter"
              size={PixelRatio.getPixelSizeForLayoutSize(10)}
              color={"#8e1c1c"}
            />
          </TouchableOpacity>
          <View style={styles.input}>
            <TextInput
              placeholder="search for pizzas"
              style={{
                fontFamily: "Poppins_300Light_Italic",
                outline: "none",
                paddingRight: "40%",
                paddingLeft: 10,
              }}
              onChangeText={handleChangeTexto}
              value={texto}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Search", {
                  pesquisa: pesquisas,
                  pizza: pizza,
                })
              }
            >
              <Icon
                name="search1"
                size={PixelRatio.getPixelSizeForLayoutSize(10)}
                color={"#8e1c1c"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {open ? (
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          renderDrawerContent={() => {
            return (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#efefef",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "70%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setOpen((prevOpen) => !prevOpen)}
                  >
                    <Icon
                      name="close"
                      size={PixelRatio.getPixelSizeForLayoutSize(10)}
                      color={"#8e1c1c"}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "Poppins_300Light",
                      fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
                      color: "#8e1c1a",
                    }}
                  >
                    filter by:
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checked={checkboxes.grande}
                    onPress={() => handleCheckboxPress('grande')}
                    iconType="material-icons-outlined"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#8e1e1a"
                    uncheckedColor="#8e1e1a"
                    containerStyle={{ backgroundColor: "#efefef" }}
                  />
                  <Text style={styles.checkText}>pizzas grandes</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checked={checkboxes.pequena}
                    onPress={() => handleCheckboxPress('pequena')}
                    iconType="material-icons-outlined"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#8e1e1a"
                    uncheckedColor="#8e1e1a"
                    containerStyle={{ backgroundColor: "#efefef" }}
                  />
                  <Text style={styles.checkText}>pizzas pequenas</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checked={checkboxes.salgada}
                    onPress={() => handleCheckboxPress('salgada')}
                    iconType="material-icons-outlined"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#8e1e1a"
                    uncheckedColor="#8e1e1a"
                    containerStyle={{ backgroundColor: "#efefef" }}
                  />
                  <Text style={styles.checkText}>pizzas salgadas</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checked={checkboxes.doce}
                    onPress={() => handleCheckboxPress('doce')}
                    iconType="material-icons-outlined"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#8e1e1a"
                    uncheckedColor="#8e1e1a"
                    containerStyle={{ backgroundColor: "#efefef" }}
                  />
                  <Text style={styles.checkText}>pizzas doces</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checked={checkboxes.bebida}
                    onPress={() => handleCheckboxPress('bebida')}
                    iconType="material-icons-outlined"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#8e1e1a"
                    uncheckedColor="#8e1e1a"
                    containerStyle={{ backgroundColor: "#efefef" }}
                  />
                  <Text style={styles.checkText}>bebidas</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checked={checkboxes.sobremesa}
                    onPress={() => handleCheckboxPress('sobremesa')}
                    iconType="material-icons-outlined"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#8e1e1a"
                    uncheckedColor="#8e1e1a"
                    containerStyle={{ backgroundColor: "#efefef" }}
                  />
                  <Text style={styles.checkText}>sobremesas</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#8e1c1a",
                      width: "70%",
                      height: PixelRatio.getPixelSizeForLayoutSize(17),
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                    onPress={() =>
                      navigation.navigate("Search", {
                        pesquisa: pesquisas,
                        pizza: pizza,
                      })
                    }
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        color: "#fff",
                        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
                      }}
                    >
                      filter
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        ></Drawer>
      ) : (
        <ScrollView
          style={{ marginBottom: PixelRatio.getPixelSizeForLayoutSize(2), paddingBottom: PixelRatio.getPixelSizeForLayoutSize(20), paddingTop: PixelRatio.getPixelSizeForLayoutSize(5) }}
        >
          {pizza.map((pizza, index) => (
            <Item pizza={pizza} key={index} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  docker: {
    width: "100%",
    height: "100%",
    backgroundColor: "#efefef",
  },
  header: {
    height: "20%",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
    backgroundColor: "#efefef",
  },
  input: {
    flexDirection: "row",
    width: "80%",
    height: PixelRatio.getPixelSizeForLayoutSize(15),
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#efefef",
    elevation: 5,
  },
  checkText: {
    color: "#8e1c1a",
    fontFamily: "Poppins_400Regular",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },
});
