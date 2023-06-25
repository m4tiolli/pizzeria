import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, PixelRatio, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import Success from "./Success";
import { useState, useEffect } from "react";

function Pix() {


    const [primeiroComponente, setPrimeiroComponente] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPrimeiroComponente(!primeiroComponente);
        }, 8000); // Define o tempo em milissegundos, neste caso 3 segundos

        return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado antes do tempo definido

    }, []); // O array vazio [] indica que esse efeito só será executado uma vez, equivalente ao componentDidMount

    if (primeiroComponente) {
        return (
            <Success />
        );
    }

    const navigation = useNavigation();
    const route = useRoute();
    const { pedido } = route.params;

    const chavePix = '83e125e3-2db6-4b6b-9e96-c265a61c3a3a';
    const nomeRecebedor = 'gabriel';
    const valor = pedido.valor;

    const payload = `PIX:02|${chavePix}*|${nomeRecebedor}|${valor}|`;

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#efefef",
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={styles.text}>confirm payment</Text>
            <QRCode
                value={payload}
                size={PixelRatio.getPixelSizeForLayoutSize(80)}
                backgroundColor="#efefef"
                color="#8e1c1c"
            />
            <TouchableOpacity style={styles.copy}>
                <Text style={{ fontFamily: 'Poppins_500Medium', color: '#efefef' }}>copy pix code</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <View style={styles.linha}>
                    <Text style={styles.text1}>address</Text>
                    <Text style={styles.text1}>{pedido.valor}</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.text1}>products</Text>
                    <Text style={styles.text1}>1x coca, 1x pizza</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.text1}>total</Text>
                    <Text style={styles.text1}>R${pedido.valor}</Text>
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

export default Pix;