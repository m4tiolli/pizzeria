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

function AddressButton({ endereco, onSelectAddress }) {
    //Navegação
    const navigation = useNavigation();
    //Checar
    const [checked, setChecked] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);

    //Dados do endereço
    const [address, setAddress] = useState("");

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
            setUF(endereco?.uf);
            setCidade(endereco?.cidade);
            setBairro(endereco?.bairro);
            setRua(endereco?.rua);
            setNumCasa(endereco?.numCasa);
            setCep(endereco?.cep);
        }
    }, [endereco]);

    //Corpo para edição de dados
    const body = { idusuario: usuario?.ID, uf, cidade, bairro, rua, numCasa, cep };

    function AlterarEndereco() {
        fetch("https://pizzeria3.azurewebsites.net/api/endereco", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((response) => {
                alert("Dados editados com sucesso");
            })
            .then(() => navigation.navigate("Settings"))
            .catch((err) => {
                console.log(err);
                alert("Erro ao editar os usuarios");
            });
    }

    return (
        <TouchableOpacity onPress={() => onSelectAddress(endereco)}>
            <View style={styles.container}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.text1}>{endereco.rua}</Text>
                    <Text style={styles.text2}>{endereco.cep}</Text>
                </View>
            </View>
        </TouchableOpacity>
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

export default AddressButton;
