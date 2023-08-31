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
  const [questionQueue, setQuestionQueue] = useState([])

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
    var nextQuestions;
    if (typeof answer === 'string')
      nextQuestions = [questionObj.choices.find(choice => choice.value === answer)];
    else
      nextQuestions = questionObj.choices.filter(choice => answer.includes(choice.value));

    var next;
    if (questionQueue.length === 0) {
      next = nextQuestions.shift();
      setQuestionQueue(nextQuestions)
    } else {
      next = questionQueue.shift();
      setQuestionQueue([...questionQueue, ...nextQuestions])
    }

    if (next.nextQuestion === 'outcome')
      updateOutcome(questionObj.choices.find(choice => choice.value === answer).outcome)

    if (next.nextQuestion === 'family track')
      setTraverseFamilyTrack(true)

    // update to base on question queue: setQuestionQueue(...questionQueue, [])
    setQuestionObj(surveySchema.questions[next.nextQuestion])
  }

  // clean up, passing outcome doesn't work
  const updateOutcome = (outcomeParam) => {
    setOutcome(outcomeParam)

    // show out come
    navigation.replace('Outcome', {outcome: outcomeParam})
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
