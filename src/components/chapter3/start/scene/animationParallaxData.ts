export const getParallaxData = () => {
  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
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
    humanData:[
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
          endValue: -clientWidth *1.15,
          property: "translateX"
        }
      ]
    }],
    blackCut:[
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
      },



    ]
  }
}