import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterStack from './Auth-Navigation';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RegisterStack" component={RegisterStack} />
      </Stack.Navigator>                                                 
    </NavigationContainer>
  );
}

export default Routes;
