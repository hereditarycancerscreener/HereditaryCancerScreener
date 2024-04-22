import React, { useContext, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import 'firebase/auth';
import auth from '../../services/Config'

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';
import FirebaseContext from '../../contexts/FirebaseContext';

const LogIn = ({ navigation }) => {
  const app = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogIn = () => {
    try {
      const userCredential = app.auth().signInWithEmailAndPassword(email, password)
      if (userCredential.user) {
        // await set user ?
        navigation.replace(Screen.LOGIN_SCREEN)
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert("Invalid username or password.")
      } else if (error.code === 'auth/too-many-requests') {
        alert("Too many unsuccessful login attempts. Please try again later.")
      } else {
        alert("We encountered an error trying to log you in. Please try again later.")
      }
    }
  }

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Image
        style={styles.logo}
        source={require('../../images/logo.png')}
      />
      <View style={styles.logInInputsContainer}>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.logInInputText} placeholder='Email' value={email} onChangeText={setEmail}/>
        </View>
        <View style={styles.logInInputContainer}>
          <TextInput style={styles.logInInputText} secureTextEntry placeholder='Password' value={password} onChangeText={setPassword}/>
        </View>
      </View>
      <TouchableOpacity style={styles.logInButton}
        // onPress={handleLogIn}
        onPress={() => navigation.replace(Screen.LANDING_SCREEN)}
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
