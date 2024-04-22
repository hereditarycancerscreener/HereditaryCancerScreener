import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import auth from '../../services/Config'

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';
import FirebaseContext from '../../contexts/FirebaseContext';

const Register = ({ navigation }) => {
  const app = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [medicalSchool, setMedicalSchool] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [practice, setPractice] = useState('');
  const [researchID, setResearchID] = useState('');

  const handleRegistration = async () => {
    try {
        const userCredential = await app.auth().createUserWithEmailAndPassword(email, password);
        if (userCredential.user) {
          // await set user ?
          navigation.replace(Screen.LOGIN_SCREEN)
        }
    } catch (error) {
        alert("We encountered an error creating an account for you. Please try again later.")
        console.log("Registration error: " + error)
    }
  }

  const handleLogIn = () => {
    navigation.replace(Screen.LOGIN_SCREEN)
  }

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Text style={styles.registerTitle}>Create an Account</Text>
      <View style={styles.registerInputsContainer}>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='First Name' value={firstName} onChangeText={setFirstName}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Last Name' value={lastName} onChangeText={setLastName}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Medical School' value={medicalSchool} onChangeText={setMedicalSchool}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Specialization' value={specialization} onChangeText={setSpecialization}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Practice' value={practice} onChangeText={setPractice}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Research ID' value={researchID} onChangeText={setResearchID}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Email' value={email} onChangeText={setEmail}/>
        </View>
        <View style={styles.registerInputContainer}>
          <TextInput style={styles.registerInputText} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}/>
        </View>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.logInTextContainer}>
        <Text style={styles.logInText}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={handleLogIn}>
          <Text style={styles.logInText}> Log in here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register;
