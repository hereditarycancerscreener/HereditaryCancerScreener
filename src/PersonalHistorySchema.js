export const PersonalHistorySchema = {
  questions: [
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
      question: "What kind of cancer did/does your patient have?",
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
          nextQuestion: ""
        },
        {
          value: "Renal",
          nextQuestion: ""
        },
        {
          value: "Endometrial",
          nextQuestion: ""
        },
        {
          value: "Breast",
          nextQuestion: ""
        },
        {
          value: "Prostate",
          nextQuestion: ""
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
        // {
        //   value: "Limited or Unknown",
        //   nextQuestion: "genetic counselor"
        // }
      ]
    }
  ]
};