import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { requestPwReset } from "../../users_api/UserAPI";

export const PwResetRequestForm: React.FC = () => {
  let history = useHistory();
  const [hasError, setHasError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleResetRequest = async () => {
    let data = {
      email: email,
    };
    let response;
    setHasError(false);
    try {
      response = await requestPwReset(data);
    } catch (error) {
      setHasError(true);
      return;
    }
    history.push("/email_confirm");
  };

  return (
    <div className="center-box mt-40 w-full max-w-lg">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {hasError && (
          <span className="flex font-medium tracking-wide text-red-500 text-xs mt-2 mb-2">
            Es konnte kein Account gefunden werden. Bitte überprüfe die Angaben
            zur E-Mail Adresse.
          </span>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-Mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="E-Mail"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleResetRequest()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Passwort zurücksetzen
          </button>
        </div>
      </form>
    </div>
  );
};
