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
        BackgroundData: [
          {
            start: 3800,
            duration: 800,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX",
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
            end: 3000,
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
        BackgroundData: [
          {
            start: 3800,
            duration: 800,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX",
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
        BackgroundData: [
          {
            start: 3800,
            duration: 800,
            properties: [
              {
                startValue: clientWidth * 0.35,
                endValue: clientWidth * 1,
                property: "translateX",
              },
            ],
          },
        ],
      };
  }
};
