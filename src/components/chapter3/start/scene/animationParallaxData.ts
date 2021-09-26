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
      }
    ],
    backgroundData: [{
      start: clientHeight,
      end: clientHeight * 3,
      properties: [
        {
          startValue: 0,
          endValue: -clientWidth * 1,
          property: "translateX"
        }
      ]
    }],
  }
}