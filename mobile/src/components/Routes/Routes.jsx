import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Screen from "../../screens/Screen2";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    
        <Stack.Navigator>
            
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Screen2"
                component={Screen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}