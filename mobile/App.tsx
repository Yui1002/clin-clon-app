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
import HomePage from './components/HomePage';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Join' }}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home Page' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
