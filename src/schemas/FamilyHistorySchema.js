import { Outcome } from '../constants/Outcomes';

// DEPREACTED, will need to track which track we're down
// for screen headers
export const FAMILY_HISTORY_SCHEMA = {
  questions: [
    {
      ID: "100",
      isMultiSelect: true,
      question: "Which cancer(s) was the patient's relative diagnosed with?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: 101
        },
        {
          value: "Pancreatic",
          nextQuestion: 103
        },
        {
          value: "Endometrial",
          nextQuestion: 106
        },
        {
          value: "Colon",
          nextQuestion: 106
        },
        {
          value: "Renal",
          nextQuestion: 114
        },
        {
          value: "Prostate",
          nextQuestion: 117
        },
        {
          value: "Male breast",
          nextQuestion: 128
        },
        {
          value: "Female breast",
          nextQuestion: 129
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
      ID: "101",
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
          nextQuestion: 102
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
      ID: "102",
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
      ID: "103",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Second degree",
          nextQuestion: 104
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
      ID: "104",
      isMultiSelect: false,
      question: "How many of the patient's second degree relatives were diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "3 or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Fewer than 3",
          nextQuestion: 105
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "105",
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
      ID: "106",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: 107
        },
        {
          value: "Second degree",
          nextQuestion: 112
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
      ID: "107",
      isMultiSelect: false,
      question: "What age was the relative diagnosed at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: 108
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
      ID: "108",
      isMultiSelect: false,
      question: "Was this relative diagnosed with another lynch syndrome cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 109
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "109",
      isMultiSelect: false,
      question: "Were there other diagnoses of lynch syndrome cancers through one of the patient's second degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 110
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
      ID: "110",
      isMultiSelect: false,
      question: "How many diagnoses were there?", 
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 111
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
      ID: "111",
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
      ID: "112",
      isMultiSelect: false,
      question: "How many diagnoses have there been (including all Lynch)?", //reword
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 113
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
      ID: "113",
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
      ID: "114",
      isMultiSelect: false,
      question: "How many renal cancer diagnoses are in the patient's family?", 
      choices: [
        {
          value: "One",
          nextQuestion: 115
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
      ID: "115",
      isMultiSelect: false,
      question: "How old was the relative?", 
      choices: [
        {
          value: "47 or older",
          nextQuestion: 116
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
      ID: "116",
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
      ID: "117",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with prostate cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 118
        },
        {
          value: "Second degree",
          nextQuestion: 121
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
      ID: "118",
      isMultiSelect: false,
      question: "Was the prostate cancer high grade, cribiform, or metastatic?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 119
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "119",
      isMultiSelect: false,
      question: "Was anyone else in the patient's family diagnosed with cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 120
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
      ID: "120",
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
          nextQuestion: 16
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
      ID: "121",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with ovarian cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 122
        },
        {
          value: "I don't know",
          nextQuestion: 122
        }
      ]
    },
    {
      ID: "122",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with pancreatic cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 123
        },
        {
          value: "I don't know",
          nextQuestion: 123
        }
      ]
    },
    {
      ID: "123",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with male breast cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 124
        },
        {
          value: "I don't know",
          nextQuestion: 124
        }
      ]
    },
    {
      ID: "124",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with female breast cancer under the age of 51?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 125
        },
        {
          value: "I don't know",
          nextQuestion: 126
        }
      ]
    },
    {
      ID: "125",
      isMultiSelect: false,
      question: "Are there three diagnoses of breast cancer in the patient's second or third degree relatives?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 126
        },
        {
          value: "I don't know",
          nextQuestion: 126
        }
      ]
    },
    {
      ID: "126",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with metastatic, high, or very high risk prostate cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 127
        },
        {
          value: "I don't know",
          nextQuestion: 127
        }
      ]
    },
    {
      ID: "127",
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
      ID: "128",
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
      ID: "129",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with female breast cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 130
        },
        {
          value: "Second degree",
          nextQuestion: 130
        },
        {
          value: "Third degree paternal",
          nextQuestion: 130
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
      ID: "130",
      isMultiSelect: false,
      question: "What age was the relative(s) diagnosed at?", 
      choices: [
        {
          value: "51 or older",
          nextQuestion: 131
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
      ID: "131",
      isMultiSelect: false,
      question: "Was it triple negative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 132
        },
        {
          value: "I don't know",
          nextQuestion: 132
        }
      ]
    },
    {
      ID: "132",
      isMultiSelect: false,
      question: "Are there 2 or more diagnoses of breast or prostate cancer on the same side of the family?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 133
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "133",
      isMultiSelect: false,
      question: "Are there other diagnoses of male breast, ovarian, or  pancreatic cancer on the same side of the family in a first or second degree relative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 134
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "134",
      isMultiSelect: false,
      question: "Does the patient have other relatives with colon, gastric, small bowel, biliary tract, brain, bladder/urothelial, small intestine, sebaceous adenomas, sebaceous carcinomas, and/or keratoacanthoma cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 16
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
