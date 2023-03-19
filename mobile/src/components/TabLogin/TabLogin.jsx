import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Tab = createBottomTabNavigator();

export default function TabLogin() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: "#8e1c1a",
        tabBarLabelStyle: {
          fontSize: 20,
          fontFamily: "Poppins_400Regular",
          textTransform: "lowercase",
        },
        tabBarIndicatorContainerStyle: { color: "#8e1c1a" },
        tabBarStyle: { backgroundColor: "#efefef", color: "#8e1c1a" },
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarLabel: "login" }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{ tabBarLabel: "register" }}
      />
    </Tab.Navigator>
  );
}
