import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Home } from '../screens'; // PEF modificar acá

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  // PEF modificar acá
  return (
    <Stack.Navigator
      initialRouteName="Home" //PEF modificar acá
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: 'Bitter-Bold',
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen
        name=" "
        component={Home}

      />
    </Stack.Navigator>
  );
};

export default HomeNavigator; //PEF modificar acá
