import React, { useState } from "react";
import { View, Text, PixelRatio, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import BackButton from './../components/BackButton/BackButton';
import PaymentButton from "../components/PaymentButton/PaymentButton";

function SelectPayment() {
    const navigation = useNavigation();
    const route = useRoute();
    let { pedido } = route.params;
    const [cartoes, setCartoes] = useState([]);


    useFocusEffect(
        React.useCallback(() => {
            const getCartoes = async () => {
                const cartoesData = await AsyncStorage.getItem("cartoes");
                if (cartoesData !== null) {
                    const parsedData = JSON.parse(cartoesData);
                    setCartoes(parsedData);
                }
            };
            getCartoes();
        }, [])
    );

    const handleSelectCartao = (cartao) => {
        navigation.navigate("Cartao", { pedido: pedido })
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={[styles.text, { marginVertical: PixelRatio.getPixelSizeForLayoutSize(10) }]}>select you payment method</Text>

            {
                cartoes.map((cartao, index) => (
                    <PaymentButton
                        cartao={cartao}
                        key={index}
                        onSelectCartao={handleSelectCartao}
                    />
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: "#8e1c1a",
        textAlign: 'left',
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }
})


export default SelectPayment;
