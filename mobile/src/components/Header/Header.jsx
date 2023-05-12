import { StatusBar, View, Image, TextInput, StyleSheet, PixelRatio } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Header() {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <Image
          source={require("../../assets/text.svg")}
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(20),
            width: PixelRatio.getPixelSizeForLayoutSize(16),
          }}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Icon
            name="filter"
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
            color={"#8e1c1c"}
          />
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
            <Icon
              name="search1"
              size={PixelRatio.getPixelSizeForLayoutSize(10)}
              color={"#8e1c1c"}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    header: {
      height: "15%",
      flexDirection: "col",
      alignItems: 'center'
    },
    input: {
      flexDirection: "row",
      width: "70%",
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
  });
  