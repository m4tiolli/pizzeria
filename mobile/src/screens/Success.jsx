import { useNavigation } from "@react-navigation/native";
import { View, PixelRatio, Text, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

function Success() {
    const navigation = useNavigation()
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name="checkcircle" size={PixelRatio.getPixelSizeForLayoutSize(40)} color={'#698C3D'} />
            <Text style={{ fontFamily: 'Poppins_400Regular', color: '#698C3D', marginVertical: PixelRatio.getPixelSizeForLayoutSize(10), fontSize: PixelRatio.getPixelSizeForLayoutSize(8) }}>successful payment</Text>
            <Text style={{ fontFamily: 'Poppins_400Regular', color: '#8e1c1c', marginVertical: PixelRatio.getPixelSizeForLayoutSize(10), fontSize: PixelRatio.getPixelSizeForLayoutSize(5), width: '70%', textAlign: 'center' }}>we will let you know when your order is complete.</Text>
            <TouchableOpacity style={{
                backgroundColor: '#8e1c1c',
                borderRadius: 5,
                marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
                width: '40%',
                height: PixelRatio.getPixelSizeForLayoutSize(15),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4
            }}
            onPress={() => navigation.navigate("Home")}>
                <Text style={{ fontFamily: 'Poppins_500Medium', color: '#efefef' }} >go back</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Success;