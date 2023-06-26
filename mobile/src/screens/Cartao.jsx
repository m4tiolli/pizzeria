import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, PixelRatio, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

function Cartao() {
    const navigation = useNavigation();
    const route = useRoute();
    const { pedido } = route.params;

    const nomesItens = pedido.itens.map(item => item.Nome);

    fetch("https://pizzeria3.azurewebsites.net/api/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
    })
        .then((response) => {
            alert("Pedido criado com sucesso");
        })
        .catch((error) => {
            console.log(error);
            alert("Erro ao criar pedido");
        });

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#efefef",
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <AntDesign name="checkcircle" size={PixelRatio.getPixelSizeForLayoutSize(40)} color={'#698C3D'} />
            <Text style={{ fontFamily: 'Poppins_400Regular', color: '#698C3D', marginVertical: PixelRatio.getPixelSizeForLayoutSize(10), fontSize: PixelRatio.getPixelSizeForLayoutSize(8) }}>successful payment</Text>
            <Text style={{ fontFamily: 'Poppins_400Regular', color: '#8e1c1c', marginVertical: PixelRatio.getPixelSizeForLayoutSize(10), fontSize: PixelRatio.getPixelSizeForLayoutSize(5), width: '70%', textAlign: 'center' }}>we will let you know when your order is complete.</Text>
            <TouchableOpacity style={styles.copy} onPress={() => navigation.navigate("Home")}>
                <Text style={{ fontFamily: 'Poppins_500Medium', color: '#efefef' }}>back home</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <View style={styles.linha}>
                    <Text style={styles.text1}>address</Text>
                    <Text style={styles.text1}>{pedido.endereco ? pedido.endereco.rua + ", " + pedido.endereco.numCasa : pedido.tipo}</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.text1}>products</Text>
                    <Text style={styles.text1}>{nomesItens.map((nome) => (
                        nome + ", "
                    ))}</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.text1}>total</Text>
                    <Text style={styles.text1}>R${pedido.valorTotal}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        color: "#8e1c1a",
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(10)
    },
    text1: {
        fontFamily: 'Poppins_400Regular',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6)
    },
    copy: {
        backgroundColor: '#8e1c1c',
        borderRadius: 5,
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
        width: '40%',
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    }
})

export default Cartao;