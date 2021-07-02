import React from "react";



export class Background extends React.Component<{ img: string, alt:string }> {
  render() {
    let {
      img,
      alt
    } = this.props;

    return (
      <div className="fixed inset-0 pointer-events-none bg-gray-800">
        <img
          src={img}
          alt={alt}
          className="responsive-inset object-cover pointer-events-none select-none"
        />
      </div>
    );
  }
}
