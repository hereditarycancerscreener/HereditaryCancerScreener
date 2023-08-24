import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Survey from './src/screens/Survey.js';
import Disclaimer from './src/screens/Disclaimer.js';
import Outcome from './src/screens/Outcome.js';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Disclaimer" component={Disclaimer}/>
        <Stack.Screen name="Survey" component={Survey}/>
        <Stack.Screen name="Outcome" component={Outcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
