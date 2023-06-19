import { useState } from "react"
import { Text, View, Modal, TouchableOpacity, StyleSheet, PixelRatio } from "react-native"

function Alert({ message }) {
    const [open, setOpen] = useState(!true)
    return (
        <Modal
            visible={!open}
            onDismiss={() => setOpen(open)}
            animationType="fade"
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={{ fontFamily: "Poppins_400Regular", fontSize: PixelRatio.getPixelSizeForLayoutSize(6), textAlign: "center", marginVertical: PixelRatio.getPixelSizeForLayoutSize(3) }}>{message}</Text>
                    <TouchableOpacity onPress={() => setOpen(!open)} style={{ backgroundColor: "#8e1c1c", width: "40%", height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 8, elevation: 3 }}>
                        <Text style={{ color: "#fff", fontFamily: 'Poppins_500Medium' }}>close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        width: "70%",
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        padding: 20
    }
})

export default Alert