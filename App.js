import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import MainContainer from './navigation/MainContainer.js';
import DetailScreen from './screens/DetailScreen.js';

const stackNavigator = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stackNavigator.Navigator>
        <stackNavigator.Screen
          name="Main" component={MainContainer} options={{ headerShown: false }} 
        />
        <stackNavigator.Screen
          name="Detail" component={DetailScreen} options={{ headerShown: false }}
        />
      </stackNavigator.Navigator>
    </NavigationContainer>

  );
}

export default App;