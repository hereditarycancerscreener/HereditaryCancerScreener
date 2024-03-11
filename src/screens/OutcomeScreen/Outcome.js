import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';

import { Outcome as OutcomeConstant } from '../../constants/Outcomes';
import { Screen } from '../../constants/Screens';
import { styles } from './Styles';

const Outcome = ({ route, navigation }) => {
  const { outcome } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.outcomeText}>{outcome}</Text>
      {outcome === OutcomeConstant.DOES_NOT_MEET_CRITERIA &&
        <FontAwesomeIcon icon={faCircleCheck} color={"#4BD447"} size={140}/>
      }
      {outcome === OutcomeConstant.MEETS_CRITERIA &&
        <FontAwesomeIcon icon={faCircleXmark} color={"#E70D0D"} size={140}/>
      }
      {outcome === OutcomeConstant.SPEAK_TO_GENETIC_COUNSELOR &&
        <FontAwesomeIcon icon={faTriangleExclamation} color={"#EBEB00"} size={140}/>
      }
      {outcome === OutcomeConstant.INCONCLUSIVE &&
        <FontAwesomeIcon icon={faTriangleExclamation} color={"#EBEB00"} size={140}/>
      }
      <TouchableOpacity style={styles.startOverButton} onPress={() => navigation.replace(Screen.DISCLAIMER_SCREEN)}>
        <Text style={styles.startOverButtonText}>Start Over</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Outcome;
