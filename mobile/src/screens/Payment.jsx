import { View, Text, TouchableOpacity, Image, StyleSheet, PixelRatio } from "react-native";
import pix from '../assets/pix.png'
import cc from '../assets/cc.png'
import caixa from '../assets/caixa.png'
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "../components/BackButton/BackButton";

function Payment() {
    const navigation = useNavigation()
    const route = useRoute();
    const { pedido } = route.params;
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#efefef",
                alignItems: 'center'
            }}
        >
            <BackButton />
            <Text style={[styles.text, {marginVertical: PixelRatio.getPixelSizeForLayoutSize(10)}]}>select the payment method:</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Pix", { pedido: pedido })}>
                <Image
                    source={pix}
                    style={{ width: PixelRatio.getPixelSizeForLayoutSize(10), height: PixelRatio.getPixelSizeForLayoutSize(10) }}
                />
                <Text style={styles.text}>pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectPayment", {pedido: pedido})}>
                <Image
                    source={cc}
                    style={{ width: PixelRatio.getPixelSizeForLayoutSize(10), height: PixelRatio.getPixelSizeForLayoutSize(10) }}
                />
                <Text style={styles.text}>credit card</Text>
            </TouchableOpacity>
            {pedido.tipo == "local" ?? (<TouchableOpacity style={styles.button}>
                <Image
                    source={caixa}
                    style={{ width: PixelRatio.getPixelSizeForLayoutSize(10), height: PixelRatio.getPixelSizeForLayoutSize(10) }}
                />
                <Text style={styles.text}>pay at the cashier</Text>
            </TouchableOpacity>)}
            
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        backgroundColor: "#fff",
        marginVertical: 15,
        elevation: 8,
        paddingVertical: 15
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: "#8e1c1a",
    }
});


export default Payment;
