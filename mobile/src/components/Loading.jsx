import { Image, View } from "react-native";

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
      <Image source={require('../assets/logo2.png')}/>
    </View>
  )
}