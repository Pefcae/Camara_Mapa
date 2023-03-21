import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Orders } from '../screens'; // PEF modificar acá

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  // PEF modificar acá
  return (
    <Stack.Navigator
      initialRouteName="Orders" //PEF modificar acá
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
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator; //PEF modificar acá
