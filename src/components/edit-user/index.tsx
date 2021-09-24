import React, { useEffect, useState } from "react";
import {  deleteUser, updateUser } from "../../users_api/UserAPI";
import { useHistory } from "react-router-dom";
import UserInterface, { Profile } from "../user-dashboard/profile";

export const EditUser: React.FC  <{ user: UserInterface}> = ({ user }) => {
  let history = useHistory();
  const [email, setEmail] = useState<string>('')


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

  useEffect(() => {
    setEmail(user.email);
  }, []);

  const handleChangeEmail = async (email: string) => {
    let data = {
      email: email
    }
    let response;
    let hasError = false;
    try {
      response = await updateUser(data ,parseInt(user.id, 10))
    } catch(error) {
      hasError = true;
      // @ts-ignore
      displayError(error.body.errors);
      return;
    }
    localStorage.setItem('user', JSON.stringify(response))
    history.push('/dashboard')
  }


  const handleDeleteProfile = async (id: string) => {
    let response;
    try {
      response = await deleteUser(parseInt(id, 10))
    } catch(error) {
      return;
    }
    history.push('/')
    localStorage.removeItem('user')
  }

  return (
    <div>
      <div className="center-box mt-40">
        <h1 className="text-3xl mb-10 border-b-2">
            Mein Profil
        </h1>
        <div className="center-box mt-10 w-full max-w-lg">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                E-Mail
              </label>
              <input value={email} onChange={ (e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-Mail" />
            </div>
            <div className="flex items-center justify-between">
              <button onClick={ () => handleChangeEmail(email) }className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Speichern
              </button>
            </div>
          </form>
        </div>
        <div>
          <button onClick={ () => handleDeleteProfile(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Profil Löschen
          </button>
        </div>
      </div>
    </div>
  );
};
