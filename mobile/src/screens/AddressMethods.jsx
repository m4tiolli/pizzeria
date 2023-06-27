import { View, Text, TextInput, Modal, PixelRatio, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Address from "../components/Address/Address";
import axios from 'axios';
import { DadosUsuario } from "../components/AuthContext";
import BackButton from "../components/BackButton/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddressMethods() {
    const [modalNewVisible, setModalNewVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [rua, setRua] = useState("");
    const [numCasa, setNumCasa] = useState("");
    const [cep, setCEP] = useState("");
    const [uf, setUF] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [tipo, setTipo] = useState("");

    const [isLoading, setIsLoading] = useState(true)

    const [enderecos, setEnderecos] = useState([]);

    const [usuario, setUsuario] = useState();

    async function PreencherDados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
        ListarEndereco(jwt.ID);
    }

    useEffect(() => {
        PreencherDados();
    }, []);

    AsyncStorage.setItem("enderecos", JSON.stringify(enderecos));

    async function buscarEndereco() {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;
            setRua(data.logradouro);
            setCidade(data.localidade);
            setBairro(data.bairro);
            setUF(data.uf);
            setCEP(data.cep)
        } catch (error) {
            console.log(error);
        }
    }

    function ListarEndereco(id) {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco/listarenderecos?id=" + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setEnderecos(data);
                    setIsLoading(false)
                } else {
                    setEnderecos([]);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar endereços.");
            });
    }

    function CadastrarEndereco() {
        const body = { idusuario: usuario?.ID, uf, cidade, bairro, rua, numCasa, cep }
        fetch("https://pizzeria3.azurewebsites.net/api/endereco", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
            .then((response) => alert("Endereço cadastrado com sucesso."))
            .then(() => navigation.goBack())
            .catch((erro) => console.log(erro))
    }

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#efefef",
            alignItems: 'center',
            paddingTop: "20%"
        }}>
            <BackButton />
            <Text style={{
                fontFamily: 'Poppins_500Medium',
                fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
                color: "#8e1c1a",
                marginVertical: PixelRatio.getPixelSizeForLayoutSize(7)
            }}>your saved address</Text>
            {isLoading ? <ActivityIndicator size={"large"} color={"#8e1c1a"} /> :
                enderecos.map((endereco, index) => (
                    <Address key={index} endereco={endereco} />
                ))
            }

            <TouchableOpacity style={styles.addnew1} onPress={() => setModalNewVisible(!modalNewVisible)}>
                <AntDesign name="plus" size={PixelRatio.getPixelSizeForLayoutSize(7)} color={"#8e1c1a"} />
                <Text style={{ fontFamily: 'Poppins_400Regular', color: "#8e1c1a" }}>add new</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalNewVisible}
                onRequestClose={() => {
                    setModalNewVisible(!modalNewVisible);
                }}>
                <View style={styles.modalcontainer} onPress={() => setModalNewVisible(!modalNewVisible)}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModalNewVisible(!modalNewVisible)} style={{ position: 'absolute', top: PixelRatio.getPixelSizeForLayoutSize(2), right: PixelRatio.getPixelSizeForLayoutSize(2) }} >
                            <AntDesign name="close" color="#8e1c1a" size={PixelRatio.getPixelSizeForLayoutSize(15)} /></TouchableOpacity>
                        <Text style={styles.text1}>save new address</Text>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>postal code</Text>
                            <TextInput
                                value={cep}
                                onChangeText={(texto) => setCEP(texto)}
                                onSubmitEditing={buscarEndereco}
                                style={styles.input}
                                placeholder="Ex: 12345-678"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>name</Text>
                            <TextInput
                                value={tipo}
                                onChangeText={(texto) => setTipo(texto)}
                                style={styles.input}
                                placeholder="Ex: home"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>uf</Text>
                            <TextInput
                                value={uf}
                                onChangeText={(texto) => setUF(texto)}
                                style={styles.input}
                                placeholder="Ex: SP"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>city</Text>
                            <TextInput
                                value={cidade}
                                onChangeText={(texto) => setCidade(texto)}
                                style={styles.input}
                                placeholder="Ex: Santana de Parnaiba"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>street</Text>
                            <TextInput
                                value={rua}
                                onChangeText={(texto) => setRua(texto)}
                                style={styles.input}
                                placeholder="Ex: Rua Ermelinda"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>number</Text>
                            <TextInput
                                value={numCasa}
                                onChangeText={(texto) => setNumCasa(texto)}
                                style={styles.input}
                                placeholder="Ex: 0123"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={CadastrarEndereco}>
                            <Text style={{ fontFamily: 'Poppins_500Medium', color: '#efefef', fontSize: PixelRatio.getPixelSizeForLayoutSize(9) }}>confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View></Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    addnew1: {
        backgroundColor: "#efefef",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '30%',
        height: PixelRatio.getPixelSizeForLayoutSize(10),
        borderRadius: 5,
    },
    text1: {
        fontFamily: 'Poppins_500Medium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        color: "#8e1c1a",
        textAlign: 'center'
    },
    text2: {
        fontFamily: 'Poppins_300Light_Italic',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
        color: "#898989",
    },
    modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'none'
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        backgroundColor: '#8e1c1c',
        borderRadius: 5,
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
        width: '80%',
        height: PixelRatio.getPixelSizeForLayoutSize(25),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    }
});