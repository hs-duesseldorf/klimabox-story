import { Sequence } from "./interface/Chapter2Enum";
import { Chapter2Content, Stats } from "./interface/interface";

import BicycleTexture from "./asset/BicycleTexture.png";
import CarTexture from "./asset/CarTexture.png";
import TrainTexture from "./asset/TrainTexture.png";
import FernVerkehrTexture from "./asset/FernverkehrTexture.png";
import { QuizStatisticsInterface } from "../../quiz-statistics/interface/quiz-statistics-interface";
import styles from "./start.module.css";

export const getContentData = (sequence: Sequence): Chapter2Content => {
  const chapter2Content = {} as Chapter2Content;
  const carQuiz: QuizStatisticsInterface[] = [
    {
      title:
        "Wie viel Tonnen CO2 ließen sich in Deutschland vermeiden, wenn ca. 30% der Kurzstrecken in den Innenstädten nicht mit dem Auto, sondern mit dem Fahrrad oder zu Fuß zurückgelegt werden?",
      choices: [
        {
          choice: "2,1 Tonnen",
          answere: false,
          revealed: false
        },
        {
          choice: "4,2 Tonnen",
          answere: false,
          revealed: false
        },
        {
          choice: "7,5 Tonnen",
          answere: true,
          revealed: false
        },
        {
          choice: "9,2 Tonnen",
          answere: false,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    },

    {
      title:
        "Was schätzt du? Wie viel der CO2-Emissionen sind im Personenverkehr auf PKWs und Krafträder zurückzuführen? ",
      choices: [
        {
          choice: "31%",
          answere: false,
          revealed: false
        },
        {
          choice: "45%",
          answere: false,
          revealed: false
        },
        {
          choice: "54%",
          answere: true,
          revealed: false
        },
        {
          choice: "79%",
          answere: false,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    }
  ];
  const bicycleQuiz: QuizStatisticsInterface[] = [
    {
      title:
        "Wie viel Prozent der Deutschen fahren regelmäßig mit dem Fahrrad?",
      choices: [
        {
          choice: "20%",
          answere: false,
          revealed: false
        },
        {
          choice: "44%",
          answere: true,
          revealed: false
        },
        {
          choice: "67%",
          answere: true,
          revealed: false
        },
        {
          choice: "75",
          answere: false,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    },

    {
      title:
        "Welchen Fahrrad-Typ wollen die Deutschen zukünftig am ehesten kaufen?",
      choices: [
        {
          choice: "Stadtrad",
          answere: false,
          revealed: false
        },
        {
          choice: "Rennrad",
          answere: false,
          revealed: false
        },
        {
          choice: "Pedelec",
          answere: true,
          revealed: false
        },
        {
          choice: "Mountainbike",
          answere: false,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    }
  ];
  const trainQuiz: QuizStatisticsInterface[] = [
    {
      title:
        "Wie viel CO2 könnte jährlich eingespart werden, wenn gerade einmal 1% aller Autofahrer:innen ihren Wagen stehen lassen und stattdessen den öffentlichen Nahverkehr nutzen würden?",
      choices: [
        {
          choice: "500.000 Tonnen",
          answere: false,
          revealed: false
        },
        {
          choice: "700.000 Tonnen",
          answere: false,
          revealed: false
        },
        {
          choice: "850.000 Tonnen",
          answere: false,
          revealed: false
        },
        {
          choice: "1.000.000 Tonnen",
          answere: true,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    },

    {
      title:
        "Wie viel weniger Kohlendioxidemissionen verursachen öffentliche Verkehrsmittel wie Bus und Bahn durchschnittlich im Gegensatz zu einem PKW für die gleiche zurückgelegte Strecke? ",
      choices: [
        {
          choice: "Etwa 15%",
          answere: false,
          revealed: false
        },
        {
          choice: "etwa ein Drittel",
          answere: false,
          revealed: false
        },
        {
          choice: "etwa die Hälfte",
          answere: true,
          revealed: false
        },
        {
          choice: "etwa zwei Drittel",
          answere: false,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    },

    {
      title:
        "ÖPNV ist nicht nur klimaschonender, sondern auch günstiger als Autofahren. Wie viel Geld könnte man im Durchschnitt sparen, wenn man statt mit dem Auto mit öffentlichen Verkehrsmitteln zu Arbeit fahren würde? (Annahme: 220 Tage, 25 km pro Tag) ",
      choices: [
        {
          choice: "Rund 1.000€",
          answere: false,
          revealed: false
        },
        {
          choice: "rund 2000€",
          answere: false,
          revealed: false
        },
        {
          choice: "rund 4000€",
          answere: true,
          revealed: false
        },
        {
          choice: "rund 8000€ ",
          answere: false,
          revealed: false
        }
      ],
      quizContainerStyle: styles.quizStatisticsContainer,
      quizTitleStyle: styles.quizStatisticsTitle,
      quizQuestionmarkStyle: styles.quizStatisticsQuestionmark,
      quizStyle: styles.quizStatistics,
      quizQuestionStyle: styles.quizQuestion
    }
  ];

  const carStats: Stats = {
    tabs: [
      {
        title: "Kohlendioxidemissionen im Straßenverkehr",
        unit: "%",
        data: [
          {
            textureURL: "meatTexture",
            label: "Personen kraftwagen und Motorräder",
            value: 62,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "Schwerlastwagen und Busse",
            value: 26,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "Leichte Nutzfahrzeuge",
            value: 13,
            bgIsDark: true
          }
        ]
      }
    ]

  };

  const bicycleStats: Stats = {
    tabs: [
      {
        title: "Strecke 3KM",
        unit: "Minuten",
        data: [
          {
            textureURL: TrainTexture,
            label: "Bus / Bahn",
            value: 24,
            bgIsDark: true
          },
          {
            textureURL: CarTexture,
            label: "PKW",
            value: 20,
            bgIsDark: true
          },
          {
            textureURL: BicycleTexture,
            label: "Fahrrad",
            value: 12,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "3KM zu Fuß",
            value: 45,
            bgIsDark: false
          }
        ]
      }
    ]
  };

  const trainStats: Stats = {
    tabs: [
      {
        title: "Treibhausgasemissionen",
        unit: "g CO2-Äquivalente",
        data: [
          {
            textureURL: FernVerkehrTexture,
            label: "Fernverkehr",
            value: 29,
            bgIsDark: true
          },
          {
            textureURL: TrainTexture,
            label: "Straßenbahn",
            value: 55,
            bgIsDark: true
          },
          {
            textureURL: BicycleTexture,
            label: "PKW",
            value: 143,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "1KM Inland-Flug",
            value: 214,
            bgIsDark: false
          }
        ]
      }
    ]
  };

  switch (sequence) {
    default:
    case Sequence.Intro:
      chapter2Content.introTextData = {
        title: "Titel von Einführungstext",
        text:
          " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. \n" +
          "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
          "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        titleStyle: styles.adTitle,
        textStyle: styles.adText,
        containerStyle: styles.adContainer
      };
      chapter2Content.quizData = carQuiz[Math.floor(Math.random() * carQuiz.length)];
      chapter2Content.stats = carStats;
      break;
    case Sequence.Car:
      chapter2Content.introTextData = {
        title: "Du fährst häufig mit dem Auto? - Damit bist du nicht allein!",
        text:
          "Denn auch heute noch dominiert das Auto als Verkehrsmittel den deutschen Straßenverkehr. Die PKW-Dichte steigt jährlich weiter an, obwohl die öffentlichen Debatten um Klimaschutz und Verkehrswende täglich präsenter werden und der durchschnittliche PKW gerade mal eine Stunde pro Tag bewegt wird. \n \n" +
          "Es werden also immer noch zu viele Kurzstrecken in Deutschland mit dem Auto zurückgelegt - in einer Zahl ausgedrückt: Etwa 45%. Aber woran liegt das? \n" +
          "Die Antwort ist ganz einfach: Die deutsche Verkehrsinfrastruktur ist auf das Autofahren ausgelegt: Fahrradwege sind zu gering ausgebaut oder nicht gut befahrbar, es gibt nicht genügend Fahrradstellplätze und häufig ist bei Kurzstrecken die Anreise mit dem Auto günstiger als das ÖPNV-Ticket. \n \n" +
          "Damit wir uns bei der nächsten Gelegenheit also auf das Fahrrad schwingen oder das nächste U-Bahn-Ticket lösen, muss sich also nicht nur unsere Einstellung, sondern auch die Verkehrsinfrastruktur ändern! Aber was muss dafür passieren?\n \n" +
          "Deutschland investiert viel in den Bau neuer Straßen, aber diese erhöhen nicht die Mobilität, sondern nur den Verkehr. Es sollten also lieber vermehrt Alternativen zu Straßen geschaffen werden, wie beispielsweise Radschnellwege. Sie würden von einer Vielzahl an Fahrradfahrer:innen genutzt werden und ein vergleichbar schnelles Fahren von A nach B ermöglichen. Genauso könnte der Schienenverkehr, durch modernisierte Verkehrsmittel und vermehrte Abfahrtszeiten, attraktiver gestaltet werden und so die Kfz-Hauptrouten entlasten. \n \n" +
          "Aber nicht nur die Infrastruktur sollte sich ändern. Den größten Teil tragen natürlich wir selbst dem Klimaschutz bei. Ein großes Problem bei der Automobilität ist nämlich auch, dass durchschnittlich nur eine Person im Auto sitzt.  Hier kannst du selber etwas ändern: Bilde Fahrgemeinschaften mit deinen Arbeitskollegen oder nutze Angebote wie das Car-Sharing, um die Kfz-Routen zu entlasten!",

        titleStyle: styles.adTitle,
        textStyle: styles.adText,
        containerStyle: styles.adContainer
      };
      chapter2Content.quizData = carQuiz[Math.floor(Math.random() * carQuiz.length)];
      chapter2Content.stats = carStats;
      break;
    case Sequence.Bicycle:
      chapter2Content.introTextData = {
        title: "Fahr-flixt gute Entscheidung!",
        text:
          "Von einem Bild wie in den Niederlanden, wo die Fahrradwege teilweise so breit sind wie die Straßen und wo sich das Fahrrad längst von einem bloßen Fortbewegungsmittel zu einem festen Bestandteil des alltäglichen Lebens entwickelt hat, sind wir in Deutschland noch ein bisschen entfernt. Aber auch hierzulande gewinnt der “Drahtesel” immer weiter an Beliebtheit ... und das aus gutem Grund! \n \n" +
          "Fahrrad fahren produziert im Gegensatz zum Auto keine klimaschädlichen Gase, ist gesundheitsfördernd, platzsparend, geräuscharm und günstig. Besonders auf kurzen Strecken von weniger als 10 km lohnt es sich weder ökologisch noch ökonomisch, das Auto zu nehmen, statt mit dem Fahrrad zu fahren. Mittelgroße Einkäufe lassen sich ganz einfach mit Fahrradkorb oder Lastenrad transportieren. Staus in Städten zur Rush-Hour könnten verhindert werden, indem innerstädtische Arbeitswege ohne Auto zurückgelegt werden. Außerdem benötigen Fahrradwege und Parkplätze deutlich weniger Platz, was der weiteren Versiegelung von Bodenflächen entgegenwirkt und damit der Natur und dem Klima etwas Gutes tut. \n \n" +
          "Wenn die Deutschen im Durchschnitt statt rund 300 km so wie die Niederländer rund 1.000 km im Jahr mit dem Fahrrad fahren, könnten wir bis zu 10 Millionen Tonnen CO2 einsparen. Das ist unfassbar viel, wenn man bedenkt, dass wir alle lediglich zwei Kilometer mehr am Tag mit dem Fahrrad statt mit dem Auto zurücklegen müssten, um dieses Ziel zu erreichen!  \n \n" +
          "Doch um das Fahrradfahren für mehr Menschen attraktiv zu machen, muss noch viel passieren. Nur rund 40% der Deutschen geben an, regelmäßig mit dem Fahrrad zu fahren. Ein möglicher Grund dafür ist vor allem die immer noch zu geringe Zahl an Fahrradwegen und Fahrradstellplätzen. An diesen und weiteren Punkten muss weitergearbeitet werden, um den Radverkehr in Zukunft weiter zu fördern.",
        titleStyle: styles.adTitle,
        textStyle: styles.adText,
        containerStyle: styles.adContainer
      };
      chapter2Content.quizData = bicycleQuiz[Math.floor(Math.random() * bicycleQuiz.length)];
      chapter2Content.stats = bicycleStats;
      break;
    case Sequence.Train:
      chapter2Content.introTextData = {
        title: "Vorbei am Stau mit ÖPNV! ",
        text:
          "Wer kennt es nicht? Man hastet eilig los, um die nächste Bahn zu bekommen und wartet dann doch am Bahnsteig, weil diese Verspätung hat. Man möchte im Bus gemütlich ein Buch lesen oder Musik hören und stattdessen steht man gedrängt zwischen Fremden und hat das Piepen der Bustür im Ohr.  \n \n" +
          "Das Fahren mit den Öffis ist manchmal nicht so, wie man es sich vorgestellt hat. Volle Busse, verspätete Bahnen, und Preise, sorgen dafür, dass Viele die Fahrt unattraktiv und unflexibel finden. Sie vergessen dabei aber häufig die Momente, in denen sie mit dem Auto im Stau standen, sich über die Fahrweise Anderer ausließen und dass der ÖPNV sie in den meisten Fällen sicher und entspannt von A nach B gebracht hat. Der ÖPNV ist eine tolle Alternative zum Individualverkehr!  \n \n " +
          "Diejenigen, die mit dem Bus oder der Bahn fahren, verursachen nämlich zwei Drittel weniger CO2 als PKW-Fahrer:innen und leisten damit einen entscheidenden Beitrag zum Klimaschutz. Deshalb ist es umso wichtiger, den öffentlichen Nahverkehr in Zukunft noch attraktiver zu gestalten. Dabei stellt sich allerdings zuerst die Frage: Wie kann man die Bürger:innen dazu ermutigen, ihr Auto häufiger stehen zu lassen?  \n \n " +
          "Mancherorts wird der Nahverkehr deshalb bereits kostenlos angeboten oder zumindest kostengünstig in Form eines Jahrestickets für nur 365€, wie es derzeit zum Beispiel in Wien zu erhalten ist. Aber wie realistisch sind solche Mobilitätskonzepte in Gegenden, in denen vielleicht noch nicht kräftig in den Ausbau und die Modernisierung des ÖPNVs investiert wurde? Ein kostenloses Modell würde zum Beispiel in Düsseldorf und im Ruhrgebiet einen Ausfall von jährlich rund 1,3 Milliarden Euro bedeuten. Flächendeckende Fahrten gratis oder für wenig Geld dürften demnach hier vorerst Wunschdenken bleiben. Deshalb sind Investitionen in Faktoren wie Pünktlichkeit und Taktung bei der Verkehrsmittelwahl wichtig, um Personen das Fahren mit Öffis schmackhaft zu machen. Hinsichtlich Klimaschutz sind und bleiben diese nämlich eine super Alternative zum Autoverkehr!  ",
        titleStyle: styles.adTitle,
        textStyle: styles.adText,
        containerStyle: styles.adContainer
      };
      chapter2Content.quizData = trainQuiz[Math.floor(Math.random() * trainQuiz.length)];
      chapter2Content.stats = trainStats;
      break;
  }
  return chapter2Content;
};

export const getStatsData = (sequence: Sequence) => {
  const bicycle: Stats = {
    tabs: [
      {
        title: "Strecke 3KM",
        unit: "Minuten",
        data: [
          {
            textureURL: TrainTexture,
            label: "Bus / Bahn",
            value: 24,
            bgIsDark: true
          },
          {
            textureURL: CarTexture,
            label: "PKW",
            value: 20,
            bgIsDark: true
          },
          {
            textureURL: BicycleTexture,
            label: "Fahrrad",
            value: 12,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "3KM zu Fuß",
            value: 45,
            bgIsDark: false
          }
        ]
      }
    ]
  };

  const train: Stats = {
    tabs: [
      {
        title: "Treibhausgasemissionen",
        unit: "g CO2-Äquivalente",
        data: [
          {
            textureURL: FernVerkehrTexture,
            label: "Fernverkehr",
            value: 29,
            bgIsDark: true
          },
          {
            textureURL: TrainTexture,
            label: "Straßenbahn",
            value: 55,
            bgIsDark: true
          },
          {
            textureURL: BicycleTexture,
            label: "PKW",
            value: 143,
            bgIsDark: true
          },
          {
            textureURL: "meatTexture",
            label: "1KM Inland-Flug",
            value: 214,
            bgIsDark: false
          }
        ]
      }
    ]
  };

  switch (sequence) {
    case Sequence.Car:
      return bicycle;
    case Sequence.Bicycle:
      return bicycle;
    case Sequence.Train:
      return train;
    default:
      return bicycle;
  }
};
