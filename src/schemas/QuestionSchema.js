import { Outcome } from '../constants/Outcomes';

export const QUESTION_SCHEMA = {
  questions: [
    {
      ID: "0",
      track: "Personal History",
      isMultiSelect: false,
      breadcrumbAbbr: "Ashkenazi Jewish",
      learningStar: "NCCN suggests genetic testing for founder BRCA in all people of Ashkenazi Jewish decent if one of four of their grandparents is Ashkenazi Jewish, regardless of family history of cancer", // what is this supposed to be ??
      question: "Is your patient of Ashkenazi Jewish ancestry, with at least one of four Ashkenazi Jewish grandparents?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ],
    },
    {
      ID: "1",
      track: "Personal History",
      isMultiSelect: false,
      breadcrumbAbbr: "Personal Cancer History",
      question: "Does your patient have a personal history of cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "2",
      track: "Personal History",
      isMultiSelect: true,
      breadcrumbAbbr: "Personal Cancer History",
      question: "What type of cancer was your patient diagnosed with?",
      choices: [
        {
          value: "Ovarian Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Pancreatic Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Male Breast Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Female Breast Cancer",
          nextQuestion: 4,
          learningStar: "Inclusive of DCIS"
        },
        {
          value: "Prostate Cancer",
          nextQuestion: 18,
        },
        {
          value: "Renal Cancer",
          nextQuestion: 27, 
        },
        {
          value: "Colorectal Cancer",
          nextQuestion: 30,
        },
        {
          value: "Endometrial Cancer",
          nextQuestion: 41,
        },
        {
          value: "Other Lynch Syndrome Cancer",
          nextQuestion: 53,
          learningStar: "Includes gastric, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome"
        },
        // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
        {
          value: "Other Cancer",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
        {
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "3",
      track: "Personal History",
      isMultiSelect: false,
      breadcrumbAbbr: "Family Cancer History",
      question: "Does your patient have a family history of cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 65
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "4",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Breast Cancer Age",
      question: "At what age was your patient diagnosed with breast cancer?",
      choices: [
        {
          value: "Age 51 or older",
          nextQuestion: 5
        },
        {
          value: "Age 50 or younger",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ],
      learningStar: "American College of breast surgeons reccomends testing for BRCA if diagnosed with breast cancer at any age"
    },
    {
      ID: "5",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Multiple Primary Breast Cancer",
      question: "Did your patient have more than one primary breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 6
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "6",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Breast Cancer ER/PR/HER2 Negative",
      question:  "Was your patient's breast cancer ER/PR/HER2 negative?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "7",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Lobular Breast Cancer",
      question: "Did your patient have lobular breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 8
        },
        {
          value: "No",
          nextQuestion: 9
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "8",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Diffuse Gastric Cancer History",
      question: "Does your patient have a personal or family history of diffuse gastric cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "9",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Third Degree Relative Cancer",
      learningStar: "Through third degree relatives include parents, children, siblings, grandparents, grandchildren, aunts, uncles, nieces, nephews, half sibilings, first cousins, and great aunts or uncles",
      question: "Does your patient have a family history of cancer through third degree relatives?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ],
    },
    {
      ID: "10",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: true,
      breadcrumbAbbr: "Relative Cancers",
      question: "Which cancer(s) were the relatives diagnosed with?",
      choices: [
        {
          value: "Ovarian Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Pancreatic Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Male Breast Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Female Breast Cancer",
          nextQuestion: 11
        },
        {
          value: "Prostate Cancer",
          nextQuestion: 15
        },
        {
          value: "Colorectal Cancer",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "Endometrial Cancer",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "Other Lynch Cancer",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR,
          learningStar: "Includes gastric, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome."
        },
        {
          // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
          value: "Other Cancer",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "11",
      track: "Personal History: Female Breast Cancer", // maybe Personal History: Relative with Female Breast Cancer
      isMultiSelect: false,
      breadcrumbAbbr: "Relative with Female Breast Cancer Age",
      question: "How old was the relative with female breast cancer when they were diagnosed?",
      choices: [
        {
          value: "51 or older", 
          nextQuestion: 12
        },
        {
          value: "Under the age of 51", 
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "12",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Two or More Breast Cancer Diagnoses in Third Degree Relatives",
      learningStar: "Through third degree relatives include parents, children, siblings, grandparents, grandchildren, aunts, uncles, nieces, nephews, half sibilings, first cousins, great aunts or uncles",
      question: "Are there two or more diagnoses of breast cancer in your patient's family through a third degree relative?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 13
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ],
    },
    {
      ID: "13",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Relative Prostate Cancer",
      question: "Has anyone in your patient's family been diagnosed with prostate cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 14
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "14",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      breadcrumbAbbr: "Other Third Degree Relative Cancers",
      question: "Were there any other cancer diagnoses through the patient's third degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 65
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "15",
      track: "Personal History: Female Breast Cancer", // maybe Personal History: Female Breast Cancer, Relative with Prostate Cancer
      isMultiSelect: false,
      breadcrumbAbbr: "Prostate Cancer Grade",
      question: "Was the relative's prostate cancer high or low grade?",
      choices: [
        {
          value: "Metastatic, high grade, or very high risk group",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Low grade",
          nextQuestion: 16
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "16",
      track: "Personal History: Female Breast Cancer", // maybe Personal History: Female Breast Cancer, Relative with Prostate Cancer
      isMultiSelect: false,
      question: "Were there two or more relatives with prostate cancer on the same side of the family?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 17
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "17",
      track: "Personal History: Female Breast Cancer",
      isMultiSelect: false,
      question: "Was anyone else on the same side of the patient's family diagnosed with breast cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "18", // this is a lot in one question...
      track: "Personal History: Prostate Cancer",
      isMultiSelect: false,
      question: "Was your patient's prostate cancer any of the following:", // has to be one of them right? should be Which of..
      choices: [
        {
          value: "Metastatic, high-risk, or very high risk disease",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Diagnosed age 55 or younger OR intermediate risk with intraductal/cribiform histology",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        },
        {
          value: "Diagnosed age 56 or older OR low risk",
          nextQuestion: 19
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "19",
      track: "Personal History: Prostate Cancer",
      isMultiSelect: false,
      learningStar: "Through third degree relatives include parents, children, siblings, grandparents, grandchildren, aunts, uncles, nieces, nephews, half sibilings, first cousins, and great aunts or uncles",
      question: "Does the patient have any family history of cancer through a third degree relative?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ],
    },
    {
      ID: "20",
      track: "Personal History: Prostate Cancer",
      isMultiSelect: true,
      question: "Which cancer(s) was the third degree relatives diagnosed with?",
      choices: [
        {
          value: "Ovarian Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Pancreatic Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Male Breast Cancer",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Female Breast Cancer",
          nextQuestion: 21
        },
        {
          value: "Prostate Cancer",
          nnextQuestion: 24
        },
        {
          value: "Colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intenstine cancer",
          nextQuestion: 25
        },
        {
          value: "Other Cancer",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "21",
      track: "Personal History: Prostate Cancer",
      isMultiSelect: false,
      question: "How many breast cancer diagnoses were there through a third degree relative of the patient?",
      choices: [
        {
          value: "One",
          nextQuestion: 22
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "22",
      track: "Personal History: Prostate Cancer",
      isMultiSelect: false,
      question: "At what age was the third degree relative diagnosed?",
      choices: [
        {
          value: "51 or older",
          nextQuestion: 23
        },
        {
          value: "Under the age of 51",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "23",
      track: "Personal History: Prostate Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "24",
      track: "Personal History: Prostate Cancer",
      isMultiSelect: false,
      question: "How many of the patient's third degree relatives were diagnosed with prostate cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "25",
      track: "Personal History: Prostate Cancer",
      isMultiSelect: false,
      question: "Were three or more of the patient's relatives diagnosed with colon, endometrial, gastric, upper tract urothelial, glioblastoma, biliary track, or small intestinal cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 26
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "26",
      track: "Personal History: Prostate Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "27",
      track: "Personal History: Renal Cancer",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with renal cancer?",
      choices: [
        {
          value: "47 or older",
          nextQuestion: 28
        },
        {
          value: "Under the age of 47",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "28",
      track: "Personal History: Renal Cancer",
      isMultiSelect: false,
      question: "Did your patient have bilateral multifocal tumors or a family history of renal cell carcinoma in one or more 1st or 2nd degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 29
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "29",
      track: "Personal History: Renal Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "30",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with colorectal cancer?",
      choices: [
        {
          value: "Age 50 or older",
          nextQuestion: 31
        },
        {
          value: "Age 49 or younger",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "31",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Is there a family history of cancer in first or second-degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 32
        },
        {
          value: "No",
          nextQuestion: 33
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "32",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Were any of the first or second-degree relatives diagnosed with cancer under the age of 50?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 34
        },
        {
          value: "No",
          nextQuestion: 35
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "33",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Does your patient have any third-degree relatives that were diagnosed with cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 65
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "34",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Was the cancer the patient's first or second-degree relative diagnosed with any of the following: colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "35",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Does the patient have two or more first or second degree relatives that were diagnosed with any of the following: Colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 36
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "36",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Does the patient have a first or second-degree relative that has been diagnosed with breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 37
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "36",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Was the patient's relative 50 or younger when they were diagnosed?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 37
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "37",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Did the patient's relative have multiple primary breast cancers?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 38
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "38",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Was the diagnosis triple negative?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 39
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "39",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Was it lobular breast cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "40",
      track: "Personal History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Does the patient have a personal or family history of diffuse gastric cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "41",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with endometrial cancer?",
      choices: [
        {
          value: "Age 50 or older",
          nextQuestion: 42
        },
        {
          value: "Age 49 or younger",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "42",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Is there a family history of cancer in first or second-degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 43
        },
        {
          value: "No",
          nextQuestion: 44
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "43",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Were any of the first or second-degree relatives diagnosed with cancer under the age of 50?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 45
        },
        {
          value: "No",
          nextQuestion: 46
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "44",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Does your patient have any third-degree relatives that were diagnosed with cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 65
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "45",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Was the cancer the patient's first or second-degree relative diagnosed with any of the following: colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "46",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Does the patient have two or more first or second degree relatives that were diagnosed with any of the following: Colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 47
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "47",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Does the patient have a first or second-degree relative that has been diagnosed with breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 48
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "48",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Was the patient's relative 50 or younger when they were diagnosed?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 49
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "49",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Did the patient's relative have multiple primary breast cancers?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "50",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Was the diagnosis triple negative?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 51
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "51",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Was it lobular breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 52
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "52",
      track: "Personal History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Does the patient have a personal or family history of diffuse gastric cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "53",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "At what age was your patient diagnosed with a lynch syndrome cancer?",
      choices: [
        {
          value: "Age 50 or older",
          nextQuestion: 54
        },
        {
          value: "Age 49 or younger",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "54",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Is there a family history of cancer in first or second-degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 55
        },
        {
          value: "No",
          nextQuestion: 56
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "55",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Were any of the first or second-degree relatives diagnosed with cancer under the age of 50?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 57
        },
        {
          value: "No",
          nextQuestion: 58
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "56",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Does your patient have any third-degree relatives that were diagnosed with cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 65
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "57",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Was the cancer the patient's first or second-degree relative diagnosed with any of the following: colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "58",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Does the patient have two or more first or second degree relatives that were diagnosed with any of the following: Colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 59
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "59",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Does the patient have a first or second-degree relative that has been diagnosed with breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 60
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "60",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Was the patient's relative 50 or younger when they were diagnosed?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 61
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "61",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Did the patient's relative have multiple primary breast cancers?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 62
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "62",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Was the diagnosis triple negative?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "63",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Was it lobular breast cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 64
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "64",
      track: "Personal History: Lynch Syndrome Cancer",
      isMultiSelect: false,
      question: "Does the patient have a personal or family history of diffuse gastric cancer?",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },

    /*
    * Family history schema
    */
    {
      ID: "65",
      track: "Family History",
      isMultiSelect: true,
      question: "What type of cancer(s) were your patient's relatives diagnosed with?",
      choices: [
        {
          value: "Ovarian Cancer",
          nextQuestion: 66
        },
        {
          value: "Pancreatic Cancer",
          nextQuestion: 68
        },
        {
          value: "Male Breast Cancer",
          nextQuestion: 71
        },
        {
          value: "Female Breast Cancer",
          nextQuestion: 72
        },
        {
          value: "Prostate Cancer",
          nextQuestion: 79
        },
        {
          value: "Renal Cancer",
          nextQuestion: 91
        },
        {
          value: "Colorectal Cancer",
          nextQuestion: 102
        },
        {
          value: "Endometrial Cancer",
          nextQuestion: 94
        },
        {
          value: "Other Cancer",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "66",
      track: "Family History: Ovarian Cancer",
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
          nextQuestion: 67
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "67",
      track: "Family History: Ovarian Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "68",
      track: "Family History: Pancreatic Cancer",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Second degree",
          nextQuestion: 69
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "69",
      track: "Family History: Pancreatic Cancer",
      isMultiSelect: false,
      question: "How many of the patient's second degree relatives were diagnosed with pancreatic cancer?",
      choices: [
        {
          value: "3 or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "Fewer than 3",
          nextQuestion: 70
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "70",
      track: "Family History: Pancreatic Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "71",
      track: "Family History: Male Breast Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "72",
      track: "Family History: Female Breast Cancer",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with female breast cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 73
        },
        {
          value: "Second degree",
          nextQuestion: 73
        },
        {
          value: "Third degree paternal",
          nextQuestion: 73
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "73",
      track: "Family History: Female Breast Cancer",
      isMultiSelect: false,
      question: "What age was the relative(s) diagnosed at?", 
      choices: [
        {
          value: "51 or older",
          nextQuestion: 74
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "74",
      track: "Family History: Female Breast Cancer",
      isMultiSelect: false,
      question: "Was it triple negative?", 
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
          nextQuestion: 75
        }
      ]
    },
    {
      ID: "75",
      track: "Family History: Female Breast Cancer",
      isMultiSelect: false,
      question: "Are there 2 or more diagnoses of breast or prostate cancer on the same side of the family?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 76
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "76",
      track: "Family History: Female Breast Cancer",
      isMultiSelect: false,
      question: "Are there other diagnoses of male breast, ovarian, or  pancreatic cancer on the same side of the family in a first or second degree relative?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 77
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "77",
      track: "Family History: Female Breast Cancer",
      isMultiSelect: false,
      question: "Does the patient have other relatives with colon, gastric, small bowel, biliary tract, brain, bladder/urothelial, small intestine, sebaceous adenomas, sebaceous carcinomas, and/or keratoacanthoma cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 78
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "78",
      track: "Family History: Female Breast Cancer",
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
          // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "79",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with prostate cancer?", 
      choices: [
        {
          value: "First degree",
          nextQuestion: 80
        },
        {
          value: "Second degree",
          nextQuestion: 84
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "80",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Was the prostate cancer high grade, cribiform, or metastatic?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 81
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "81",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Was anyone else in the patient's family diagnosed with cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: 82
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "82",
      track: "Family History: Prostate Cancer",
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
          nextQuestion: 83
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "83",
      track: "Family History: Prostate Cancer",
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
          // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "84",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with ovarian cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 85
        },
        {
          value: "I don't know",
          nextQuestion: 85
        }
      ]
    },
    {
      ID: "85",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with pancreatic cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 86
        },
        {
          value: "I don't know",
          nextQuestion: 86
        }
      ]
    },
    {
      ID: "86",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with male breast cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 87
        },
        {
          value: "I don't know",
          nextQuestion: 87
        }
      ]
    },
    {
      ID: "87",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with female breast cancer under the age of 51?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 88
        },
        {
          value: "I don't know",
          nextQuestion: 89
        }
      ]
    },
    {
      ID: "88",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Are there three diagnoses of breast cancer in the patient's second or third degree relatives?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 89
        },
        {
          value: "I don't know",
          nextQuestion: 89
        }
      ]
    },
    {
      ID: "89",
      track: "Family History: Prostate Cancer",
      isMultiSelect: false,
      question: "Does the patient have at least one close blood relative diagnosed with metastatic, high, or very high risk prostate cancer?", 
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 90
        },
        {
          value: "I don't know",
          nextQuestion: 90
        }
      ]
    },
    {
      ID: "90",
      track: "Family History: Prostate Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "91",
      track: "Family History: Renal Cancer",
      isMultiSelect: false,
      question: "How many renal cancer diagnoses are in the patient's family?", 
      choices: [
        {
          value: "One",
          nextQuestion: 92
        },
        {
          value: "Two or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "92",
      track: "Family History: Renal Cancer",
      isMultiSelect: false,
      question: "How old was the relative?", 
      choices: [
        {
          value: "47 or older",
          nextQuestion: 93
        },
        {
          value: "Under the age of 47",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "93",
      track: "Family History: Renal Cancer",
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
          // KEEP AS SPEAK_TO_GENETIC_COUNSELOR
          value: "I don't know",
          nextQuestion: Outcome.SPEAK_TO_GENETIC_COUNSELOR
        }
      ]
    },
    {
      ID: "94",
      track: "Family History: Endometrial Cancer",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: 48
        },
        {
          value: "Second degree",
          nextQuestion: 100
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "95",
      track: "Family History: Endometrial Cancer",
      isMultiSelect: false,
      question: "What age was the relative diagnosed at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: 96
        },
        {
          value: "Under the age of 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "96",
      track: "Family History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Was this relative diagnosed with another lynch syndrome cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 97
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "97",
      track: "Family History: Endometrial Cancer",
      isMultiSelect: false,
      question: "Were there other diagnoses of lynch syndrome cancers through one of the patient's second degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 98
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "98",
      track: "Family History: Endometrial Cancer",
      isMultiSelect: false,
      question: "How many diagnoses were there?", 
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 99
        },
        {
          value: "Three or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "99",
      track: "Family History: Endometrial Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "100",
      track: "Family History: Endometrial Cancer",
      isMultiSelect: false,
      question: "How many diagnoses have there been (including all Lynch)?", //reword
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 101
        },
        {
          value: "Three or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "101",
      track: "Family History: Endometrial Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "102",
      track: "Family History: Colorectal Cancer",
      isMultiSelect: false,
      question: "What is the patient's relation to the relative(s) diagnosed with cancer?",
      choices: [
        {
          value: "First degree",
          nextQuestion: 103
        },
        {
          value: "Second degree",
          nextQuestion: 108
        },
        {
          value: "Other",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "103",
      track: "Family History: Colorectal Cancer",
      isMultiSelect: false,
      question: "What age was the relative diagnosed at?",
      choices: [
        {
          value: "50 or older",
          nextQuestion: 104
        },
        {
          value: "Under the age of 50",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "104",
      track: "Family History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Was this relative diagnosed with another lynch syndrome cancer?",
      choices: [
        {
          value: "Yes",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "No",
          nextQuestion: 105
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "105",
      track: "Family History: Colorectal Cancer",
      isMultiSelect: false,
      question: "Were there other diagnoses of lynch syndrome cancers through one of the patient's second degree relatives?",
      choices: [
        {
          value: "Yes",
          nextQuestion: 106
        },
        {
          value: "No",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "106",
      track: "Family History: Colorectal Cancer",
      isMultiSelect: false,
      question: "How many diagnoses were there?", 
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 107
        },
        {
          value: "Three or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "107",
      track: "Family History: Colorectal Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "108",
      track: "Family History: Colorectal Cancer",
      isMultiSelect: false,
      question: "How many diagnoses have there been (including all Lynch)?", //reword
      choices: [
        {
          value: "One",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        },
        {
          value: "Two",
          nextQuestion: 109
        },
        {
          value: "Three or more",
          nextQuestion: Outcome.MEETS_CRITERIA
        },
        {
          value: "I don't know",
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
    {
      ID: "109",
      track: "Family History: Colorectal Cancer",
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
          nextQuestion: Outcome.DOES_NOT_MEET_CRITERIA
        }
      ]
    },
  ]
};
