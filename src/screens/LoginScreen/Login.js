import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const LogIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeBackground}>
      <Image
        style={styles.logo}
        source={require('../../logo.png')}
      />
      <View style={styles.logInInputsContainer}>
        <View style={styles.logInInputContainer}>
          <Text style={styles.logInInputText}>
            Email
          </Text>
        </View>
        <View style={styles.logInInputContainer}>
          <Text style={styles.logInInputText}>
            Password
          </Text>
        </View>
      </View>
      <View style={styles.logInButtonsContainer}>
        <TouchableOpacity 
          onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}
          style={styles.pillButtonMedium}
        >
          <Text style={styles.pillButtonMediumText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}
          style={styles.pillButtonMedium}
        >
          <Text style={styles.pillButtonMediumText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LogIn;
