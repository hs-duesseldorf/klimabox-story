import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default interface TopicInterface {
  id: string,
  name: string,
  description: string,
  liked: boolean
}

export const Topics: React.FC  <{ topics: Array<TopicInterface>, handleClick: (topic: TopicInterface) => void }> = ({ topics, handleClick })  =>  {

  return (
    <div>
      <h2 className="text-xl mb-4 mt-4">
        Themen die dich Interessieren
      </h2>

      { topics && topics.map( (topic) => {
        return (
          <button className={ topic.liked ? "outline-em1 text-em1 font-bold py-2 px-4 rounded mr-4 mb-4 focus:outline-em1" : "outline-black text-muted font-bold py-2 px-4 rounded mr-4 mb-4 focus:outline-black"} onClick={() => handleClick(topic)}>
            <div>
              {topic.name}
            </div>
          </button>
        )
      })}
    </div>
  )

};
