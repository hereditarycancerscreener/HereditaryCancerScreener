import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const Disclaimer = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Insert disclaimer here!</Text>
      <TouchableOpacity onPress={() => navigation.replace('Survey')}>
        <Text>Begin Survey</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});

export default Disclaimer;
