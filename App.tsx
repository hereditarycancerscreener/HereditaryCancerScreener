import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/LoginScreen/Login';
import Survey from './src/screens/SurveyScreen/Survey.js';
import Disclaimer from './src/screens/DisclaimerScreen/Disclaimer.js';
import Outcome from './src/screens/OutcomeScreen/Outcome.js';
import { Screen } from './src/constants/Screens';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screen.LOGIN_SCREEN} component={Login}/>
        <Stack.Screen name={Screen.DISCLAIMER_SCREEN} component={Disclaimer}/>
        <Stack.Screen name={Screen.SURVEY_SCREEN} component={Survey}/>
        <Stack.Screen name={Screen.OUTCOME_SCREEN} component={Outcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
