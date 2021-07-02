import React from "react";
import Plx from "react-plx";

export class BlackScreen extends React.Component<{ parallaxData?: [], style?: any }> {
  static defaultProps = {
    parallaxData: [{
      start: 2800, end: 2900, properties: [{
        startValue: 5,
        endValue: 10,
        property: "blur"
      }]
    }]
  };

  render() {
    let {
      parallaxData,
      style
    } = this.props;

    return (
      <Plx parallaxData={parallaxData} style={style}>
        <div className="bg-black w-full h-screen" />
      </Plx>);
  }
}
