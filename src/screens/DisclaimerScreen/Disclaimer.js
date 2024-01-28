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
    <SafeAreaView>
      <Text>Insert disclaimer here!</Text>
      <TouchableOpacity onPress={() => navigation.replace(Screen.SURVEY_SCREEN)}>
        <Text>Begin Survey</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Disclaimer;
