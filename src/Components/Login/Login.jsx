import React from 'react'
import { useState } from 'react';


function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", { email, password })};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome Back to Lion Safari
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Login
        </button>
      </form>

      {/* Forgot Password and Signup Links */}
      <div className="mt-6 text-center">
        <a
          href="/forgot-password"
          className="text-yellow-500 hover:text-yellow-600 block mb-2"
        >
          Forgot your password?
        </a>
        <a
          href="/signup"
          className="text-yellow-500 hover:text-yellow-600"
        >
          Create a new account
        </a>
      </div>
    </div>
  </div>
  )
};


export default Login