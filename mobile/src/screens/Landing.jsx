import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Loading from "../components/Loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import Item from "../components/Item/Item";
import DrawerLayout from "react-native-drawer-layout";

export default function Landing() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) return <Loading />;
<<<<<<< HEAD
  const FilterComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
    return (
      <View style={styles.docker}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
=======
  return (
    <View style={styles.docker}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require("../assets/logo2.png")} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
>>>>>>> c1cb6ea5 (carrinho)
          <Icon name="filter" size={30} color={"#8e1c1c"} />
          <View style={styles.input}>
            <TextInput
              placeholder="pesquisar por pizzas"
              style={{
                fontFamily: "Poppins_300Light_Italic",
                outline: "none",
                paddingRight: "20%",
                paddingLeft: 10,
              }}
            />
            <Icon name="search1" size={30} color={"#8e1c1c"} />
          </View>
        </View>
        <DrawerLayout
          drawerWidth={200}
          drawerPosition="right"
          onDrawerOpen={handleDrawerOpen}
          onDrawerClose={handleDrawerClose}
        >
          <Text>Oi</Text>
        </DrawerLayout>
        <ScrollView style={{ paddingBottom: 400 }}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ScrollView>
      </View>
<<<<<<< HEAD
    );
  };
=======
      <ScrollView style={{ paddingBottom: 400, paddingTop: 50 }}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
>>>>>>> c1cb6ea5 (carrinho)
}
const styles = StyleSheet.create({
  docker: {
    width: "100%",
    height: "100%",
    backgroundColor: "#efefef",
  },
  header: {
    height: "10%",
    flexDirection: "col",
  },
  input: {
    flexDirection: "row",
    width: "70%",
    height: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#efefef",
  },
});
