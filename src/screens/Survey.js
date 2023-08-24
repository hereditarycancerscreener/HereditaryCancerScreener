import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Question from "../components/Question";
import AnswerChoices from "../components/AnswerChoices";
import { PersonalHistorySchema } from "../PersonalHistorySchema";
import { FamilyHistorySchema } from "../FamilyHistorySchema";

const Survey = ({ navigation }) => {
  /*
  * Controls which survey json object is being traversed
  * Survey always begins with Personal History questions, so it is the default state
  */
  const [surveySchema, setSurveySchema] = useState(PersonalHistorySchema)

  /*
  * Controls the question object the user is currently on, including question and answer choices
  */
  const [questionObj, setQuestionObj] = useState(surveySchema.questions[0])

  /*
  * Controls the order in which questions will be asked
  * Needed because multi select answer choices take the user down multiple paths
  */
  const [questionQueue, setQuestionQueue] = useState()

  /*
  * Controls whether the user is taken down the family track after they have completed the personal track
  */
  const [traverseFamilyTrack, setTraverseFamilyTrack] = useState(false)

  /*
  * Updates the final outcome the user recieves
  * Can be "meets criteria", "does not meet criteria", or "speak to a genetic counselor"
  * Is "does not meet criteria" by default, only gets updated to "meets criteria" or "speak to a genetic counselor"
  * If updated to "meets criteria", the survey is completed
  */
  const [outcome, setOutcome] = useState("does not meet criteria")


  /*
  * Updates the current question the user is on or 
  */
  const updateQuestionOutcome = (answer) => { // if queue is empty, end survey with current outcome
    const nextQuestion = questionObj.choices.find(choice => choice.value === answer).nextQuestion;

    if (nextQuestion === 'outcome')
      updateOutcome(questionObj.choices.find(choice => choice.value === answer).outcome)

    if (nextQuestion === 'family track')
      setTraverseFamilyTrack(true)

    // // if questionQueue is empty and ...
    // if (questionQueue && traverseFamilyTrack === true)
    //   setSurveySchema(FamilyHistorySchema)

    // // if questionQueue is empty and next question is an outcome, end the survey
    // if (questionQueue && surveySchema.questions[nextQuestion])
    //   setSurveySchema(FamilyHistorySchema)

    // update to base on question queue: setQuestionQueue(...questionQueue, [])
    setQuestionObj(surveySchema.questions[nextQuestion])
  }

  // clean up, passing outcome doesn't work
  const updateOutcome = (outcomeParam) => {
    setOutcome(outcomeParam)

    // if outcome meets criteria, end survey and go straight to meets criteria screen
    if (outcomeParam === 'meets criteria')
      navigation.replace('Outcome', outcomeParam)
  }

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Question questionObj={questionObj} />
      <AnswerChoices questionObj={questionObj} updateQuestionOutcome={updateQuestionOutcome} />

      <TouchableOpacity style={styles.navButton}>
        {/* <FontAwesomeIcon icon={faAngleLeft} color={"white"} size={30}/> */}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeBackground: {
    flex: 1
  },
  navButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    margin: 60,
    marginBottom: 130,
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: '#400090',
  }
});

export default Survey;
