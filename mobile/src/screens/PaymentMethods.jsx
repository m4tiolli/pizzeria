import { View, Text, PixelRatio, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Payment from "../components/Payment/Payment";

function PaymentMethods() {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#efefef",
            alignItems: 'center',
            marginTop: "20%"
        }}>
            <Text style={{
                fontFamily: 'Poppins_500Medium',
                fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
                color: "#8e1c1a",
                marginVertical: PixelRatio.getPixelSizeForLayoutSize(7)
            }}>your payment methods</Text>

            <Payment />
            <Payment />

            <TouchableOpacity style={styles.addnew1}>
                <AntDesign name="plus" size={PixelRatio.getPixelSizeForLayoutSize(7)} color={"#8e1c1a"} />
                <Text style={{ fontFamily: 'Poppins_400Regular', color: "#8e1c1a" }}>add new</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    // addnew: {
    //     backgroundColor: "#8e1c1c",
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-evenly',
    //     width: '30%',
    //     height: PixelRatio.getPixelSizeForLayoutSize(10),
    //     borderRadius: 5,
    //     elevation: 5
    // },
    addnew1: {
        backgroundColor: "#efefef",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '30%',
        height: PixelRatio.getPixelSizeForLayoutSize(10),
        borderRadius: 5,
    }
});

export default PaymentMethods;