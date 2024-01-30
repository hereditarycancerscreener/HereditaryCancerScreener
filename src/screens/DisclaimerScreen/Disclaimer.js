import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Disclaimer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.disclaimerText}>Insert disclaimer here!</Text>
      <TouchableOpacity style={styles.beginButton} onPress={() => navigation.replace(Screen.SURVEY_SCREEN)}>
        <Text style={styles.beginButtonText}>Begin Survey</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Disclaimer;
