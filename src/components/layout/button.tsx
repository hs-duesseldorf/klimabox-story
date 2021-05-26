import React from "react";

export class Button extends React.Component<{ buttonOutline?: boolean, onDark: boolean | undefined, onClick?: () => void }> {
  static defaultProps = { primaryButton: false };

  render() {
    let {
      buttonOutline, onDark, onClick, children
    } = this.props;
    return (
      <>
        {!buttonOutline ? (<button onClick={onClick}
                                   className={` uppercase w-full px-6 focus:outline-none ${onDark ? "" : "text-black"}`}>{children}</button>
        ) : (<button onClick={onClick}
                     className={`uppercase w-full p-2 border-2  rounded-2xl focus:outline-none ${onDark ? "border-white hover:text-black hover:bg-white" : "text-black border-black hover:bg-black hover:text-white"}`}>{children}</button>
        )}

      </>);
  }
}
