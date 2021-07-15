import { Sequence } from "./interface/Chapter2Enum";

export const getParallaxData = (
  sequence: Sequence,
  clientHeight: number,
  clientWidth: number
) => {
  switch (sequence) {
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
                property: "translateX",
              },
            ],
          },
        ],
        bicylceData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX",
              },
            ],
          },
        ],
        trainData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX",
              },
            ],
          },
        ],
        backgroundData: [
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 1,
                property: "translateX",
              },
            ],
          },
        ],
        scene: [
          {
            start: clientHeight * 5,
            end: clientHeight * 6,
            properties: [
              {
                startValue: 1,
                endValue: 1.7,
                property: "scale",
              },
            ],
          },
        ],
        street: [
          {
            start: clientHeight * 11,
            end: clientHeight * 13,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth,
                property: "translateX",
              },
            ],
          },
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 7,
            end: clientHeight * 8,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 2,
                property: "translateY",
              },
            ],
          },
        ],
        massenvisualisierungBackground: [
          {
            start: clientHeight * 7,
            end: clientHeight * 9,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY",
              },
            ],
          },
        ],
        parallaxDataIntroText: [
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ],
        parallaxDataModule: [
          {
            start: clientHeight * 0,
            end: clientHeight * 1,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ],
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
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: -clientWidth * 0.7,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 7,
            end: clientHeight * 8,
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale",
              },
              {
                startValue: -clientWidth * 0.7,
                endValue: -clientWidth * 1,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 13,
            end: clientHeight * 15,
            properties: [
              {
                startValue: 1.5,
                endValue: 1,
                property: "scale",
              },
              {
                startValue: -clientWidth * 1,
                endValue: clientWidth * 0.1,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 17,
            end: clientHeight * 19,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: -clientWidth * 0.6,
                property: "translateX",
              },
            ],
          },
        ],
        bicylceData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX",
              },
            ],
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX",
              },
            ],
          },
          // unsichtbar in Position bringen zum einfahren
          {
            start: clientHeight * 5,
            end: clientHeight * 6,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },

          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: clientWidth,
                endValue: -clientWidth * 0.2,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 10,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
          // Nach dem normalzoomen der Scene
          {
            start: clientHeight * 13,
            end: clientHeight * 15,
            properties: [
              {
                startValue: -clientWidth * 0.2,
                endValue: clientWidth * 0.35,
                property: "translateX",
              },
            ],
          },
          // Ende der Animation
          {
            start: clientHeight * 17,
            end: clientHeight * 19,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: -clientWidth,
                property: "translateX",
              },
            ],
          },
        ],
        trainData: [
          {
            start: clientHeight,
            end: clientHeight * 3,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX",
              },
            ],
          },
          // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: clientWidth * 2,
                property: "translateX",
              },
            ],
          },
          // unsichtbar in Position bringen zum einfahren
          {
            start: clientHeight * 5,
            end: clientHeight * 6,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },

          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: clientWidth * 2,
                endValue: -clientWidth,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 10,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
          // Nach dem normalzoomen der Scene
          {
            start: clientHeight * 13,
            end: clientHeight * 15,
            properties: [
              {
                startValue: -clientWidth,
                endValue: clientWidth * 0.2,
                property: "translateX",
              },
            ],
          },
          // Ende der Animation
          {
            start: clientHeight * 17,
            end: clientHeight * 19,
            properties: [
              {
                startValue: clientWidth * 0.2,
                endValue: -clientWidth,
                property: "translateX",
              },
            ],
          },
        ],
        backgroundData: [
          // Hintergrund wird zum erstenmal verschoben
          {
            start: clientHeight * 6,
            end: clientHeight * 7,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 0.8,
                property: "translateX",
              },
            ],
          },

          {
            start: clientHeight * 17,
            end: clientHeight * 19,
            properties: [
              {
                startValue: -clientWidth * 0.8,
                endValue: -clientWidth * 0.9,
                property: "translateX",
              },
            ],
          },
          // Hintergrund wird zum zweiten mal verschoben
          {
            start: clientHeight * 17,
            end: clientHeight * 19,
            properties: [
              {
                startValue: -clientWidth * 0.9,
                endValue: -clientWidth * 1.87,
                property: "translateX",
              },
            ],
          },
        ],
        scene: [
          // Graffity Zoom in
          {
            start: clientHeight * 7,
            end: clientHeight * 8,
            properties: [
              {
                startValue: 1,
                endValue: 2.2,
                property: "scale",
              },
              {
                startValue: 0,
                endValue: -clientWidth * 0.1,
                property: "translateX",
              },
            ],
          },
          // Graffity Zoom out
          {
            start: clientHeight * 13,
            end: clientHeight * 15,
            properties: [
              {
                startValue: 2.2,
                endValue: 1,
                property: "scale",
              },
              {
                startValue: -clientWidth * 0.1,
                endValue: 0,
                property: "translateX",
              },
            ],
          },
        ],
        street: [
          // alte Straße verschieben
          {
            start: clientHeight * 17,
            end: clientHeight * 19,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth,
                property: "translateX",
              },
            ],
          },
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 9,
            end: clientHeight * 13,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY",
              },
            ],
          },
        ],
        massenvisualisierungBackground: [
          {
            start: clientHeight * 9,
            end: clientHeight * 13,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY",
              },
            ],
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 9.5,
            end: clientHeight * 10,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 10,
            end: clientHeight * 10.5,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 11,
            end: clientHeight * 11.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 11.5,
            end: clientHeight * 12,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 12,
            end: clientHeight * 12.5,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX",
              },
            ],
          },
        ],
        parallaxDataIntroText: [
          {
            start: clientHeight * 11,
            end: clientHeight * 12,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ],
        parallaxDataModule: [
          {
            start: clientHeight * 0,
            end: clientHeight * 1,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
          {
            start: clientHeight * 11,
            end: clientHeight * 12,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ],
      };

    case Sequence.Bicycle: 
    return{
      bicylceData: [
        {
          start: clientHeight,
          end: clientHeight * 3,
          properties: [
            {
              startValue: 0,
              endValue: clientWidth * 0.35,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 6,
          end: clientHeight * 7,
          properties: [
            {
              startValue: clientWidth * 0.35,
              endValue: -clientWidth * 0.1,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 7,
          end: clientHeight * 8,
          properties: [
            {
              startValue: 1,
              endValue: 1.5,
              property: "scale",
            },
          ],
        },
        {
          start: clientHeight * 13,
          end: clientHeight * 15,
          properties: [
            {
              startValue: 1.5,
              endValue: 1,
              property: "scale",
            },
            {
              startValue: -clientWidth * 1,
              endValue: clientWidth * 0.35,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 17,
          end: clientHeight * 19,
          properties: [
            {
              startValue: clientWidth * 0.35,
              endValue: clientWidth * 0.05,
              property: "translateX",
            },
          ],
        },
      ],
      carData: [
        {
          start: clientHeight,
          end: clientHeight * 3,
          properties: [
            {
              startValue: 0,
              endValue: clientWidth * 0.1,
              property: "translateX",
            },
          ],
        },
        // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
        {
          start: clientHeight * 4,
          end: clientHeight * 5,
          properties: [
            {
              startValue: clientWidth * 0.1,
              endValue: clientWidth * 1,
              property: "translateX",
            },
          ],
        },
        // unsichtbar in Position bringen zum einfahren
        {
          start: clientHeight * 5,
          end: clientHeight * 6,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },
          ],
        },

        {
          start: clientHeight * 6,
          end: clientHeight * 7,
          properties: [
            {
              startValue: clientWidth,
              endValue: -clientWidth,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 9,
          end: clientHeight * 10,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
        // Nach dem normalzoomen der Scene
        {
          start: clientHeight * 13,
          end: clientHeight * 15,
          properties: [
            {
              startValue: -clientWidth,
              endValue: clientWidth * 0.1,
              property: "translateX",
            },
          ],
        },
        // Ende der Animation
        {
          start: clientHeight * 17,
          end: clientHeight * 19,
          properties: [
            {
              startValue: clientWidth * 0.1,
              endValue: -clientWidth,
              property: "translateX",
            },
          ],
        },
      ],
      trainData: [
        {
          start: clientHeight,
          end: clientHeight * 3,
          properties: [
            {
              startValue: 0,
              endValue: clientWidth * 0.25,
              property: "translateX",
            },
          ],
        },
        // Herausfahren nach der Frage "Wähle das Verkehrsmittel mit dem du am meisten untwegs bist"
        {
          start: clientHeight * 4,
          end: clientHeight * 5,
          properties: [
            {
              startValue: clientWidth * 0.25,
              endValue: clientWidth * 2,
              property: "translateX",
            },
          ],
        },
        // unsichtbar in Position bringen zum einfahren
        {
          start: clientHeight * 5,
          end: clientHeight * 6,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },
          ],
        },

        {
          start: clientHeight * 6,
          end: clientHeight * 7,
          properties: [
            {
              startValue: clientWidth * 2,
              endValue: -clientWidth,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 9,
          end: clientHeight * 10,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
        // Nach dem normalzoomen der Scene
        {
          start: clientHeight * 13,
          end: clientHeight * 15,
          properties: [
            {
              startValue: -clientWidth,
              endValue: clientWidth * 0.2,
              property: "translateX",
            },
          ],
        },
        // Ende der Animation
        {
          start: clientHeight * 17,
          end: clientHeight * 19,
          properties: [
            {
              startValue: clientWidth * 0.2,
              endValue: -clientWidth,
              property: "translateX",
            },
          ],
        },
      ],
      backgroundData: [
        // Hintergrund wird zum erstenmal verschoben
        {
          start: clientHeight * 6,
          end: clientHeight * 7,
          properties: [
            {
              startValue: 0,
              endValue: -clientWidth * 0.8,
              property: "translateX",
            },
          ],
        },

        {
          start: clientHeight * 17,
          end: clientHeight * 19,
          properties: [
            {
              startValue: -clientWidth * 0.8,
              endValue: -clientWidth * 0.9,
              property: "translateX",
            },
          ],
        },
        // Hintergrund wird zum zweiten mal verschoben
        {
          start: clientHeight * 17,
          end: clientHeight * 19,
          properties: [
            {
              startValue: -clientWidth * 0.9,
              endValue: -clientWidth * 1.87,
              property: "translateX",
            },
          ],
        },
      ],
      scene: [
        // Graffity Zoom in
        {
          start: clientHeight * 7,
          end: clientHeight * 8,
          properties: [
            {
              startValue: 1,
              endValue: 2.2,
              property: "scale",
            },
            {
              startValue: 0,
              endValue: -clientWidth * 0.1,
              property: "translateX",
            },
          ],
        },
        // Graffity Zoom out
        {
          start: clientHeight * 13,
          end: clientHeight * 15,
          properties: [
            {
              startValue: 2.2,
              endValue: 1,
              property: "scale",
            },
            {
              startValue: -clientWidth * 0.1,
              endValue: 0,
              property: "translateX",
            },
          ],
        },
      ],
      street: [
        // alte Straße verschieben
        {
          start: clientHeight * 17,
          end: clientHeight * 19,
          properties: [
            {
              startValue: 0,
              endValue: -clientWidth,
              property: "translateX",
            },
          ],
        },
      ],
      massenvisualisierung: [
        {
          start: clientHeight * 9,
          end: clientHeight * 13,
          properties: [
            {
              startValue: 0,
              endValue: -clientHeight * 3,
              property: "translateY",
            },
          ],
        },
      ],
      massenvisualisierungBackground: [
        {
          start: clientHeight * 9,
          end: clientHeight * 13,
          properties: [
            {
              startValue: 0,
              endValue: -clientHeight * 3,
              property: "translateY",
            },
          ],
        },
        {
          start: clientHeight * 9,
          end: clientHeight * 9.5,
          properties: [
            {
              startValue: 0,
              endValue: 100,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 9.5,
          end: clientHeight * 10,
          properties: [
            {
              startValue: 100,
              endValue: -100,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 10,
          end: clientHeight * 10.5,
          properties: [
            {
              startValue: -100,
              endValue: 100,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 11,
          end: clientHeight * 11.5,
          properties: [
            {
              startValue: 100,
              endValue: -100,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 11.5,
          end: clientHeight * 12,
          properties: [
            {
              startValue: -100,
              endValue: 100,
              property: "translateX",
            },
          ],
        },
        {
          start: clientHeight * 12,
          end: clientHeight * 12.5,
          properties: [
            {
              startValue: 100,
              endValue: -100,
              property: "translateX",
            },
          ],
        },
      ],
      parallaxDataIntroText: [
        {
          start: clientHeight * 11,
          end: clientHeight * 12,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },
          ],
        },
      ],
      parallaxDataModule: [
        {
          start: clientHeight * 0,
          end: clientHeight * 1,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },
          ],
        },
        {
          start: clientHeight * 11,
          end: clientHeight * 12,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
      ],
    };
    default:
      return {
        carData: [
          {
            start: clientHeight,
            end: 3000,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.1,
                property: "translateX",
              },
            ],
          },
        ],
        bicylceData: [
          {
            start: clientHeight,
            end: 3000,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.35,
                property: "translateX",
              },
            ],
          },
        ],
        trainData: [
          {
            start: clientHeight,
            end: 3000,
            properties: [
              {
                startValue: 0,
                endValue: clientWidth * 0.25,
                property: "translateX",
              },
            ],
          },
        ],
        backgroundData: [
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: 0,
                endValue: -clientWidth * 1,
                property: "translateX",
              },
            ],
          },
        ],
      };
  }
};
