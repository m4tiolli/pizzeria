import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import pizzaexemplo from '../../assets/pizzaexemplo.png';
function Item() {
    return (
        <View style={styles.item}>
            <Image source={pizzaexemplo} style={{
                height: 120, width: 120, position: 'absolute', left: -35,
                top: -5,
            }} />
            <View style={styles.box}>
                <Text style={styles.title}>Pepperoni</Text>
                <Text style={styles.infos}>sauce, cheese, pepperoni</Text>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', position: 'absolute', bottom: 5 }}>
                    <TouchableOpacity style={styles.cart}>
                        <Text style={styles.carttext}>add to cart</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>20$</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        width: '45%',
        height: 150,
        marginHorizontal: 'auto',
        marginVertical: 10
    },
    box: {
        width: '90%',
        height: '68%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 2,
        borderRadius: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 10
    },
    cart: {
        backgroundColor: "#8E1C1A",
        width: "60%",
        height: '60',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    carttext: {
        color: "#fff",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
    },
    title: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
    },
    infos: {
        fontFamily: 'Poppins_500Medium',
        color: '#898989',
    },
    price: {
        fontFamily: 'Poppins_500Medium',
        color: '#698C3D',
        fontSize: 20
    }
})
export default Item;