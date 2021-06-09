import React, { useState } from "react";
import { createUser } from "../../users_api/UserAPI";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPasswordConfirmation] = useState<string>("");

  const handleSignUp = async () => {
    let data = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    let response;
    try {
      response = await createUser(data)
    } catch(error) {
      console.log(error)
    }
    console.log(response)
  }

  return (
    <div className="center-box mt-40 w-full max-w-lg">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-Mail
          </label>
          <input value={email} onChange={ (e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Passwort
          </label>
          <input value={password} onChange={ (e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Passwort" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Passwort bestätigen
          </label>
          <input value={password_confirmation} onChange={ (e) => setPasswordConfirmation(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Passwort bestätigen" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={ () => handleSignUp() }className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
