import { View, Text, TextInput, Modal, Alert, PixelRatio, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from "react";
import Address from "../components/Address/Address";
import { RadioButton } from "react-native-paper";

function AddressMethods() {
    const [modalNewVisible, setModalNewVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#efefef",
            alignItems: 'center',
            paddingTop: "20%"
        }}>
            <Text style={{
                fontFamily: 'Poppins_500Medium',
                fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
                color: "#8e1c1a",
                marginVertical: PixelRatio.getPixelSizeForLayoutSize(7)
            }}>your saved address</Text>

            <Address />
            <Address />
            <Address />

            <TouchableOpacity style={styles.addnew1} onPress={() => setModalNewVisible(!modalNewVisible)}>
                <AntDesign name="plus" size={PixelRatio.getPixelSizeForLayoutSize(7)} color={"#8e1c1a"} />
                <Text style={{ fontFamily: 'Poppins_400Regular', color: "#8e1c1a" }}>add new</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalNewVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalNewVisible(!modalNewVisible);
                }}>
                <View style={styles.modalcontainer} onPress={() => setModalNewVisible(!modalNewVisible)}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModalNewVisible(!modalNewVisible)} style={{ position: 'absolute', top: PixelRatio.getPixelSizeForLayoutSize(2), right: PixelRatio.getPixelSizeForLayoutSize(2) }} >
                            <AntDesign name="close" color="#8e1c1a" size={PixelRatio.getPixelSizeForLayoutSize(15)} /></TouchableOpacity>
                        <Text style={styles.text1}>save new address</Text>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: home"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>uf</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: SP"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>postal code</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: 12345-678"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>city</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Santana de Parnaiba"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>street</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Rua Ermelinda"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: 0123"
                                underlineColorAndroid="transparent"
                                placeholderTextColor={"#898989"}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
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

export default AddressMethods;