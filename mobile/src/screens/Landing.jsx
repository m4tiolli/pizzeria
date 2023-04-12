import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
  Button,
  Text,
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
import "react-native-gesture-handler";
import { Drawer } from "react-native-drawer-layout";

export default function Landing() {
  const [filterOpen, setFilterOpen] = useState(false);
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
  return (
    <View style={styles.docker}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
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
          <Drawer
            open={filterOpen}
            onOpen={() => setFilterOpen(true)}
            onClose={() => setFilterOpen(false)}
            renderDrawerContent={() => {
              return <Text>Drawer content</Text>;
            }}
          >
            <Icon
              name="search1"
              size={30}
              color={"#8e1c1c"}
              onPress={() => setFilterOpen((prevOpen) => !prevOpen)}
            />
            <Button
              onPress={() => setFilterOpen((prevOpen) => !prevOpen)}
              title="oi"
            />
          </Drawer>
        </View>
      </View>
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
  );
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
