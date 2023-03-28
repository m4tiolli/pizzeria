import { StatusBar } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { Loading } from "./src/components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/components/Routes/Routes";

function App() {
  // const [fontsLoaded] = useFonts({
  //   Poppins_400Regular,
  //   Poppins_600SemiBold,
  //   Poppins_700Bold,
  //   Poppins_800ExtraBold,
  // });

  // if (!fontsLoaded) {
  //   return <Loading />;
  // }

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
export default App;