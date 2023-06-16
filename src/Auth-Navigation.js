import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../Cart';
import Providers from './provider';

const Stack = createNativeStackNavigator();

function RegisterStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'providers'}>
      <Stack.Screen name="providers" component={Providers} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
export default RegisterStack;
