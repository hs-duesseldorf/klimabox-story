export const getParallaxData = (clientHeight: number, clientWidth: number) => {
  return {
    carData: [
      {
        start: clientHeight,
        end: clientHeight * 3,
        properties: [
          {
            startValue: 0,
            endValue: clientWidth * 1,
            property: "translateX"
          }
        ]
      },
      {
        start: clientHeight * 3,
        end: clientHeight * 4,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: "opacity"
          }
        ]
      }
    ],
    humanData: [
      {
        start: clientHeight,
        end: clientHeight * 1.2,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity"
          }
        ]
      },
      {
        start: clientHeight * 3,
        end: clientHeight * 6,
        properties: [
          {
            startValue: 0,
            endValue: clientWidth * 1,
            property: "translateX"
          }
        ]
      },
      {
        start: clientHeight * 6,
        end: clientHeight * 7,
        properties: [
          {
            startValue: clientWidth * 1,
            endValue: -clientWidth,
            property: "translateX"
          }
        ]
      },
      {
        start: clientHeight * 11,
        end: clientHeight * 14,
        properties: [
          {
            startValue: -clientWidth,
            endValue: clientWidth * 0.1,
            property: "translateX"
          }
        ]
      }
    ],
    backgroundData: [{
      start: clientHeight * 6,
      end: clientHeight * 7,
      properties: [
        {
          startValue: 0,
          endValue: -clientWidth * 1.15,
          property: "translateX"
        }
      ]
    }],
    blackCut: [
      {
        start: clientHeight * 5,
        end: clientHeight * 7,
        properties: [
          {
            startValue: clientHeight,
            endValue: -clientHeight * 2,
            property: "translateY"
          }
        ]
      },
      {
        start: clientHeight * 9,
        end: clientHeight * 10,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: "opacity"
          }
        ]
      },
      {
        start: clientHeight * 10,
        end: clientHeight * 11,
        properties: [
          {
            startValue: -clientHeight * 2,
            endValue: -clientHeight * 20,
            property: "translateY"
          }
        ]
      }


    ],
    sceneData: [
      {
        start: clientHeight * 14,
        end: clientHeight * 16,
        properties: [
          {
            startValue: 1,
            endValue: 1.5,
            property: "scale"
          },
          {
            startValue: 0,
            endValue: -clientWidth * 0.6,
            property: "translateX"
          }
        ]
      },
      {
        start: clientHeight * 18,
        end: clientHeight * 19,
        properties: [
          {
            startValue: 1.5,
            endValue: 1,
            property: "scale"
          },
          {
            startValue: 1,
            endValue: 0,
            property: "opacity"
          }
        ]
      }
    ],
    blackCut2: [
      {
        start: clientHeight * 17,
        end: clientHeight * 19,
        properties: [
          {
            startValue: clientHeight,
            endValue: -clientHeight * 2,
            property: "translateY"
          }
        ]
      },
      {
        start: clientHeight * 22,
        end: clientHeight * 23,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: "opacity"
          }
        ]
      },
      {
        start: clientHeight * 23,
        end: clientHeight * 24,
        properties: [
          {
            startValue: -clientHeight * 2,
            endValue: -clientHeight * 20,
            property: "translateY"
          }
        ]
      }
    ],
    indoorSceneData: [
      {
        start: clientHeight * 22,
        end: clientHeight * 23,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity"
          }
        ]
      },
      //if smartphone path
      {
        start: clientHeight * 47,
        end: clientHeight * 48,
        properties: [
          {
            startValue: 1,
            endValue: 1.5,
            property: "zoom"
          }
        ]
      }],
    indoorRoom: [
      {
        start: clientHeight * 27,
        end: clientHeight * 28,
        properties: [
          {
            startValue: 0,
            endValue: 20,
            property: "blur"
          }
        ]
      },
      {
        start: clientHeight * 34,
        end: clientHeight * 35,
        properties: [
          {
            startValue: 20,
            endValue: 0,
            property: "blur"
          }
        ]
      }],
    massenvisualisierung: [{
      start: clientHeight * 30,
      end: clientHeight * 35,
      properties: [
        {
          startValue: 0,
          endValue: -clientHeight * 6,
          property: "translateY"
        }
      ]
    }],
    tecChoiceData: [
      {
        start: clientHeight * 36,
        end: clientHeight * 38,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity"
          }
        ]
      }, {
        start: clientHeight * 40,
        end: clientHeight * 42,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: "opacity"
          }
        ]
      }],
    smartPhoneData: [
      {
        start: clientHeight * 44,
        end: clientHeight * 46,
        properties: [
          {
            startValue: 0,
            endValue: clientWidth * 0.4,
            property: "translateX"
          },
          {
            startValue: 0,
            endValue: -clientHeight * 0.2,
            property: "translateY"
          }
        ]
      }, {
        start: clientHeight * 47,
        end: clientHeight * 50,
        properties: [
          {
            startValue: 0,
            endValue: 90,
            property: "rotateZ"
          },
          {
            startValue: 1,
            endValue: 2,
            property: "zoom"
          }
        ]
      },
      {
        start: clientHeight * 47,
        end: clientHeight * 47.5,
        properties: [
          {
            startValue: clientWidth * 0.4,
            endValue: clientWidth * 0.1,
            property: "translateX"
          },
          {
            startValue: -clientHeight * 0.2,
            endValue: -clientHeight * 0.3,
            property: "translateY"
          }
        ]
      },
      {
        start: clientHeight * 47.5,
        end: clientHeight * 48,
        properties: [
          {
            startValue: clientWidth * 0.1,
            endValue: clientWidth * 0.15,
            property: "translateX"
          },
          {
            startValue: -clientHeight * 0.3,
            endValue: -clientHeight * 0.7,
            property: "translateY"
          }
        ]
      },
      {
        start: clientHeight * 48,
        end: clientHeight * 50,
        properties: [
          {
            startValue: clientWidth * 0.15,
            endValue: clientWidth * 0.17,
            property: "translateX"
          },
          {
            startValue: -clientHeight * 0.7,
            endValue: -clientHeight * 1.2,
            property: "translateY"
          }
        ]
      }
    ],
    smartPhoneIconStart: [
      {
        start: clientHeight * 51,
        end: clientHeight * 52,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity"
          }
        ]
      }
    ],

  };
};