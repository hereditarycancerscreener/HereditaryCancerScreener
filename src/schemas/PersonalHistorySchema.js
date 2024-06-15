import { Outcome } from '../constants/Outcomes';
import { FAMILY_TRACK } from '../constants/Outcomes';

export const PERSONAL_HISTORY_SCHEMA = {
  questions: [
    {
      ID: "0",
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
      ID: "1",
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
      ID: "2",
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
          value: "Colon or other Lynch Cancer", //: endometrial, gastric, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome.",
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
          nextQuestion: 41
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
      question: "Was it one of the following cancers? colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
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
          nextQuestion: 41
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
          nextQuestion: 41
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
          nextQuestion: 41
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
          nnextQuestion: 34
        },
        {
          value: "Male breast",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Female breast",
          nextQuestion: 35
        },
        {
          value: "Colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intenstine",
          nextQuestion: 38
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
      question: "How many of the patient's third degree relatives had prostate cancer?",
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
      ID: "35",
      isMultiSelect: false,
      question: "How many of the patient's third degree relatives had breast cancer?",
      choices: [
        {
          value: "One",
          nextQuestion: 36
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
      ID: "36",
      isMultiSelect: false,
      question: "How old was the third degree relative?",
      choices: [
        {
          value: "51 or older",
          nextQuestion: 37
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
      ID: "37",
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
      ID: "38",
      isMultiSelect: false,
      question: "Were three or more of the patient's relatives diagnosed with colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intestinal cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 39
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
      ID: "39",
      isMultiSelect: false,
      question: "Were there three or more relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 40
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
      ID: "40",
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

    /*
    * Personal history schema
    */
    {
      ID: "41",
      isMultiSelect: true,
      question: "Which cancer(s) was the patient's relative diagnosed with?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: 42
        },
        {
          value: "Pancreatic",
          nextQuestion: 44
        },
        {
          value: "Endometrial",
          nextQuestion: 47
        },
        {
          value: "Colon",
          nextQuestion: 47
        },
        {
          value: "Renal",
          nextQuestion: 55
        },
        {
          value: "Prostate",
          nextQuestion: 58
        },
        {
          value: "Male breast",
          nextQuestion: 69
        },
        {
          value: "Female breast",
          nextQuestion: 70
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
      ID: 42,
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
          nextQuestion: 43
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
      ID: 43,
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
      ID: "44",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Second degree",
          nextQuestion: 45
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
      ID: "45",
      isMultiSelect: false,
      question: "How many of the patient's second degree relatives were diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "3 or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Fewer than 3",
          nextQuestion: 46
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "46",
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
      ID: "47",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: 48
        },
        {
          value: "Second degree",
          nextQuestion: 53
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
      ID: "48",
      isMultiSelect: false,
      question: "What age was the relative diagnosed at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: 49
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
      ID: "49",
      isMultiSelect: false,
      question: "Was this relative diagnosed with another lynch syndrome cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 50
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "50",
      isMultiSelect: false,
      question: "Were there other diagnoses of lynch syndrome cancers through one of the patient's second degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 51
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
      ID: "51",
      isMultiSelect: false,
      question: "How many diagnoses were there?", 
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 52
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
      ID: "52",
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
      ID: "53",
      isMultiSelect: false,
      question: "How many diagnoses have there been (including all Lynch)?", //reword
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 54
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
      ID: "54",
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
      ID: "55",
      isMultiSelect: false,
      question: "How many renal cancer diagnoses are in the patient's family?", 
      choices: [
        {
          value: "One",
          nextQuestion: 56
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
      ID: "56",
      isMultiSelect: false,
      question: "How old was the relative?", 
      choices: [
        {
          value: "47 or older",
          nextQuestion: 57
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
      ID: "57",
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
      ID: "58",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with prostate cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 59
        },
        {
          value: "Second degree",
          nextQuestion: 62
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
      ID: "59",
      isMultiSelect: false,
      question: "Was the prostate cancer high grade, cribiform, or metastatic?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 60
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "60",
      isMultiSelect: false,
      question: "Was anyone else in the patient's family diagnosed with cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 61
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
      ID: "61",
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
          nextQuestion: 57
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
      ID: "62",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with ovarian cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 63
        },
        {
          value: "I don't know",
          nextQuestion: 63
        }
      ]
    },
    {
      ID: "63",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with pancreatic cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 64
        },
        {
          value: "I don't know",
          nextQuestion: 64
        }
      ]
    },
    {
      ID: "64",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with male breast cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 65
        },
        {
          value: "I don't know",
          nextQuestion: 65
        }
      ]
    },
    {
      ID: "65",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with female breast cancer under the age of 51?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 66
        },
        {
          value: "I don't know",
          nextQuestion: 67
        }
      ]
    },
    {
      ID: "66",
      isMultiSelect: false,
      question: "Are there three diagnoses of breast cancer in the patient's second or third degree relatives?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 67
        },
        {
          value: "I don't know",
          nextQuestion: 67
        }
      ]
    },
    {
      ID: "67",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with metastatic, high, or very high risk prostate cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 68
        },
        {
          value: "I don't know",
          nextQuestion: 68
        }
      ]
    },
    {
      ID: "68",
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
      ID: "69",
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
      ID: "70",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with female breast cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 71
        },
        {
          value: "Second degree",
          nextQuestion: 71
        },
        {
          value: "Third degree paternal",
          nextQuestion: 71
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
      ID: "71",
      isMultiSelect: false,
      question: "What age was the relative(s) diagnosed at?", 
      choices: [
        {
          value: "51 or older",
          nextQuestion: 72
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
      ID: "72",
      isMultiSelect: false,
      question: "Was it triple negative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 73
        },
        {
          value: "I don't know",
          nextQuestion: 73
        }
      ]
    },
    {
      ID: "73",
      isMultiSelect: false,
      question: "Are there 2 or more diagnoses of breast or prostate cancer on the same side of the family?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 74
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "74",
      isMultiSelect: false,
      question: "Are there other diagnoses of male breast, ovarian, or  pancreatic cancer on the same side of the family in a first or second degree relative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 75
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.INCONCLUSIVE
        }
      ]
    },
    {
      ID: "75",
      isMultiSelect: false,
      question: "Does the patient have other relatives with colon, gastric, small bowel, biliary tract, brain, bladder/urothelial, small intestine, sebaceous adenomas, sebaceous carcinomas, and/or keratoacanthoma cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 57
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
