import { Quizinterface } from "../../quiz-statistics/interface/quiz-interface";
import { Sequence } from "./interface/Chapter2Enum";

export const getQuiz = (sequence: Sequence): Quizinterface => {
  const carQuiz: Quizinterface[] = [
    {
      title:
        "Wie viel Tonnen CO2 ließen sich in Deutschland vermeiden, wenn ca. 30% der Kurzstrecken in den Innenstädten nicht mit dem Auto, sondern mit dem Fahrrad oder zu Fuß zurückgelegt werden?",
      choices: [
        {
          choice: "2,1 Tonnen",
          answere: false,
          revealed: false,
        },
        {
          choice: "4,2 Tonnen",
          answere: false,
          revealed: false,
        },
        {
          choice: "7,5 Tonnen",
          answere: true,
          revealed: false,
        },
        {
          choice: "9,2 Tonnen",
          answere: false,
          revealed: false,
        },
      ],
    },

    {
      title:
        "Was schätzt du? Wie viel der CO2-Emissionen sind im Personenverkehr auf PKWs und Krafträder zurückzuführen? ",
      choices: [
        {
          choice: "31%",
          answere: false,
          revealed: false,
        },
        {
          choice: "45%",
          answere: false,
          revealed: false,
        },
        {
          choice: "54%",
          answere: true,
          revealed: false,
        },
        {
          choice: "79%",
          answere: false,
          revealed: false,
        },
      ],
    },
  ];

  const bicycleQuiz: Quizinterface[] = [
    {
      title:
      "Wie viel Prozent der Deutschen fahren regelmäßig mit dem Fahrrad?" ,
      choices: [
        {
          choice: "20%",
          answere: false,
          revealed: false,
        },
        {
          choice: "44%",
          answere: true,
          revealed: false,
        },
        {
          choice: "67%",
          answere: true,
          revealed: false,
        },
        {
          choice: "75",
          answere: false,
          revealed: false,
        },
      ],
    },

    {
      title:
      "Welchen Fahrrad-Typ wollen die Deutschen zukünftig am ehesten kaufen?" ,
      choices: [
        {
          choice: "Stadtrad",
          answere: false,
          revealed: false,
        },
        {
          choice: "Rennrad",
          answere: false,
          revealed: false,
        },
        {
          choice: "Pedelec",
          answere: true,
          revealed: false,
        },
        {
          choice: "Mountainbike",
          answere: false,
          revealed: false,
        },
      ],
    },
  ];

  switch(sequence){
      case Sequence.Car: return carQuiz[Math.floor(Math.random() * carQuiz.length)];
      case Sequence.Bicycle: return bicycleQuiz[Math.floor(Math.random() * bicycleQuiz.length)];
      default : return carQuiz[Math.floor(Math.random() * carQuiz.length)];
  }
};
