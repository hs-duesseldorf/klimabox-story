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
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 4,
            end: clientHeight * 5,
            properties: [
              {
                startValue: clientWidth * 0.1,
                endValue: -clientWidth * 0.7,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 5,
            end: clientHeight * 6,
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
          {
            start: 3800,
            duration: 800,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX",
              },
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
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
          {
            start: 3800,
            duration: 800,
            properties: [
              {
                startValue: clientWidth * 0.25,
                endValue: clientWidth * 2,
                property: "translateX",
              },
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
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
                endValue: -clientWidth * 0.8,
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
        ],
        massenvisualisierung: [
          {
            start: clientHeight * 7,
            end: clientHeight * 10,
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
            start: clientHeight * 7,
            end: clientHeight * 10,
            properties: [
              {
                startValue: 0,
                endValue: -clientHeight * 3,
                property: "translateY",
              },
            ],
          },
          {
            start: clientHeight * 7,
            end: clientHeight * 7.5,
            properties: [
              {
                startValue: 0,
                endValue: 100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 7.5,
            end: clientHeight * 8,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 8,
            end: clientHeight * 8.5,
            properties: [
              {
                startValue: -100,
                endValue: 100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 8.5,
            end: clientHeight * 9,
            properties: [
              {
                startValue: 100,
                endValue: -100,
                property: "translateX",
              },
            ],
          },
          {
            start: clientHeight * 9,
            end: clientHeight * 9.5,
            properties: [
              {
                startValue: -100,
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
        ]
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
