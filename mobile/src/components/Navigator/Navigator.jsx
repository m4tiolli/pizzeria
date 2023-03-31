import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from "react-native-vector-icons/AntDesign"
import Landing from '../../screens/Landing';
import Cart from '../../screens/Cart'
import Settings from '../../screens/Settings'

function Navigator() {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Landing"
            barStyle={{ backgroundColor: '#efefef' }}>
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: () => (
                    <Icon name="shoppingcart" color={'#8e1e1a'} size={35} />
                ),
            }} />
            <Tab.Screen name="Landing" component={Landing} options={{
                tabBarIcon: () => (
                    <Icon name="home" color={'#8e1e1a'} size={35} />
                ),
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: () => (
                    <Icon name="user" color={'#8e1e1a'} size={35} />
                ),
            }} />
        </Tab.Navigator>
    );
}
export default Navigator;