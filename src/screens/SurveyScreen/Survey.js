import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'

import Question from "../../components/Question/Question";
import AnswerChoices from "../../components/AnswerChoices/AnswerChoices";
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
  const [surveySchema, setSurveySchema]  = useState(PERSONAL_HISTORY_SCHEMA);

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
  * Contains the multi select answer choices the user selected.
  * Does not utilize useEffect instead uses a submit button to trigger the update
  * TODO: will be used to help store all selected answers during breadcrumb implementation
  */
  const [selectedMultiAnswers, setSelectedMultiAnswers] = useState([]);

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
    console.log("Selected answer: ", selectedAnswer)
    if (Object.values(Outcome).includes(selectedAnswer.nextQuestion)) {
      console.log("Updating outcome...")
      navigation.replace(Screen.OUTCOME_SCREEN, {outcome: selectedAnswer.nextQuestion});
    } else if (selectedAnswer.nextQuestion == FAMILY_TRACK) {
      console.log("Switching to family history schema...")
      updateQuestionNoQueue(FAMILY_HISTORY_SCHEMA.questions[0]);
      setSurveySchema(FAMILY_HISTORY_SCHEMA);
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
      {
        navigation.replace(Screen.OUTCOME_SCREEN, {outcome: outcome})
      }
    }
  }, [questionQueue, outcome]);

  const handleAnswerSelection = (answerChoice) => {
    setSelectedAnswer(answerChoice);
  }

  const handleMultiAnswerSelection = (answerChoice) => {
    const tempList = [...selectedMultiAnswers];
    const index = tempList.findIndex(answer => answer === answerChoice);
    if (index !== -1) {
      tempList.splice(index, 1);
    } else {
      tempList.push(answerChoice);
    }
    setSelectedMultiAnswers(tempList);
  }

  const handleMultiSubmit = () => {
    if (selectedMultiAnswers.length == 0) {
      return;
    } else {
      new_questions = []
      selectedMultiAnswers.forEach((answer) => 
      {if (answer.nextQuestion in Outcome) {
        console.log("Updating outcome...")
        navigation.replace(Screen.OUTCOME_SCREEN, {outcome: answer.nextQuestion});
      } else if (answer.nextQuestion === FAMILY_TRACK) {
        setQuestionQueue([FAMILY_HISTORY_SCHEMA.questions[0]]);
      } else if (Number.isInteger(answer.nextQuestion)) {
        console.log("Updating multiquestion queue...")
        new_questions.push(answer.nextQuestion);
      } else {
        console.log("ERROR: unknown schema structure in multianswer selection");
      }} );
    }
    setQuestionQueue([...questionQueue, ...new_questions]);
    setSelectedMultiAnswers([]);
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

  const updateQuestionNoQueue = (nextQuestion) => {
    setQuestionObj(nextQuestion);
  }

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Question questionObj={questionObj} />
        <AnswerChoices questionObj={questionObj} handleAnswerSelection={handleAnswerSelection} handleMultiAnswerSelection={handleMultiAnswerSelection} handleMultiSubmit={handleMultiSubmit} />
      <View style={styles.navButtonContainer}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesomeIcon icon={faAngleLeft} color={"white"} size={30}/>
        </TouchableOpacity>

        {questionObj.isMultiSelect &&
          <TouchableOpacity style={styles.navButton}>
            <FontAwesomeIcon icon={faAngleRight} color={"white"} size={30}/>
          </TouchableOpacity>
        }
      </View>
      <Text style={styles.questionIDText}>{questionObj.ID}</Text>
    </SafeAreaView>
  )
}

export default Survey;
