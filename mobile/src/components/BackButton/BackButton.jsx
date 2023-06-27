import { useNavigation } from "@react-navigation/native"
import { PixelRatio, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
function BackButton() {
    const navigation = useNavigation()
    return (
        <View style={{ width: '90%', height: '10%', paddingHorizontal: "5%", paddingTop: "5%" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={PixelRatio.getPixelSizeForLayoutSize(10)} color={"#8e1c1e"} />
            </TouchableOpacity>
        </View>
    )
}


export default BackButton