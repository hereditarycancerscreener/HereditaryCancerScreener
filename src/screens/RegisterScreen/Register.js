import React, { useState } from 'react';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(email, password);
        
    } catch {
        alert("We encountered an error creating an account for you. Please try again later.")
    }
  }

  const handleLogIn = () => {
    navigation.replace(Screen.LOGIN_SCREEN)
  }

  return (
    <SafeAreaView style={styles.safeBackground}>
      <View style={styles.registerInputsContainer}>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Name'/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Medical School'/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Specialization'/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Practice'/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Research ID'/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Email'/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Password' secureTextEntry/>
        </View>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.logInTextContainer}>
        <Text style={styles.logInText}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={handleLogIn}>
          <Text style={styles.registerText}> Log in here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register;
