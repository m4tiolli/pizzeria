import { View, Text, Image, ScrollView, TouchableOpacity, PixelRatio } from "react-native";
import ItemCart from "../components/ItemCart/ItemCart";
import Icon from "react-native-vector-icons/FontAwesome";
const pizza = require("../assets/pizzaexemplo.png");
const coca = require("../assets/coca.png");
const chocolate = require("../assets/chocolate.png")
const data = [
  {
    image: pizza,
    title: 'Pepperoni',
    desc: 'Blablabla',
    qtd: 'x3'
  },
  {
    image: coca,
    title: 'Coca',
    desc: 'Blablabla',
    qtd: 'x1'
  },
  {
    image: chocolate,
    title: 'Chocolate',
    desc: 'Blablabla',
    qtd: 'x2'
  },
]
function Cart() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ alignItems: "center" }}>
      <Image
          source={require("../assets/text.svg")}
          style={{ height: PixelRatio.getPixelSizeForLayoutSize(20), width: PixelRatio.getPixelSizeForLayoutSize(16) }}
        />
      </View>
      <ScrollView style={{ paddingBottom: 200 }}>
        {data.map((item, index) => (
          <ItemCart image={item.image} title={item.title} desc={item.desc} qtd={item.qtd} />
        ))}
      </ScrollView>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            position: "absolute",
            bottom: 10,
            margin: "auto",
          }}
        >
          <Icon name="trash-o" color={"#8e1c1a"} size={PixelRatio.getPixelSizeForLayoutSize(15)} />
          <TouchableOpacity
            style={{
              backgroundColor: "#8E1C1A",
              width: "70%",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              paddingHorizontal: 10
            }}
          >
            <Text style={{fontFamily: 'Poppins_500Medium', color: '#fff', fontSize: 15}}>finalizar compra</Text>
            <Text style={{fontFamily: 'Poppins_500Medium', color: '#fff', fontSize: 11}}>R$ 69,99</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Cart;
