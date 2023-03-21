import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";

import { THEME } from "./constants/theme";
import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";
import { styles } from "./styles";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.", err);
  });
export default function App() {

  const [loaded] = useFonts({
    'Bitter-Regular': require('../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-Bold': require('../assets/fonts/Bitter-Bold.ttf'),
    'Bitter-Light': require('../assets/fonts/Bitter-Light.ttf'),
    'Bitter-Medium': require('../assets/fonts/Bitter-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }

  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
