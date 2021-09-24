import React, { useEffect, useState } from "react";
import { CommentInterface } from "../../user-dashboard/tickets";

export const Comment: React.FC <{ comment: CommentInterface, handleDeleteComment: (id: string) => void}> = ({ comment, handleDeleteComment }) => {
  const date = new Date(comment.created_at)
  const loggedInUser = localStorage.getItem('user')
  let foundUser;
  if (loggedInUser) {
     foundUser = JSON.parse(loggedInUser);
  }
  return (
    <>
      <div  className="mt-4 mb-2 border-t-2 border-solid border-black pt-4 pl-2 pr-2 pb-4">
        <div className="flex justify-between">
          <div className="flex text-sm">
            <p>
              Von: {comment.user_email}
            </p>
            <p className="ml-4">
              Am: {date.toUTCString()}
            </p>
          </div>
          <div>
            { comment.user_email === foundUser.email && (
              <button onClick={ () => handleDeleteComment(comment.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Kommentar Löschen
              </button>
            )}
          </div>
        </div>
        <div className="mt-2 bg-white p-2">
          {comment.message}
        </div>
      </div>
    </>
  )
};
