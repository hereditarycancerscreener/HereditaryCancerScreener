import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Outcome = ({route, navigation}) => {
  const { outcome } = route.params;
  return (
    <SafeAreaView>
      <Text>{outcome}</Text>
      <TouchableOpacity onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}>
        <Text>Start Over</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Outcome;
