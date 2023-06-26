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
import { DadosUsuario } from "../AuthContext";
import { useNavigation } from "@react-navigation/native";

function Address({ endereco }) {
    //Navegação
    const navigation = useNavigation();
    //Checar
    const [checked, setChecked] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);

    //Dados do endereço
    const [address, setAddress] = useState();

    //Campos para editar
    const [uf, setUF] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numCasa, setNumCasa] = useState("");
    const [cep, setCep] = useState("");

    //Dados do usuario
    const [usuario, setUsuario] = useState("");

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
    }, []);

    useEffect(() => {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco/" + endereco?.id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => setAddress(json))
            .catch((err) => {
                console.log(err);
                alert("Erro ao buscar");
            });
    }, []);

    useEffect(() => {
        if (address) {
            setUF(address?.uf);
            setCidade(address?.cidade);
            setBairro(address?.bairro);
            setRua(address?.rua);
            setNumCasa(address?.numCasa);
            setCep(address?.cep);
        }
    }, [address]);

    //Corpo para edição de dados
    const body = { idendereco: endereco?.id, uf, cidade, bairro, rua, numCasa, cep };

    function AlterarEndereco() {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((response) => {
                alert("Dados editados com sucesso");
            })
            .then(() => setModalEditVisible(!modalEditVisible))
            .catch((err) => {
                console.log(err);
                alert("Erro ao editar os usuarios");
            });
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.text1}>{endereco.rua}</Text>
                <Text style={styles.text2}>{endereco.cep}</Text>
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
                        <Text style={styles.text1}>edit an address</Text>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>uf</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: SP"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                                onChangeText={setUF}
                                value={endereco.uf}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>city</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Santana de Parnaiba"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                                onChangeText={setCidade}
                                value={cidade}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>street</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Rua Ermelinda"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                                onChangeText={setRua}
                                value={rua}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>neighborhood</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Jardim Flores"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                                onChangeText={setBairro}
                                value={bairro}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: 0123"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                                onChangeText={setNumCasa}
                                value={numCasa}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={AlterarEndereco}
                        >
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

export default Address;
