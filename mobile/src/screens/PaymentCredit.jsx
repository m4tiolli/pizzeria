import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import PaymentMethods from './PaymentMethods';

function PaymentCredit() {
    const route = useRoute()
    const { pedido, local } = route.params
    return (
        <View>
            {local == "delivery" ? <PaymentMethods /> : <Text>nada</Text>}
            <Text>oi</Text>
        </View >
    )
}

export default PaymentCredit;