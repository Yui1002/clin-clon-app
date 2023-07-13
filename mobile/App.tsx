/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Setup from './components/Setup';
import AddUser from './components/AddUser';
import Starter from './components/Starter';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starter" component={Starter} options={{ title: 'Starter' }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' }}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn' }}/>
        <Stack.Screen name="Setup" component={Setup} options={{ title: 'Setup' }}/>
        <Stack.Screen name="AddUser" component={AddUser} options={{ title: 'AddUser' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
