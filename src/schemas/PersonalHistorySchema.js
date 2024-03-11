import { Outcome } from '../constants/Outcomes';
import { FAMILY_TRACK } from '../constants/Outcomes';

export const PERSONAL_HISTORY_SCHEMA = {
  questions: [
    {
      ID: 0,
      isMultiSelect: false,
      question: "Is the patient of Ashkenazi Jewish ancestry with at least one of four Ashkenazi Jewish grandparents?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 1,
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: 1,
      isMultiSelect: false,
      question: "Does the patient have a personal history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 2,
        },
        {
          value: "No",
          nextQuestion: 3,
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: 2,
      isMultiSelect: true,
      question: "What kind of cancer(s) was the patient diagnosed with?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Pancreatic",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Colon",
          nextQuestion: 4,
        },
        {
          value: "Renal",
          nextQuestion: 5,
        },
        {
          value: "Endometrial",
          nextQuestion: 8,
        },
        {
          value: "Breast",
          nextQuestion: 16,
        },
        {
          value: "Prostate",
          nextQuestion: 29,
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
      ID: "3",
      isMultiSelect: false,
      question: "Does the patient have a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: FAMILY_TRACK
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
      ID: "4",
      isMultiSelect: false,
      question: "At what age was the patient diagnosed with colon cancer?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
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
      ID: "5",
      isMultiSelect: false,
      question: "At what age was the patient diagnosed with renal cancer?",
      choices: [
        {
          value: "47 or older",
          nextQuestion: 6
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
      ID: "6",
      isMultiSelect: false,
      question: "Were there additional renal cancer diagnoses in a first or second degree relative?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 7
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "7",
      isMultiSelect: false,
      question: "Did the relative's tumor have any of the following histologic characteristics? Multifocal papillary histology, HLRCC-associated RCC, RCC with fumarate hydratase (FH) deficiency or other histologic features associated with HLRCC, Birt-Hogg-Dubé syndrome (BHDS)-related histology (multiple chromophobe, oncocytoma, or oncocytic hybrid), Angiomyolipomas of the kidney and one additional tuberous sclerosis complex (TSC) criterion in the same person, Succinate dehydrogenase (SDH)-deficient RCC histologye",
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
      ID: "8",
      isMultiSelect: false,
      question: "What age was the patient diagnosed with endometrial cancer at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: 9
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
      ID: "9",
      isMultiSelect: false,
      question: "Has the patient been diagnosed with another cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 10
        },
        {
          value: "No",
          nextQuestion: 11
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "10",
      isMultiSelect: false,
      question: "Was it one of the following cancers? E colon, Gastric, Pancreas, Small Bowel, Biliary Tract, Brain, Bladder/Urothelial, and/or Small intestine",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: FAMILY_TRACK
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "11",
      isMultiSelect: false,
      question: "Does the patient have a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 12
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
      ID: "12",
      isMultiSelect: false,
      question: "Was it one of the following cancers through a second degree relative? Colon, Gastric, Pancreas, Small Bowel, Biliary Tract, Brain, Bladder/Urothelial, and/or Small intestine, sebaceous adenomas, sebaceous carcinomas, keratoacanthoma",
      choices: [
        {
          value: "Yes",
          nextQuestion: 13
        },
        {
          value: "No",
          nextQuestion: 15
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "13",
      isMultiSelect: false,
      question: "Were any of the relatives 50 or older?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 14
        },
        {
          value: "No",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "14",
      isMultiSelect: false,
      question: "How many of the relatives were younger than 50?",
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
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
      ID: "15",
      isMultiSelect: false,
      question: "Were there other cancer diagnoses through third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: FAMILY_TRACK
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
      ID: "16",
      isMultiSelect: false,
      question: "What age was the patient diagnosed with breast cancer at?",
      choices: [
        {
          value: "51 or older",
          nextQuestion: 17
        },
        {
          value: "Under the age of 51",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "17",
      isMultiSelect: false,
      question: "Were there multiple primary breast cancers?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 18
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "18",
      isMultiSelect: false,
      question: "Was it triple negative?",
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
      ID: "19",
      isMultiSelect: false,
      question: "Was it lobular breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 20
        },
        {
          value: "No",
          nextQuestion: 21
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "20",
      isMultiSelect: false,
      question: "Does the patient have a personal or family history of diffuse gastric cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 21
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "21",
      isMultiSelect: false,
      question: "Does the patient have a family history of cancer through third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 22
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
      ID: "22",
      isMultiSelect: true,
      question: "Which cancer(s) were the relatives diagnosed with?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Pancreatic",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Colon",
          nextQuestion: FAMILY_TRACK
        },
        {
          value: "Male breast cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Female breast cancer",
          nextQuestion: 25
        },
        {
          value: "High grade prostate",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Low grade prostate",
          nextQuestion: 23
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
      ID: "23",
      isMultiSelect: false,
      question: "Were there two or more relatives with prostate cancer?",
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
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "24",
      isMultiSelect: false,
      question: "Were any of the patient's other relatives diagnosed with cancer?",
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
      ID: "25",
      isMultiSelect: false,
      question: "Was the relative with female breast cancer diagnosed when they were under the age of 51?",
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
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "26",
      isMultiSelect: false,
      question: "What is the greatest number of breast cancer diagnoses a relative had?",
      choices: [
        {
          value: "One",
          nextQuestion: 27
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
      ID: "27",
      isMultiSelect: false,
      question: "Has anyone in the patient's family been diagnosed with prostate cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 28
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "28",
      isMultiSelect: false,
      question: "Were there any other cancer diagnoses through one or more of the patient's third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: FAMILY_TRACK
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
      ID: "29",
      isMultiSelect: false,
      question: "What grade was the prostate cancer?",
      choices: [
        {
          value: "High-grade",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Intraductal or cribiform",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "Low-grade",
          nextQuestion: 30
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "30",
      isMultiSelect: false,
      question: "Does the patient have a history of any of the following cancers? Colon, exocine pancreatic, gastric, melanoma, upper tract urothelial, glioblastoma, biliary track, small intestinal cancer, or male breast cancer",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 31
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "31",
      isMultiSelect: false,
      question: "Does the patient have a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 32
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
      ID: "32",
      isMultiSelect: false,
      question: "Were any of the patient's third degree relatives diagnosed with cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 33
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
      ID: "33",
      isMultiSelect: true,
      question: "Which cancer(s) were the third degree relatives diagnosed with?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Pancreatic",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Prostate",
          nnextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Male breast",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Female breast",
          nextQuestion: 34
        },
        {
          value: "Colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intenstine",
          nextQuestion: 37
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
      ID: "34",
      isMultiSelect: false,
      question: "How many of the patient's third degree relatives had breast cancer?",
      choices: [
        {
          value: "One",
          nextQuestion: 35
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
      ID: "35",
      isMultiSelect: false,
      question: "How old was the third degree relative?",
      choices: [
        {
          value: "51 or older",
          nextQuestion: 36
        },
        {
          value: "Under the age of 51",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "36",
      isMultiSelect: false,
      question: "Were any other relatives diagnosed with prostate cancer?",
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
      ID: "37",
      isMultiSelect: false,
      question: "Were three or more of the patient's relatives diagnosed with colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intestinal cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 38
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
      ID: "38",
      isMultiSelect: false,
      question: "Were they first or second degree relatives?",
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
  ]
};
