import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
  TextInput,
} from "react-native";
import Header from "../components/Header/Header";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function WhereEat() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efefef",
      }}
    >
      <Header />
      <TouchableOpacity>
        <MaterialIcons
          name="delivery-dining"
          size={PixelRatio.getPixelSizeForLayoutSize(40)}
          color={"#8e1c1a"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "60%",
    height: 150,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
  },
  box: {
    width: "90%",
    height: "68%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 2,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
    alignItems: "center",
  },
  cart: {
    backgroundColor: "#8E1C1A",
    width: "60%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  carttext: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
  infos: {
    fontFamily: "Poppins_500Medium",
    color: "#898989",
    width: "90%",
    textAlign: "left",
  },
  price: {
    fontFamily: "Poppins_500Medium",
    color: "#fff",
    fontSize: 20,
    backgroundColor: "#8E1C1A",
    width: "60%",
    height: 40,
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  header: {
    height: "15%",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    width: "90%",
    height: PixelRatio.getPixelSizeForLayoutSize(15),
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
  viewcart: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textcart: {
    fontFamily: "Poppins_300Light",
    color: "#8e1c1a",
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});

export default WhereEat;
