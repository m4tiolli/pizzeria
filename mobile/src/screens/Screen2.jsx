import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Screen(){
    
    const navigation = useNavigation();
    
    return(
        <View>
            <Text>Tela 2</Text>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {navigation.navigate('Home')}}>
                <Text>Ir para tela 2</Text>
            </TouchableOpacity>
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