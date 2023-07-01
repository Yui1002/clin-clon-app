/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './components/Register';
import Setup from './components/Setup';
import AddUser from './components/AddUser';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Join' }}/>
        <Stack.Screen name="Setup" component={Setup} options={{ title: 'Setup' }}/>
        <Stack.Screen name="AddUser" component={AddUser} options={{ title: 'AddUser' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
