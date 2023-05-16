import { Image, View } from "react-native";

function Loading() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <Image source={require('../assets/text.png')} style={{width: 50, height: 50}}/>
    </View>
  );
}
export default Loading;
