import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.docker}>
            <View style={styles.container}>
                <Image source={require('../assets/logo2.png')} style={{width: 100, height: 100}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    docker: {
        backgroundColor: '#efefef',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: '80%',
        height: '75%',
        backgroundColor: '#fff',
        borderRadius: 30
    }
});