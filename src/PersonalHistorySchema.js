export const PersonalHistorySchema = {
  questions: [ // what if patient doesn't know?
    {
      id: "0",
      type: "single",
      question: "Is your patient of Ashkenazi Jewish Ancestry with at least one of 4 Ashkenazi Jewish grandparents?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "1"
        }
      ]
    },
    {
      id: "1",
      type: "single",
      question: "Does your patient have Personal History of Cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "2"
        },
        {
          value: "No",
          nextQuestion: "3"
        }
      ]
    },
    {
      id: "2",
      type: "multi",
      question: "What kind of cancer(s) did/does your patient have?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Pancreatic",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Colon",
          nextQuestion: "4"
        },
        {
          value: "Renal",
          nextQuestion: "5"
        },
        {
          value: "Endometrial",
          nextQuestion: "8"
        },
        {
          value: "Breast",
          nextQuestion: "16"
        },
        {
          value: "Prostate",
          nextQuestion: "29"
        }
      ]
    },
    {
      id: "3",
      type: "single",
      question: "Does your patient have a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "family track"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
        {
          value: "Unsure",
          nextQuestion: "genetic counselor"
        }
      ]
    },
    {
      id: "4",
      type: "single",
      question: "At what age was your patient diagnosed with colon cancer?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: "genetic counselor"
        },
        {
          value: "Under the age of 50",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "5",
      type: "single",
      question: "At what age was your patient diagnosed with renal cancer?",
      choices: [
        {
          value: "47 or older",
          nextQuestion: "6"
        },
        {
          value: "Under 47",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "6",
      type: "single",
      question: "Were there additional renal cancer diagnoses in a first or second degree relative?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "7"
        },
      ]
    },
    {
      id: "7",
      type: "single",
      question: "Did the tumor have any of the following histologic characteristics? ADD BULLETS",
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
      ]
    },
    {
      id: "8",
      type: "single",
      question: "At what age was your patient diagnosed with endometrial cancer?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: "9"
        },
        {
          value: "Under 50",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "9",
      type: "single",
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
      id: "10",
      type: "single",
      question: "Was it one of the following cancers? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "familyTrack" // is this right lol makes no sense
        },
      ]
    },
    {
      id: "11",
      type: "single",
      question: "Is there a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "12"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "12",
      type: "single",
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
      id: "13",
      type: "single",
      question: "Were any of them 50 or older?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "14"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "14",
      type: "single",
      question: "How many of them were younger than 50?",
      choices: [
        {
          value: "One",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
        {
          value: "Two or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "15",
      type: "single",
      question: "Were there other cancer diagnoses through third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "familyTrack"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "16",
      type: "single",
      question: "At what age was your patient diagnosed with breast cancer?",
      choices: [
        {
          value: "51 or older",
          nextQuestion: "17"
        },
        {
          value: "Under 51",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "17",
      type: "single",
      question: "Were there multiple primary breast cancers?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "18"
        },
      ]
    },
    {
      id: "18",
      type: "single",
      question: "Was it triple negative?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "19"
        },
      ]
    },
    {
      id: "19",
      type: "single",
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
      id: "20",
      type: "single",
      question: "Is there a personal or family history of diffuse gastric cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "21"
        },
      ]
    },
    {
      id: "21",
      type: "single",
      question: "Do you have a family history of cancer through third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "22"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "22",
      type: "multi",
      question: "Which type of cancer(s) did they have?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Pancreatic",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Colon",
          nextQuestion: "fanilyTrack"
        },
        {
          value: "Male breast cancer",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Female breast cancer",
          nextQuestion: "25"
        },
        {
          value: "High grade prostate",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Low grade prostate",
          nextQuestion: "23" // this track doesn't make much sense
        }
      ]
    },
    {
      id: "23",
      type: "single",
      question: "Were there two or more relatives with prostate cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "24"
        },
      ]
    },
    {
      id: "24",
      type: "single",
      question: "Did anyone else have breast cancer?", // this is vauge wording
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
      ]
    },
    {
      id: "25",
      type: "single",
      question: "Were they 50 or younger?",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "26"
        },
      ]
    },
    {
      id: "26",
      type: "single",
      question: "What is the maximum number of breast cancer diagnoses a relative had?", // check wording
      choices: [
        {
          value: "One",
          nextQuestion: "27"
        },
        {
          value: "Two or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "27",
      type: "single",
      question: "Did anyone in the family have prostate cancer?", // whose family?
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "28"
        },
      ]
    },
    {
      id: "28",
      type: "single",
      question: "Was there any other cancer through a third degree relative?", // patient or relative who had prostate?
      choices: [
        {
          value: "Yes",
          nextQuestion: "familyTrack"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "29",
      type: "single",
      question: "What grade was the prostate cancer?",
      choices: [
        {
          value: "High-grade",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Intraductal or cribiform",
          nextQuestion: "genetic counselor"
        },
        {
          value: "Low-grade",
          nextQuestion: "outcome",
          outcome: "30"
        },
      ]
    },
    {
      id: "30",
      type: "single",
      question: "Does the patient have a history of any of the following cancers? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "No",
          nextQuestion: "31"
        },
      ]
    },
    {
      id: "31",
      type: "single",
      question: "Does the patient have a family history of cancer?", // can we cut this
      choices: [
        {
          value: "Yes",
          nextQuestion: "32"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "32",
      type: "single",
      question: "Did any third degree relatives have cancer",
      choices: [
        {
          value: "Yes",
          nextQuestion: "33"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "33",
      type: "multi",
      question: "Which cancer(s) did the third degree relative have?",
      choices: [
        {
          value: "Ovarian",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Pancreatic",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Prostate",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
        {
          value: "Male breast",
          nextQuestion: "outcome",
          outcome: "meets criteria"
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
      id: "34",
      type: "single",
      question: "How many third degree relatives had breast cancer?",
      choices: [
        {
          value: "One",
          nextQuestion: "35"
        },
        {
          value: "Two or more",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "35",
      type: "single",
      question: "How old was the third degree relative?",
      choices: [
        {
          value: "Older than 50",
          nextQuestion: "36"
        },
        {
          value: "50 or younger",
          nextQuestion: "outcome",
          outcome: "meets criteria"
        },
      ]
    },
    {
      id: "36",
      type: "single",
      question: "Did any other relative have prostate cancer?",
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
      ]
    },
    {
      id: "37",
      type: "single",
      question: "Were there three or more relatives that had ...? ADD BULLETS",
      choices: [
        {
          value: "Yes",
          nextQuestion: "38"
        },
        {
          value: "No",
          nextQuestion: "outcome",
          outcome: "does not meet criteria"
        },
      ]
    },
    {
      id: "39",
      type: "single",
      question: "Were there first or second degree relatives that had ...? ADD BULLETS",
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
      ]
    },
  ]
};
