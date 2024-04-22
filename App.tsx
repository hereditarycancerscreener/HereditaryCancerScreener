import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from './src/screens/RegisterScreen/Register';
import Login from './src/screens/LoginScreen/Login';
import Survey from './src/screens/SurveyScreen/Survey.js';
import Disclaimer from './src/screens/DisclaimerScreen/Disclaimer.js';
import Outcome from './src/screens/OutcomeScreen/Outcome.js';
import { Screen } from './src/constants/Screens';
import Landing from './src/screens/LandingScreen/Landing';
import FirebaseContext from './src/contexts/FirebaseContext';
import { app } from "./src/services/Config";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <FirebaseContext.Provider value={app}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screen.LOGIN_SCREEN} component={Login} options={{headerShown: false}}/>
          <Stack.Screen name={Screen.REGISTER_SCREEN} component={Register} options={{headerShown: false}}/>
          <Stack.Screen name={Screen.LANDING_SCREEN} component={Landing} options={{headerShown: false, animation: 'fade'}}/>
          <Stack.Screen name={Screen.DISCLAIMER_SCREEN} component={Disclaimer} options={{headerShown: false, animation: 'slide_from_bottom'}}/>
          <Stack.Screen name={Screen.SURVEY_SCREEN} component={Survey} options={{headerShown: false, animation: 'fade'}}/>
          <Stack.Screen name={Screen.OUTCOME_SCREEN} component={Outcome} options={{headerShown: false, animation: 'fade'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseContext.Provider>
  );
}

export default App;
