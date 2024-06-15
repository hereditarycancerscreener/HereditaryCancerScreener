import React from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'

import { styles } from './Styles';

const NavButton = ({ questionObj, selectedAnswers, handleMultiAnswerSelection }) => {

  const onClickBack = () => {

  }

  return (
    <View style={styles.navButtonContainer}>
      {questionObj.ID !== 0 &&
        <TouchableOpacity style={styles.navButton} onPress={onClickBack()}>
          <FontAwesomeIcon icon={faAngleLeft} color={"white"} size={30}/>
        </TouchableOpacity>
      }
      {questionObj.isMultiSelect && selectedAnswers.length != 0 &&
        <TouchableOpacity style={styles.navButton} onPress={() => handleMultiAnswerSelection(selectedAnswers)}>
            <FontAwesomeIcon icon={faAngleRight} color={"white"} size={30}/>
        </TouchableOpacity>
      }
    </View>
  )
}

export default NavButton;
