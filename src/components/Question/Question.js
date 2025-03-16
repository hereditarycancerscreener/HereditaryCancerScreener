import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'

import { styles } from './Styles';

const Question = ({ questionObj }) => {
  const [learningStarModalVisible, setLearningStarModalVisible] = useState(false);

  const handleLearningStarPressed = () => {
    setLearningStarModalVisible(!learningStarModalVisible);
  }

  return (
    <View style={styles.questionContainer}>
      {/* <Text style={styles.questionText}> */}
        <Text style={styles.questionText}> 
          {questionObj.question} 
          {questionObj.learningStar != null &&
            <TouchableOpacity style={styles.learningStarOpenButton} onPress={() => handleLearningStarPressed()}>
              <FontAwesomeIcon icon={faCircleInfo} color={"#951CBA"} size={30} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
          }
        </Text>
      {/* </Text> */}
      {learningStarModalVisible && 
        <Modal transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.learningStarView}>
              <Text style={styles.learningStarText}>
                {questionObj.learningStar}
              </Text>
              <TouchableOpacity style={styles.learningStarCloseButton} onPress={() => handleLearningStarPressed()}>
                <Text> Got it </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      }
    </View>
  )
}

export default Question;
