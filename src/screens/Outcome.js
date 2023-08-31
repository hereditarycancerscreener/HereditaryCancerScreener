import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Outcome = ({route, navigation}) => {
  const { outcome } = route.params;
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
