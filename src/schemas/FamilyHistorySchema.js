import { Outcome } from '../constants/Outcomes';

export const FAMILY_HISTORY_SCHEMA = {
  questions: [
    {
      id: 0,
      isMultiSelect: true,
      question: "Which cancer(s) was the patient's relative diagnosed with?",
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
          value: "Endometrial",
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
          nextQuestion: 28
        },
        {
          value: "Female breast",
          nextQuestion: 29
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "1",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with ovarian cancer?", // can they go down multiple? should we word to have closest relative?
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
          nextQuestion: 2
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "2",
      isMultiSelect: false,
      question: "Is the third degree relative on the patient's maternal or paternal side?",
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
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "3",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Second degree",
          nextQuestion: 4
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "4",
      isMultiSelect: false,
      question: "How many of the patient's second degree relatives were diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "3 or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Fewer than 3",
          nextQuestion: 5
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "5",
      isMultiSelect: false,
      question: "Were any of the diagnoses under the age of 50?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "6",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with cancer?",
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
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
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
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "8",
      isMultiSelect: false,
      question: "Was this relative diagnosed with another lynch syndrome cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 9
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "9",
      isMultiSelect: false,
      question: "Were there other diagnoses of lynch syndrome cancers through one of the patient's second degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 10
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "10",
      isMultiSelect: false,
      question: "How many diagnoses were there?", 
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
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "11",
      isMultiSelect: false,
      question: "Was at least one diagnosis under the age of 50?", 
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
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
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
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "13",
      isMultiSelect: false,
      question: "What age were they diagnosed at?", 
      choices: [
        {
          value: "50 or older",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR // PREMM
        },
        {
          value: "Under the age of 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "14",
      isMultiSelect: false,
      question: "How many renal cancer diagnoses are in the patient's family?", 
      choices: [
        {
          value: "One",
          nextQuestion: 15
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
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
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "16",
      isMultiSelect: false,
      question: "Did the relative's tumor have the the following histologic characteristics? Multifocal papillary histology, HLRCC-associated RCC, RCC with fumarate hydratase (FH) deficiency or other histologic features associated with HLRCC, Birt-Hogg-Dubé syndrome (BHDS)-related histology (multiple chromophobe, oncocytoma, or oncocytic hybrid, Angiomyolipomas of the kidney and one additional tuberous sclerosis complex (TSC) criterion in the same person, or Succinate dehydrogenase (SDH)-deficient RCC histologye", 
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
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      id: "17",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with prostate cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 18
        },
        {
          value: "Second degree",
          nextQuestion: 21
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "18",
      isMultiSelect: false,
      question: "Was the prostate cancer high grade, cribiform, or metastatic?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 19
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "19",
      isMultiSelect: false,
      question: "Was anyone else in the patient's family diagnosed with cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 20
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "20",
      isMultiSelect: false,
      question: "Which cancer(s) was the patient's relative diagnosed with?", 
      choices: [
        {
          value: "Breast",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Prostate",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Colon, Gastric, Small Bowel, Biliary Tract, Brain, Bladder/Urothelial, Small intestine, sebaceous adenomas, sebaceous carcinomas, and/or keratoacanthoma?",
          nextQuestion: 6
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "21",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with ovarian cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 22
        },
        {
          value: "I don't know",
          nextQuestion: 22
        }
      ]
    },
    {
      id: "22",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with pancreatic cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 23
        },
        {
          value: "I don't know",
          nextQuestion: 23
        }
      ]
    },
    {
      id: "23",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with male breast cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 24
        },
        {
          value: "I don't know",
          nextQuestion: 24
        }
      ]
    },
    {
      id: "24",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with female breast cancer under the age of 51?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 25
        },
        {
          value: "I don't know",
          nextQuestion: 26
        }
      ]
    },
    {
      id: "25",
      isMultiSelect: false,
      question: "Are there three diagnoses of breast cancer in the patient's second or third degree relatives?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 26
        },
        {
          value: "I don't know",
          nextQuestion: 26
        }
      ]
    },
    {
      id: "26",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with metastatic, high, or very high risk prostate cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 27
        },
        {
          value: "I don't know",
          nextQuestion: 27
        }
      ]
    },
    {
      id: "27",
      isMultiSelect: false,
      question: "Are there two or more additional diagnoses of breast cancer and prostate cancer in the patient's second or third degree relatives?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "28",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with male breast cancer?", 
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
          value: "Third degree related through two male relatives",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "29",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with female breast cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 30
        },
        {
          value: "Second degree",
          nextQuestion: 30
        },
        {
          value: "Third degree paternal",
          nextQuestion: 30
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "30",
      isMultiSelect: false,
      question: "What age was the relative(s) diagnosed at?", 
      choices: [
        {
          value: "51 or older",
          nextQuestion: 31
        },
        {
          value: "Under the age of 51",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "31",
      isMultiSelect: false,
      question: "Was it triple negative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 32
        },
        {
          value: "I don't know",
          nextQuestion: 32
        }
      ]
    },
    {
      id: "32",
      isMultiSelect: false,
      question: "Are there other diagnoses of breast, prostate, ovarian, and/or pancreatic cancer on the same side of the family through a first or second degree relative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 33
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      id: "33",
      isMultiSelect: false,
      question: "Does the patient have other relatives with colon, gastric, small bowel, biliary tract, brain, bladder/urothelial, small intestine, sebaceous adenomas, sebaceous carcinomas, and/or keratoacanthoma cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 6
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
  ]
};
