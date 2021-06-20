import React from "react";

import { TopicSelection } from "./interfaces/selection";

export const Selection: React.FC<{ topicSelection: TopicSelection }> = ({
  topicSelection,
}) => {
  return (
    <div style={topicSelection.containerStyle}>
      {topicSelection.selection.map((selection) => {
        return (
          <div
            key={selection.imagePath}
            onMouseLeave={selection.mouseLeaveEventHandler}
            onMouseEnter={selection.mouseEnterEventHandler}
            onClick={selection.mouseClickEventHandler}
          >
            <a href={selection.link}>
              <img src={selection.imagePath} alt="" style={selection.style} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
