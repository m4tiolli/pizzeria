import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View>
            <View>
                <Image source={require('../assets/logo2.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TouchableOpacity : {
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 300,
        height: 200
    }
});