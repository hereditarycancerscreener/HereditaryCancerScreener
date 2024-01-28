import { Outcome } from '../constants/Outcomes';
import { FAMILY_TRACK } from '../constants/Outcomes';

export const PERSONAL_HISTORY_SCHEMA = {
  questions: [
    {
      ID: 0,
      isMultiSelect: false,
      question: "Is your patient of Ashkenazi Jewish Ancestry with at least one of 4 Ashkenazi Jewish grandparents?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 1,
        }
      ]
    },
    {
      ID: 1,
      isMultiSelect: false,
      question: "Does your patient have Personal History of Cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 2,
        },
        {
          value: "No",
          nextQuestion: 3,
        }
      ]
    },
    {
      ID: 2,
      isMultiSelect: true,
      question: "What kind of cancer(s) did/does your patient have?",
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
          nextQuestion: 17,
        }
      ]
    },
    {
      ID: "3",
      isMultiSelect: false,
      question: "Does your patient have a family history of cancer?",
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
          value: "Unsure",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "4",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with colon cancer?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "Under the age of 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
      ]
    },
    {
      ID: "5",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with renal cancer?",
      choices: [
        {
          value: "47 or older",
          nextQuestion: "6"
        },
        {
          value: "Under 47",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
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
          nextQuestion: "7"
        },
      ]
    },
    {
      ID: "7",
      isMultiSelect: false,
      question: "DID the tumor have any of the following histologic characteristics? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "8",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with endometrial cancer?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: "9"
        },
        {
          value: "Under 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
      ]
    },
    {
      ID: "9",
      isMultiSelect: false,
      question: "Has your patient been diagnosed with another cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "10"
        },
        {
          value: "No",
          nextQuestion: "11"
        },
      ]
    },
    {
      ID: "10",
      isMultiSelect: false,
      question: "Was it one of the following cancers? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: FAMILY_TRACK
        },
      ]
    },
    {
      ID: "11",
      isMultiSelect: false,
      question: "Is there a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "12"
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "12",
      isMultiSelect: false,
      question: "Was it one of the following cancers through a second degree relative? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: "13"
        },
        {
          value: "No",
          nextQuestion: "15"
        },
      ]
    },
    {
      ID: "13",
      isMultiSelect: false,
      question: "Were any of them 50 or older?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "14"
        },
        {
          value: "No",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
      ]
    },
    {
      ID: "14",
      isMultiSelect: false,
      question: "How many of them were younger than 50?",
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
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
      ]
    },
    {
      ID: "16",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with breast cancer?",
      choices: [
        {
          value: "51 or older",
          nextQuestion: "17"
        },
        {
          value: "Under 51",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
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
          nextQuestion: "18"
        },
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
          nextQuestion: "19"
        },
      ]
    },
    {
      ID: "19",
      isMultiSelect: false,
      question: "Was it lobular breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "20"
        },
        {
          value: "No",
          nextQuestion: "21"
        },
      ]
    },
    {
      ID: "20",
      isMultiSelect: false,
      question: "Is there a personal or family history of diffuse gastric cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: "21"
        },
      ]
    },
    {
      ID: "21",
      isMultiSelect: false,
      question: "Do you have a family history of cancer through third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "22"
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "22",
      isMultiSelect: true,
      question: "Which isMultiSelect of cancer(s) dID they have?",
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
          nextQuestion: "25"
        },
        {
          value: "High grade prostate",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Low grade prostate",
          nextQuestion: "23" // this track doesn't make much sense
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
          nextQuestion: "24"
        },
      ]
    },
    {
      ID: "24",
      isMultiSelect: false,
      question: "DID anyone else have breast cancer?", // this is vauge wording
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "25",
      isMultiSelect: false,
      question: "Were they 50 or younger?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: "26"
        },
      ]
    },
    {
      ID: "26",
      isMultiSelect: false,
      question: "What is the maximum number of breast cancer diagnoses a relative had?", // check wording
      choices: [
        {
          value: "One",
          nextQuestion: "27"
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
      ]
    },
    {
      ID: "27",
      isMultiSelect: false,
      question: "Did anyone in the family have prostate cancer?", // whose family?
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: "28"
        },
      ]
    },
    {
      ID: "28",
      isMultiSelect: false,
      question: "Was there any other cancer through a third degree relative?", // patient or relative who had prostate?
      choices: [
        {
          value: "Yes",
          nextQuestion: FAMILY_TRACK
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
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
          nextQuestion: "30"
        },
      ]
    },
    {
      ID: "30",
      isMultiSelect: false,
      question: "Does the patient have a history of any of the following cancers? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: "31"
        },
      ]
    },
    {
      ID: "31",
      isMultiSelect: false,
      question: "Does the patient have a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "32"
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "32",
      isMultiSelect: false,
      question: "Did any third degree relatives have cancer",
      choices: [
        {
          value: "Yes",
          nextQuestion: "33"
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "33",
      isMultiSelect: true,
      question: "Which cancer(s) did the third degree relative have?",
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
          nextQuestion: "34"
        },
        {
          value: "Colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intenstine",
          nextQuestion: "37"
        },
      ]
    },
    {
      ID: "34",
      isMultiSelect: false,
      question: "How many third degree relatives had breast cancer?",
      choices: [
        {
          value: "One",
          nextQuestion: "35"
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
      ]
    },
    {
      ID: "35",
      isMultiSelect: false,
      question: "How old was the third degree relative?",
      choices: [
        {
          value: "Older than 50",
          nextQuestion: "36"
        },
        {
          value: "50 or younger",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
      ]
    },
    {
      ID: "36",
      isMultiSelect: false,
      question: "DID any other relative have prostate cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "37",
      isMultiSelect: false,
      question: "Were there three or more relatives that had ...? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: "38"
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
    {
      ID: "39",
      isMultiSelect: false,
      question: "Were there first or second degree relatives that had ...? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
      ]
    },
  ]
};
