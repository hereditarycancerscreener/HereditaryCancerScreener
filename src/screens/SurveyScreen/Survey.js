import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Question from "../../components/Question/Question";
import AnswerChoices from "../../components/AnswerChoices/AnswerChoices";
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { Outcome } from '../../constants/Outcomes';
import { FAMILY_TRACK } from '../../constants/Outcomes';
import { Screen } from '../../constants/Screens';
import { PERSONAL_HISTORY_SCHEMA } from "../../schemas/PersonalHistorySchema";
import { FAMILY_HISTORY_SCHEMA } from "../../schemas/FamilyHistorySchema";
import { styles } from './Styles';

const Survey = ({ navigation }) => {
  /*
  * Controls which survey json object is being traversed
  * Survey always begins with Personal History questions
  */
  let surveySchema = PERSONAL_HISTORY_SCHEMA;

  /*
  * Controls whether the user is taken down the family track after they have completed the personal track
  */
  let traverseFamilyTrack = false;

  /*
  * Controls the question object the user is currently on, including question and answer choices
  */
  const [questionObj, setQuestionObj] = useState(surveySchema.questions[0]);

  /*
  * Controls the order in which questions will be asked
  * Needed because multi select answer choices take the user down multiple paths
  */
  const [questionQueue, setQuestionQueue] = useState([]);

  /*
  * Contains the last answer choice the user selected.
  * Needed to trigger useEffect that updates the question, outcome, and survey schema
  * TODO: will be used to help store all selected answers during breadcrumb implementation
  */
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  /*
  * Updates the final outcome the user recieves
  * Is "does not meet criteria" by default, only gets updated to "meets criteria" or "speak to a genetic counselor"
  * If updated to "meets criteria", the survey is completed
  */
  const [outcome, setOutcome] = useState(Outcome.DOES_NOT_MEET_CRITERIA);

  useEffect(() => {
    if (selectedAnswer === null) {
      return;
    }

    if (selectedAnswer.nextQuestion in Outcome) {
      console.log("Updating outcome...")
      updateOutcome(selectedAnswer.nextQuestion);
    } else if (selectedAnswer.nextQuestion === FAMILY_TRACK) {
      traverseFamilyTrack = true;
    } else if (Number.isInteger(selectedAnswer.nextQuestion)) {
      console.log("Updating question queue...")
      updateQuestionQueue(selectedAnswer.nextQuestion);
    } else {
      console.log("ERROR: unknown schema structure");
    } 
  }, [selectedAnswer]); 

  useEffect(() => {
    if (selectedAnswer === null) {
      return;
    }

    if (questionQueue.length > 0) {
      console.log("Updating question...")
      updateQuestion();
    } else {
      if (traverseFamilyTrack === true) {
        surveySchema = FAMILY_HISTORY_SCHEMA;
        setQuestionObj(surveySchema.questions[0]);
        setQuestionQueue([]);
      } else {
        navigation.replace(Screen.OUTCOME_SCREEN, {outcome: outcome})
      }
    }
  }, [questionQueue, outcome]);

  const handleAnswerSelection = (answerChoice) => {
    setSelectedAnswer(answerChoice);
  }

  const updateOutcome = (updatedOutcome) => {
    setOutcome(updatedOutcome);
    if (updatedOutcome === Outcome.MEETS_CRITERIA) {
      navigation.replace(Screen.OUTCOME_SCREEN, {outcome: updatedOutcome});
    }
  }

  // edit logic to work with multi select
  const updateQuestionQueue = (nextQuestion) => {
    setQuestionQueue((prevQueue) => [...prevQueue, nextQuestion]);
  }

  // edit logic to work with multi select
  const updateQuestion = () => {
    const nextQuestion = questionQueue.shift();
    setQuestionObj(surveySchema.questions[nextQuestion]);
  }

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Question questionObj={questionObj} />
      <AnswerChoices questionObj={questionObj} handleAnswerSelection={handleAnswerSelection} />
      {questionObj.isMultiSelect === true && <SubmitButton />} 
      {/* <TouchableOpacity style={styles.navButton}> */}
        {/* <FontAwesomeIcon icon={faAngleLeft} color={"white"} size={30}/> */}
      {/* </TouchableOpacity> */}
    </SafeAreaView>
  )
}

export default Survey;
