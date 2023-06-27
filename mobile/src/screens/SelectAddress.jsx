import React, { useState } from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import AddressButton from "../components/AddressButton/AddressButton";
import BackButton from './../components/BackButton/BackButton';

function SelectAddress() {
    const navigation = useNavigation();
    const route = useRoute();
    let { pedido } = route.params;
    const [enderecos, setEnderecos] = useState([]);
    const [upPedido, setPedido] = useState() // State for storing enderecoData

    useFocusEffect(
        React.useCallback(() => {
            const getEnderecos = async () => {
                const enderecoData = await AsyncStorage.getItem("enderecos");
                if (enderecoData !== null) {
                    const parsedData = JSON.parse(enderecoData);
                    setEnderecos(parsedData);
                }
            };
            getEnderecos();
        }, [])
    );

    const handleSelectAddress = (endereco) => {
        const updatedPedido = { ...pedido, endereco };
        // Atualizar o estado do pedido com o ID do endereço selecionado    
        setPedido(updatedPedido);
        navigation.navigate("Payment", { pedido: updatedPedido })
    };

    console.log(upPedido)


    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={[styles.text, { marginVertical: PixelRatio.getPixelSizeForLayoutSize(10) }]}>select your address</Text>

            {
                enderecos.map((endereco, index) => (
                    <AddressButton
                        endereco={endereco}
                        key={index}
                        onSelectAddress={handleSelectAddress}
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

export default SelectAddress;
