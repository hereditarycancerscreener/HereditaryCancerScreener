import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { styles } from './Styles';

const Question = ({ questionObj }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}> {questionObj.question} </Text>
    </View>
  )
}

export default Question;
