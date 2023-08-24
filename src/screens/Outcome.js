import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Outcome = ({ navigation }, { outcome }) => {
  return (
    <SafeAreaView>
      <Text>{outcome}</Text>
      <TouchableOpacity onPress={() => navigation.replace('Disclaimer')}>
        <Text>Start Over</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Outcome;
