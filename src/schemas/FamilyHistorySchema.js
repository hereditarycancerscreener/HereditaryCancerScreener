import { Outcome } from '../constants/Outcomes';

export const FAMILY_HISTORY_SCHEMA = {
  questions: [
    {
      id: 0,
      isMultiSelect: true,
      question: "What cancer do/did they have?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: 1
        },
        {
          value: "Pancreatic",
          nextQuestion: 3
        },
        {
          value: "Endometrial", // do endo and colon follow the same path?
          nextQuestion: 6
        },
        {
          value: "Colon",
          nextQuestion: 6
        },
        {
          value: "Renal",
          nextQuestion: 14
        },
        {
          value: "Prostate",
          nextQuestion: 17
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
      isMultiSelect: false,
      question: "What is your patient's relation to the relative(s) with ovarian cancer?", // can they go down multiple? should we word to have closest relative?
      choices: [
        {
          value: "First degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Second degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Third degree",
          nextQuestion: 3
        }
      ]
    },
    {
      id: "2",
      isMultiSelect: false,
      question: "Is the third degree relative on the maternal or paternal side?",
      choices: [
        {
          value: "Maternal",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "Paternal through two males",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Paternal through fewer than two males",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      id: "3",
      isMultiSelect: false,
      question: "What is your patient's relation to the relative(s) with pancreatic cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Second degree",
          nextQuestion: 4
        }
      ]
    },
    {
      id: "4",
      isMultiSelect: false,
      question: "How many second degree relatives had pancreatic cancer?",
      choices: [
        {
          value: "3 or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Fewer than 3",
          nextQuestion: 5
        }
      ]
    },
    {
      id: "5",
      isMultiSelect: false,
      question: "Were any diagnoses under the age of 50?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      id: "6",
      isMultiSelect: false,
      question: "What is your patient's relation to the relative(s) with cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: 7
        },
        {
          value: "Second degree",
          nextQuestion: 12
        },
        {
          value: "Third degree",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      id: "7",
      isMultiSelect: false,
      question: "What age was the relative diagnosed at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: 8
        },
        {
          value: "Under the age of 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        }
      ]
    },
    {
      id: "8",
      isMultiSelect: false,
      question: "Did they have another LS cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 9
        }
      ]
    },
    {
      id: "9",
      isMultiSelect: false,
      question: "Were there other diagnoses of LS cancers through SDR?", //in relative with cancer or family?
      choices: [
        {
          value: "Yes",
          nextQuestion: 10
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      id: "10",
      isMultiSelect: false,
      question: "How many diagnose were there?", 
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 11
        },
        {
          value: "Three or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        }
      ]
    },
    {
      id: "11",
      isMultiSelect: false,
      question: "Was at least one diagnose under the age of 50?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      id: "12",
      isMultiSelect: false,
      question: "How many diagnoses have there been (including all Lynch)?", //reword
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 13
        },
        {
          value: "Three or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        }
      ]
    },
    {
      id: "13",
      isMultiSelect: false,
      question: "At what age were they diagnosed?", 
      choices: [
        {
          value: "50 or older",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR // PREMM
        },
        {
          value: "Under the age of 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        }
      ]
    },
    {
      id: "14",
      isMultiSelect: false,
      question: "How many renal cancer diagnoses are in the patients family?", 
      choices: [
        {
          value: "One",
          nextQuestion: 15
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        }
      ]
    },
    {
      id: "15",
      isMultiSelect: false,
      question: "How old was the relative?", 
      choices: [
        {
          value: "47 or older",
          nextQuestion: 16
        },
        {
          value: "Under the age of 47",
          nextQuestion: Outcome.MEETS_CRITERIA
        }
      ]
    },
    {
      id: "16",
      isMultiSelect: false,
      question: "Did the relative's tumor have the the following histologic characteristics ADD BULLETS?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Unsure",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      id: "17",
      isMultiSelect: false,
      question: "What is your patient's relation to the relative(s) with prostate cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 18
        },
        {
          value: "Second degree",
          nextQuestion: ""
        }
      ]
    },
    {
      id: "18",
      isMultiSelect: false,
      question: "Was the prostate cancer high grade, cribiform or metastatic?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 19
        }
      ]
    },
    {
      id: "29",
      isMultiSelect: false,
      question: "Does anyone else in the family have cancer?", 
      choices: [
        {
          value: "Yes, breast cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Yes, prostate cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Yes ADD BULLETS",
          nextQuestion: 6
        },
        {
          value: "No",
          nnextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
  ]
};
