import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Eventos } from '../screens'; // PEF modificar acá

const Stack = createNativeStackNavigator();

const EventsNavigator = () => {
  // PEF modificar acá
  return (
    <Stack.Navigator
      initialRouteName="Events" //PEF modificar acá
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
        component={Eventos}
     
      />
    </Stack.Navigator>
  );
};

export default EventsNavigator; //PEF modificar acá
