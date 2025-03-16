import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import Question from "../../components/Question/Question";
import AnswerChoices from "../../components/AnswerChoices/AnswerChoices";
import { Outcome } from '../../constants/Outcomes';
import { Screen } from '../../constants/Screens';
import { QUESTION_SCHEMA } from "../../schemas/QuestionSchema";
import { styles } from './Styles';
import NavButton from '../../components/NavButton/NavButton';

const Survey = ({ navigation }) => {
  /*
  * Controls the question object the user is currently on, including question and answer choices
  */
  const [questionObj, setQuestionObj] = useState(QUESTION_SCHEMA.questions[0])

  /*
  * Controls the order in which questions will be asked
  * Needed because multi select answer choices take the user down multiple paths
  * Initially null so the Outcome screen doesn't get triggered on first render when the queue is empty
  */
  const [questionQueue, setQuestionQueue] = useState(null)

  /*
  * Contains the multi select answer choices the user selected.
  * Does not utilize useEffect instead uses a submit button to trigger the update
  * TODO: will be used to help store all selected answers during breadcrumb implementation ???
  */
  const [selectedAnswers, setSelectedAnswers] = useState([])

  /*
  * Updates the final outcome the user recieves
  * Is "does not meet criteria" by default, only gets updated to "meets criteria" or "speak to a genetic counselor"
  * If updated to "meets criteria", the survey is completed
  */
  const [outcome, setOutcome] = useState(Outcome.DOES_NOT_MEET_CRITERIA)

  // pass in question id, abbr, and answer
  // pop off when back button is selected and undo outcome, selected answers, and question queue
  const [breadcrumbs, setBreadcrumbs] = useState([])

  const handleAnswerSelection = (selectedAnswer) => {
    if (selectedAnswer === null) {
      throw new Error("selectedAnswer in handleAnswerSelection is null")
    }

    console.log("Handling answer selection...", selectedAnswer)
    setBreadcrumbs((prevState) => [...prevState,
      {
        ID: questionObj.ID,
        question: questionObj.question,
        selectedAnswers: [selectedAnswer]
      }
    ])
    setQuestionQueue([])
    handleNextQuestion(selectedAnswer.nextQuestion)
  }

  const handleMultiAnswerSelection = (selectedAnswers) => {
    if (selectedAnswers === null) {
      throw new Error("selectedAnswers in handleMultiAnswerSelection is null")
    } else if (selectedAnswers.length === 0) {
      throw new Error("selectedAnswers in handleMultiAnswerSelection is empty")
    }

    console.log("Handling multi answer selection...", selectedAnswers)
    setBreadcrumbs((prevState) => [...prevState,
      {
        ID: questionObj.ID,
        question: questionObj.question,
        selectedAnswers: selectedAnswers.value
      }
    ])
    setQuestionQueue([])
    selectedAnswers.forEach(selectedAnswer => {
      handleNextQuestion(selectedAnswer.nextQuestion)
    })
  }

  const handleNextQuestion = (nextQuestion) => {
    if (nextQuestion === null) {
      throw new Error("nextQuestion is handleNextQuestion null")
    }

    console.log("Handling next question...", nextQuestion)
    if (Object.values(Outcome).includes(nextQuestion)) {
      updateOutcome(nextQuestion)
    // } else if (nextQuestion === FAMILY_TRACK) { // DEPRECATED
    //   console.log("Switching to family history schema...")
    //   updateQuestionQueue(FAMILY_HISTORY_SCHEMA.questions[0])
    //   setSurveySchema(FAMILY_HISTORY_SCHEMA) // dep
    } else if (Number.isInteger(nextQuestion)) {
      updateQuestionQueue(nextQuestion)
    } else {
      throw new Error("Unknown schema")
    } 
  }

  // TODO: implement
  const handlePreviousQuestion = () => {
    console.log("Handling previous question...")
    const previousBreadcrumbs = breadcrumbs[breadcrumbs.length - 1]
  }

  const updateQuestionQueue = (nextQuestion) => {
    if (nextQuestion === null || nextQuestion === undefined) {
      throw new Error("nextQuestion in updateQuestionQueue is null")
    }
    console.log("Updating question queue...", nextQuestion)
    setQuestionQueue((prevQueue) => [...prevQueue, nextQuestion])
  }

  const updateQuestion = () => {
    setQuestionQueue(prevQueue => {
      console.log("Updating Question...", prevQueue);
      const nextQuestion = prevQueue.shift();
      if (nextQuestion !== undefined) {
        console.log("here")
        console.log(nextQuestion)
        console.log(QUESTION_SCHEMA.questions[nextQuestion])
        setQuestionObj(QUESTION_SCHEMA.questions[nextQuestion]);
      }

      return prevQueue;
    });
  }

  const updateOutcome = (newOutcome) => {
    if (newOutcome === null) {
      throw new Error("newOutcome in updateOutcome is null")
    }

    console.log("Updating outcome...", newOutcome)
    if (newOutcome === Outcome.MEETS_CRITERIA) {
      navigation.replace(Screen.OUTCOME_SCREEN, {outcome: newOutcome})
    } else {
      setOutcome(newOutcome)
    }
  }

  useEffect(() => {
    console.log("hello")
    if (questionQueue && questionQueue.length > 0) {
      updateQuestion()
    } else if (questionQueue && questionQueue.length === 0) {
      navigation.replace(Screen.OUTCOME_SCREEN, {outcome: outcome})
    }
  }, [questionQueue]);

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Question questionObj={questionObj} />
      <AnswerChoices questionObj={questionObj} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} handleAnswerSelection={handleAnswerSelection} />
      <NavButton questionObj={questionObj} selectedAnswers={selectedAnswers} handleMultiAnswerSelection={handleMultiAnswerSelection} />
      <Text style={styles.questionIDText}>{questionObj.ID}</Text>
    </SafeAreaView>
  )
}

export default Survey;
