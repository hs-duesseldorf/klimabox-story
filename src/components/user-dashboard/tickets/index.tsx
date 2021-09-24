import React, { useState } from "react";
import { Link } from "react-router-dom";


export interface CommentInterface {
  id: string,
  message: string,
  user_email: string,
  created_at: Date
}

export interface TicketInterface {
  id: string,
  message: string,
  user_id: string,
  comments: Array<CommentInterface>
}

export const Ticket: React.FC  <{ tickets: Array<TicketInterface>, handleSend: (message: string) => void }> = ({ tickets, handleSend  })  =>  {
  const [message, setMessage] = useState<string>("");

  return (
    <div>
      <h2 className="text-xl mb-4">
        Deine Anfragen/Fragen/Vorschläge
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 xl:gap-12 2xl:grid-cols-3">
        { tickets && tickets.map( (ticket) => {
          return (
            <Link to={`/ticket/${ticket.id}`}>
              <div className="mr-4 mb-4 rounded-t-3xl bg-bg-alt flex-1 h-full py-3 px-4">
                <h4 className="text-lg font-semibold mb-2">
                  {ticket.message}
                </h4>
                {ticket.comments.length === 0 ? (
                  <p className="text-sm">
                    Noch keine Kommentare vorhaden
                  </p>
                ) : (
                  <p className="text-sm">
                    {ticket.comments.length} Kommentare
                  </p>
                )}
              </div>
            </Link>
          )
        })}

        {tickets.length === 0 && (
          <p className="text-sm text-red-300">
            Du hast bisher keine Deine Anfragen/Fragen/Vorschläge erstellt.
          </p>
        )}
      </div>

      <form className="pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Anfrage/Frage/Vorschlag senden
          </label>
          <textarea value={message} onChange={ (e) => setMessage(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y" id="username" placeholder="Nachricht" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={ () => {handleSend(message); setMessage('') }}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Senden
          </button>
        </div>
      </form>
    </div>
  )

};
