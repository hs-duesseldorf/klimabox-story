import React, { useEffect, useState } from "react";
import {
  createComment,
  deleteComment,
  deleteTicket,
  getTicket,
} from "../../users_api/UserAPI";
import { Comment } from "./comment";

import { TicketInterface } from "../user-dashboard/tickets";
import { Link, useHistory } from "react-router-dom";

export const TicketShow: React.FC<{ id: string }> = ({ id }) => {
  let history = useHistory();
  const [hasError, setHasError] = useState<boolean>(false);
  const [ticket, setTicket] = useState<TicketInterface>();
  const [comment, setComment] = useState<string>("");

  const displayError = (errors: any) => {
    if (errors) {
      Object.keys(errors).forEach( (error) => {
        let field = document.querySelector(`#${error}`)
        let errorMessage = document.createElement("div");
        errorMessage.id = 'error';
        errorMessage.className += "flex font-medium tracking-wide text-red-500 text-xs mt-1 mb-2";
        errorMessage.innerHTML += errors[error]
        if (field) {
          field.parentElement?.append(errorMessage)
        }
      })
    }
  }

  const removeErrors = () => {
    document.querySelectorAll("#error").forEach((e) => e.remove());
  }

  const fetchTicket = async () => {
    let response;
    setHasError(false);
    try {
      response = await getTicket(parseInt(id, 10));
    } catch (error) {
      setHasError(true);
      return;
    }
    if (response) {
      // @ts-ignore
      setTicket(response);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  const handleSendComment = async (comment: string) => {
    removeErrors();
    let data = {
      message: comment,
    };
    try {
      await createComment(data, parseInt(id, 10));
    } catch (error) {
      // @ts-ignore
      displayError(error.body.errors);
    }
    setComment("");
    fetchTicket();
  };

  const handleDeleteTicket = async () => {
    setHasError(false);
    try {
      await deleteTicket(parseInt(id, 10));
    } catch (error) {
      setHasError(true);
      return;
    }
    history.push("/dashboard");
  };

  const handleDeleteComment = async (id: string) => {
    setHasError(false);
    try {
      await deleteComment(parseInt(id, 10));
    } catch (error) {
      setHasError(true);
      return;
    }
    fetchTicket();
  };

  if (ticket) {
    return (
      <div>
        <div className="center-box mt-40">
          <Link to="/dashboard" className="block mt-8 mb-8 text-em1">
            Zurück
          </Link>
          <h1 className="text-3xl mb-10 border-b-2">Ticket Übersicht</h1>
          {hasError && (
            <div className="center-box mt-40 w-full max-w-lg">
              <div className="flex font-medium tracking-wide text-red-500 text-xs mt-2 mb-2">
                Es ist etwas schief gelaufen.
              </div>
              <div className="text-grey-dark mt-6">
                <Link to="/dashboard">
                  <p className="text-sm text-em1">Zu deinem Bereich</p>
                </Link>
              </div>
            </div>
          )}
          <div className="mr-4 mb-4 rounded-t-3xl bg-bg-alt flex-1 h-full py-3 px-4">
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold mb-4">{ticket.message}</h4>
              <button
                onClick={() => handleDeleteTicket()}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Ticket Löschen
              </button>
            </div>
            <h5 className="font-semibold mb-2">Kommentare</h5>
            {ticket.comments.length === 0 ? (
              <p className="text-sm">Noch keine Kommentare vorhaden</p>
            ) : (
              <div>
                <p className="text-sm mb-4">
                  {ticket.comments.length} Kommentare
                </p>

                {ticket.comments.map((comment) => {
                  return (
                    <Comment
                      comment={comment}
                      handleDeleteComment={handleDeleteComment}
                    />
                  );
                })}
              </div>
            )}
            <div>
              <form className="pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Kommentar
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
                    id="message"
                    placeholder="Nachricht"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleSendComment(comment)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="center-box mt-40">
          <h1 className="text-3xl mb-6">Ticket Übersicht</h1>
          <p>Warte auf Daten</p>
        </div>
      </div>
    );
  }
};
