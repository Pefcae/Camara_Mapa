import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { EcoPuntos } from '../screens'; // PEF modificar acá

const Stack = createNativeStackNavigator();

const EcoPointsNavigator = () => {
  // PEF modificar acá
  return (
    <Stack.Navigator
      initialRouteName="EcoPuntos" //PEF modificar acá
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
        component={EcoPuntos}
    
      />
    </Stack.Navigator>
  );
};

export default EcoPointsNavigator; //PEF modificar acá
