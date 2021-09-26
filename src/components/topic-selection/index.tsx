import React from "react";

import { TopicSelection } from "./interfaces/selection";

export const Selection: React.FC<{ topicSelection: TopicSelection }> = ({
                                                                          topicSelection
                                                                        }) => {
  return (
    <div style={topicSelection.containerStyle} className={`${topicSelection.containerClassName}`}>
      {topicSelection.selection.map((selection) => {
        return (
          <div
            key={selection.imagePath}
            onMouseLeave={selection.mouseLeaveEventHandler}
            onMouseEnter={selection.mouseEnterEventHandler}
            onClick={selection.mouseClickEventHandler}
          >
            {selection.link !== undefined ?
              <img src={selection.imagePath} alt="" style={selection.style} /> :
              <a href={selection.link}>
                <img src={selection.imagePath} alt="" style={selection.style} />
              </a>}
          </div>
        );
      })}
    </div>
  );
};
