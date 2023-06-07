import {
  StatusBar,
  View,
  Image,
  TextInput,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require("../../assets/text.png")}
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(24),
            width: PixelRatio.getPixelSizeForLayoutSize(20),
          }}
        />
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "10%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
});
