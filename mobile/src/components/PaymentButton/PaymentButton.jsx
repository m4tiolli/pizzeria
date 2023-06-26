import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
} from "react-native";
function PaymentButton({ cartao, onSelectCartao }) {

    return (
        <TouchableOpacity onPress={() => onSelectCartao(cartao)}>
            <View style={styles.container}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.text1}>{cartao.nome}</Text>
                    <Text style={styles.text2}>{cartao.numero + " " + cartao.cvc}</Text>
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
    }
});

export default PaymentButton;
