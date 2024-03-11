import React, { useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Image
        style={styles.logo}
        source={require('../../logo.png')}
      />
      <View style={styles.logInInputsContainer}>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.logInInputText} placeholder='Email' />
        </View>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.logInInputText} placeholder='Password'/>
        </View>
      </View>
      <TouchableOpacity style={styles.logInButton}
        onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}
      >
        <Text style={styles.logInButtonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.registrationTextContainer}>
        <Text style={styles.registerText}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.replace(Screen.REGISTER_SCREEN)}
        >
          <Text style={styles.registerText}> Register here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LogIn;
