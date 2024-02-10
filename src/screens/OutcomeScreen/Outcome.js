import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Outcome = ({ route, navigation }) => {
  const { outcome } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.outcomeText}>{outcome}</Text>
      <TouchableOpacity style={styles.startOverButton} onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}>
        <Text style={styles.startOverButtonText}>Start Over</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Outcome;
