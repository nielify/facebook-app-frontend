import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName='Login'>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login' 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Home'
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;