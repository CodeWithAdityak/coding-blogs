// components/Auth.js
import React from "react";

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96 overflow-hidden">
        <div className="bg-teal-500 text-white text-center py-8">
          <h1 className="text-2xl font-bold">Hello, Friend!</h1>
          <p>Enter your personal details and start a journey with us</p>
          <a
            href="#register"
            className="mt-4 inline-block bg-transparent border border-white rounded-full py-2 px-4 text-sm uppercase"
          >
            Sign Up
          </a>
        </div>

        <div className="p-6">
          <div id="login" className="hidden">
            <h1 className="text-2xl font-bold text-teal-500">Sign In</h1>
            <p className="mt-4">or use your email account:</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="border rounded p-2 w-full mt-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded p-2 w-full mt-2"
              />
              <a href="#" className="text-sm text-blue-500">
                Forgot your password?
              </a>
              <button
                type="submit"
                className="mt-4 bg-teal-500 text-white rounded-full py-2 px-4"
              >
                Sign In
              </button>
            </form>
          </div>

          <div id="register" className="hidden">
            <h1 className="text-2xl font-bold text-teal-500">Create Account</h1>
            <p className="mt-4">or use your email for registration:</p>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="border rounded p-2 w-full mt-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded p-2 w-full mt-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded p-2 w-full mt-2"
              />
              <button
                type="submit"
                className="mt-4 bg-teal-500 text-white rounded-full py-2 px-4"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
