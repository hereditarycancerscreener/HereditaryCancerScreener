import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Question = ({ questionObj }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}> {questionObj.question} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  questionContainer: {

  },
  questionText: {
    marginTop: 150,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    fontSize: 25,
    color: "#400090",
    fontFamily: "Sinhala Sangam MN",
  },
});

export default Question;
