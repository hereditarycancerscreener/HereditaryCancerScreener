export const FamilyHistorySchema = {
  questions: [
    {
      id: "0",
      type: "multi",
      question: "What cancer do/did they have?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: "1"
        },
        {
          value: "Pancreatic",
          nextQuestion: "3"
        },
        {
          value: "Endometrial", // do endo and colon follow the same path?
          nextQuestion: "6"
        },
        {
          value: "Colon",
          nextQuestion: "6"
        },
        {
          value: "Renal",
          nextQuestion: "14"
        },
        {
          value: "Prostate",
          nextQuestion: ""
        },
        {
          value: "Male breast",
          nextQuestion: ""
        },
        {
          value: "Female breast",
          nextQuestion: ""
        }
      ]
    },
    {
      id: "1",
      type: "single",
      question: "What is your patient's relation to the relative(s) with ovarian cancer?", // can they go down multiple? should we word to have closest relative?
      choices: [
        {
          value: "First degree",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Second degree",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Third degree",
          nextQuestion: "2"
        }
      ]
    },
    {
      id: "2",
      type: "single",
      question: "Is the third degree relative on the maternal or paternal side?",
      choices: [
        {
          value: "Maternal",
          nextQuestion: "genetic counselor"
        },
        {
          value: "Paternal through two males",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Paternal through fewer than two males",
          nextQuestion: "genetic counselor"
        }
      ]
    },
    {
      id: "3",
      type: "single",
      question: "What is your patient's relation to the relative(s) with pancreatic cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Second degree",
          nextQuestion: "4"
        }
      ]
    },
    {
      id: "4",
      type: "single",
      question: "How many second degree relatives had pancreatic cancer?",
      choices: [
        {
          value: "3 or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Fewer than 3",
          nextQuestion: "5"
        }
      ]
    },
    {
      id: "5",
      type: "single",
      question: "Were any diagnoses under the age of 50?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "genetic counselor"
        }
      ]
    },
    {
      id: "6",
      type: "single",
      question: "What is your patient's relation to the relative(s) with cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: "7"
        },
        {
          value: "Second degree",
          nextQuestion: "12"
        },
        {
          value: "Third degree",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        }
      ]
    },
    {
      id: "7",
      type: "single",
      question: "What age was the relative diagnosed at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: "8"
        },
        {
          value: "Under the age of 50",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        }
      ]
    },
    {
      id: "8",
      type: "single",
      question: "Did they have another LS cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "9"
        }
      ]
    },
    {
      id: "9",
      type: "single",
      question: "Were there other diagnoses of LS cancers through SDR?", //in relative with cancer or family?
      choices: [
        {
          value: "Yes",
          nextQuestion: "10"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        }
      ]
    },
    {
      id: "10",
      type: "single",
      question: "How many diagnose were there?", 
      choices: [
        {
          value: "One",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
        {
          value: "Two",
          nextQuestion: "11"
        },
        {
          value: "Three or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        }
      ]
    },
    {
      id: "11",
      type: "single",
      question: "Was at least one diagnose under the age of 50?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        }
      ]
    },
    {
      id: "12",
      type: "single",
      question: "How many diagnoses have there been (including all Lynch)?", //reword
      choices: [
        {
          value: "One",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
        {
          value: "Two",
          nextQuestion: "13"
        },
        {
          value: "Three or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        }
      ]
    },
    {
      id: "13",
      type: "single",
      question: "At what age were they diagnosed?", 
      choices: [
        {
          value: "50 or older",
          nextQuestion: "genetic counselor" // PREMM
        },
        {
          value: "Under the age of 50",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        }
      ]
    },
    {
      id: "14",
      type: "single",
      question: "How many renal cancer diagnoses are in the patients family?", 
      choices: [
        {
          value: "One",
          nextQuestion: "15"
        },
        {
          value: "Two or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        }
      ]
    },
    {
      id: "15",
      type: "single",
      question: "How old was the relative?", 
      choices: [
        {
          value: "47 or older",
          nextQuestion: "16"
        },
        {
          value: "Under the age of 47",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        }
      ]
    },
    {
      id: "16",
      type: "single",
      question: "Did the relative's tumor have the the following histologic characteristics ADD BULLETS?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
        {
          value: "Unsure",
          outcome: "genetic counselor"
        }
      ]
    },
  ]
};
