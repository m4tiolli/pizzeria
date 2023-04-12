import { Image, View } from "react-native";

function Loading() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <Image source={require('../assets/icon.svg')} style={{width: 75, height: 80}}/>
    </View>
  );
}
export default Loading;
