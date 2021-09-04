import { Sequence } from "./interface/Chapter2Enum";


export const getParallaxData = (
  sequence: Sequence,
  clientHeight: number,
  clientWidth: number
) => {
  switch (sequence) {
    default:
    case Sequence.Intro:
      return {
        carData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          }
        ],
        bicylceData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          }
        ],
        trainData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          }
        ],
        blackCutData: [
          {
            start: clientHeight * 8,
            end: clientHeight * 11,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ],
        backgroundData: [
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 0.8,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientWidth * 0.8,
                endValue: -clientWidth * 2,
                property: "translateX"
              }
            ]
          }
        ],
        scene: [
          // Graffity Zoom in
          {
            start: clientHeight * 13,
            end: clientHeight * 14,
            properties: [
              {
                startValue: 1,
                endValue: 3,
                property: "scale"
              },
              {
                startValue: 0,
                endValue: -clientWidth * 0.08,
                property: "translateX"
              },
              {
                startValue: 0,
                endValue: -clientHeight * 2,
                property: "translateY"
              }
            ]
          },

          // Graffity Zoom out
          {
            start: clientHeight * 21,
            end: clientHeight * 22,
            properties: [
              {
                startValue: 3,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: -clientWidth * 0.08,
                endValue: 0,
                property: "translateX"
              },
              {
                startValue: -clientHeight * 2,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierungBackground: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 15,
            end: clientHeight * 15.5,
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 15.5,
            end: clientHeight * 16,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 16,
            end: clientHeight * 16.5,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17,
            end: clientHeight * 17.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17.5,
            end: clientHeight * 18,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 18,
            end: clientHeight * 18.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          }
        ],
        secondVehicleChoice: [
          {
            start: clientHeight * 23,
            end: clientHeight * 24,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 0.45,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientHeight * 0.45,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        blackCutEndSceneData: [
          {
            start: clientHeight * 27,
            end: clientHeight * 30,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ]
      };

    case Sequence.Car:
      return {
        carData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 11,
            end: clientHeight * 12,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: -clientWidth * 0.5,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 0.5,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 25,
            end: clientHeight * 26,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: clientWidth * 0.5,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.5,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 31,
            end: clientHeight * 32,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: -clientWidth * 0.5,
                property: "translateX"
              }
            ]
          }

        ],
        bicylceData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 1,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          }
        ],
        trainData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          }
        ],
        blackCutData: [
          {
            start: clientHeight * 8,
            end: clientHeight * 11,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ],
        backgroundData: [
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 0.8,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientWidth * 0.8,
                endValue: -clientWidth * 2,
                property: "translateX"
              }
            ]
          }
        ],
        scene: [
          // Graffity Zoom in
          {
            start: clientHeight * 13,
            end: clientHeight * 14,
            properties: [
              {
                startValue: 1,
                endValue: 3,
                property: "scale"
              },
              {
                startValue: 0,
                endValue: -clientWidth * 0.08,
                property: "translateX"
              },
              {
                startValue: 0,
                endValue: -clientHeight * 2,
                property: "translateY"
              }
            ]
          },

          // Graffity Zoom out
          {
            start: clientHeight * 21,
            end: clientHeight * 22,
            properties: [
              {
                startValue: 3,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: -clientWidth * 0.08,
                endValue: 0,
                property: "translateX"
              },
              {
                startValue: -clientHeight * 2,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierungBackground: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 15,
            end: clientHeight * 15.5,
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 15.5,
            end: clientHeight * 16,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 16,
            end: clientHeight * 16.5,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17,
            end: clientHeight * 17.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17.5,
            end: clientHeight * 18,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 18,
            end: clientHeight * 18.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          }
        ],
        secondVehicleChoice: [
          {
            start: clientHeight * 23,
            end: clientHeight * 24,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 0.45,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientHeight * 0.45,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        blackCutEndSceneData: [
          {
            start: clientHeight * 27,
            end: clientHeight * 30,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ]
      };


    case Sequence.Bicycle:
      return {
        carData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },

          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          }

        ],
        bicylceData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 1,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 11,
            end: clientHeight * 12,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: clientWidth * 0.2,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 25,
            end: clientHeight * 26,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 31,
            end: clientHeight * 32,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.2,
                property: "translateX"
              }
            ]
          }
        ],
        trainData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          }
        ],
        blackCutData: [
          {
            start: clientHeight * 8,
            end: clientHeight * 11,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ],
        backgroundData: [
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 0.8,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientWidth * 0.8,
                endValue: -clientWidth * 2,
                property: "translateX"
              }
            ]
          }
        ],
        scene: [
          // Graffity Zoom in
          {
            start: clientHeight * 13,
            end: clientHeight * 14,
            properties: [
              {
                startValue: 1,
                endValue: 3,
                property: "scale"
              },
              {
                startValue: 0,
                endValue: -clientWidth * 0.08,
                property: "translateX"
              },
              {
                startValue: 0,
                endValue: -clientHeight * 2,
                property: "translateY"
              }
            ]
          },

          // Graffity Zoom out
          {
            start: clientHeight * 21,
            end: clientHeight * 22,
            properties: [
              {
                startValue: 3,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: -clientWidth * 0.08,
                endValue: 0,
                property: "translateX"
              },
              {
                startValue: -clientHeight * 2,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierungBackground: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 15,
            end: clientHeight * 15.5,
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 15.5,
            end: clientHeight * 16,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 16,
            end: clientHeight * 16.5,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17,
            end: clientHeight * 17.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17.5,
            end: clientHeight * 18,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 18,
            end: clientHeight * 18.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          }
        ],
        secondVehicleChoice: [
          {
            start: clientHeight * 23,
            end: clientHeight * 24,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 0.45,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientHeight * 0.45,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        blackCutEndSceneData: [
          {
            start: clientHeight * 27,
            end: clientHeight * 30,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ]
      };


    case Sequence.Train:
      return {
        carData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },

          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          }

        ],
        bicylceData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 1,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.35,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          }
        ],
        trainData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 11,
            end: clientHeight * 12,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.15,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 22,
            end: clientHeight * 23,
            properties: [
              {
                startValue: clientWidth * 0.15,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 25,
            end: clientHeight * 26,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: clientWidth * 2,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth * 1,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 31,
            end: clientHeight * 32,
            properties: [
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.25,
                property: "translateX"
              }
            ]
          }
        ],
        blackCutData: [
          {
            start: clientHeight * 8,
            end: clientHeight * 11,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ],
        backgroundData: [
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 0.8,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientWidth * 0.8,
                endValue: -clientWidth * 2,
                property: "translateX"
              }
            ]
          }
        ],
        scene: [
          // Graffity Zoom in
          {
            start: clientHeight * 13,
            end: clientHeight * 14,
            properties: [
              {
                startValue: 1,
                endValue: 3,
                property: "scale"
              },
              {
                startValue: 0,
                endValue: -clientWidth * 0.08,
                property: "translateX"
              },
              {
                startValue: 0,
                endValue: -clientHeight * 2,
                property: "translateY"
              }
            ]
          },

          // Graffity Zoom out
          {
            start: clientHeight * 21,
            end: clientHeight * 22,
            properties: [
              {
                startValue: 3,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: -clientWidth * 0.08,
                endValue: 0,
                property: "translateX"
              },
              {
                startValue: -clientHeight * 2,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          }
        ],
        massenvisualisierungBackground: [
          {
            start: clientHeight * 15,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 15,
            end: clientHeight * 15.5,
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 15.5,
            end: clientHeight * 16,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 16,
            end: clientHeight * 16.5,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17,
            end: clientHeight * 17.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 17.5,
            end: clientHeight * 18,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX"
              }
            ]
          },
          {
            start: clientHeight * 18,
            end: clientHeight * 18.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX"
              }
            ]
          }
        ],
        secondVehicleChoice: [
          {
            start: clientHeight * 23,
            end: clientHeight * 24,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 0.45,
                property: "translateY"
              }
            ]
          },
          {
            start: clientHeight * 28,
            end: clientHeight * 28.5,
            properties: [
              {
                startValue: -clientHeight * 0.45,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ],
        blackCutEndSceneData: [
          {
            start: clientHeight * 27,
            end: clientHeight * 30,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 4,
                property: "translateY"
              }
            ]
          }
        ]
      };
  }
};
