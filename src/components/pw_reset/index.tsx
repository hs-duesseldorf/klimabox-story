import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { updatePw } from "../../users_api/UserAPI";

export const PwResetForm: React.FC = () => {
  let history = useHistory();
  const [token, setToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPasswordConfirmation] = useState<string>("");

  const displayError = (errors: any) => {
    if (errors) {
      Object.keys(errors).forEach((error) => {
        if (error === 'other') {
          let field = document.querySelector(`#form`);
          let errorMessage = document.createElement("div");
          errorMessage.id = "error";
          errorMessage.className +=
            "flex font-medium tracking-wide text-red-500 text-xs mt-1 mb-2";
          errorMessage.innerHTML += errors[error];
          console.log(field)
          if (field) {
            field.prepend(errorMessage);
          }
          return;
        }
        let field = document.querySelector(`#${error}`);
        let errorMessage = document.createElement("div");
        errorMessage.id = "error";
        errorMessage.className +=
          "flex font-medium tracking-wide text-red-500 text-xs mt-1 mb-2";
        errorMessage.innerHTML += errors[error];
        if (field) {
          field.parentElement?.append(errorMessage);
        }
      });
    }
  };

  const removeErrors = () => {
    document.querySelectorAll("#error").forEach((e) => e.remove());
  };

  useEffect(() => {
    const token = history.location.search;
    if (token) {
      setToken(token.substring(7, token.length));
    } else {
      setToken("");
    }
  }, []);

  const handleUpdatePw = async () => {
    removeErrors();
    let data = {
      token: token,
      password: password,
      password_confirmation: password_confirmation,
    };
    try {
      await updatePw(data);
    } catch (error) {
      // @ts-ignore
      displayError(error.body.errors);
      return;
    }
    history.push("/signin");
  };

  return (
    <div className="center-box mt-40 w-full max-w-lg">
      <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input value={token} id="token" type="hidden" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Passwort
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Passwort"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Passwort bestätigen
          </label>
          <input
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password_confirmation"
            type="password"
            placeholder="Passwort bestätigen"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleUpdatePw()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Passwort ändern
          </button>
        </div>
      </form>
    </div>
  );
};
