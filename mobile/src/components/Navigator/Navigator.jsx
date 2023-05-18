import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Landing from "../../screens/Landing";
import Cart from "../../screens/Cart";
import Settings from "../../screens/Settings";
import { useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";

function Navigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Landing"
      barStyle={{
        backgroundColor: "#efefef",
        height: "8%",
        width: "100%",
        marginBottom: 10,
      }}
      labeled={false}
      theme={{ colors: { secondaryContainer: "transparent" } }}
    >
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Icon name="shoppingcart" color={"#8e1e1a"} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Landing"
        component={Landing}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Icon name="home" color={"#8e1e1a"} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Icon name="user" color={"#8e1e1a"} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Navigator;
