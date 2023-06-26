import React, { useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import AddressButton from "../components/AddressButton/AddressButton";

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

    const handleSelectAddress = (enderecoId) => {
        const updatedPedido = { ...pedido, endereco:{id:enderecoId} };
        // Atualizar o estado do pedido com o ID do endereço selecionado
        setPedido(updatedPedido);
        fetch("https://pizzeria3.azurewebsites.net/api/pedido", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(upPedido),
        })
            .then((response) => {
                alert("Pedido criado com sucesso");
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao criar pedido");
            });
    };

    console.log(upPedido)


    return (
        <View>
            <Text>Selecione o seu endereço</Text>

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

export default SelectAddress;
