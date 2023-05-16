import { View, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Search() {
  const route = useRoute();
  const navigation = useNavigation();
  const { param } = route.params;

  
  return (
    <View>
      <Text>{param}</Text>
    </View>
  );
}
