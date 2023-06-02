import { Text, View, StyleSheet, PixelRatio, Modal, TouchableOpacity, Alert, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
function Payment() {
    const [checked, setChecked] = useState('apple'); //initial choice
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <RadioButton value="apple"
                status={checked === 'apple' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('apple')}
                color="#8e1c1a"
            />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text1}>casa</Text>
                <Text style={styles.text2}>rua ermelinda, nº2</Text>
            </View><TouchableOpacity onPress={() => setModalVisible(true)}>
                <AntDesign name="edit" color="#8e1c1a" size={PixelRatio.getPixelSizeForLayoutSize(8)} />
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalcontainer}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', top: PixelRatio.getPixelSizeForLayoutSize(2), right: PixelRatio.getPixelSizeForLayoutSize(2) }} >
                            <AntDesign name="close" color="#8e1c1a" size={PixelRatio.getPixelSizeForLayoutSize(8)} /></TouchableOpacity>
                            <Text style={styles.text1}>edit payment info</Text>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: home"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="1234 5678 9123 4567"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>cvc</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="123"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.boxinput}>
                            <Text style={styles.textinput}>validation data</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="07/28"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                </View></Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: PixelRatio.getPixelSizeForLayoutSize(25),
        width: '70%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderRadius: 10,
        elevation: 10,
        marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
    },
    text1: {
        fontFamily: 'Poppins_500Medium',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
        color: "#8e1c1a",
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
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        padding: PixelRatio.getPixelSizeForLayoutSize(20),
        borderRadius: 10
    },
    boxinput: {
        width: PixelRatio.getPixelSizeForLayoutSize(60),
        height: 40,
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
        backgroundColor: "#efefef",
        fontFamily: "Poppins_600SemiBold",
        position: "absolute",
        padding: 2,
    },
    input: {
        width: "80%",
        height: "85%",
        borderRadius: 2,
        backgroundColor: "#efefef",
        outlineStyle: "none",
        color: "#8E1C1A",
        fontFamily: "Poppins_400Regular",
    },
})

export default Payment;