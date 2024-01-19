import React, { useState } from "react";

const SignSignUpForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
  return (
    <form className="flex flex-col my-16 sm:my-28 mx-auto w-[80%] sm:h-[80%] sm:w-[35%] p-12 bg-black/60 absolute inset-0 rounded-md gap-6">
        <h1 className="text-3xl font-semibold text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col gap-6">
          {!isSignIn && (
            <input
              className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
              type="text"
              placeholder="Name"
              name="Name"
            />
          )}
          <input
            className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
            type="text"
            placeholder="Email or phone number"
            name="email"
          />
          <input
            className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
            type="password"
            placeholder="Password"
            name="email"
          />
        </div>
        <button className="bg-[#e50914] font-semibold p-4 w-full text-white rounded-md">
          {isSignIn?"Sign In":"Sign Up"}
        </button>
        {isSignIn &&<div className="flex items-center -mt-5 text-[#333] justify-between text-sm sm:flex-row flex-col">
          <div className="flex items-center gap-1">
            <input
              className="bg-gray-500"
              type="checkbox"
              name="checkbox"
              id=""
            />
            <span className="text-gray-300">Remember Me</span>
          </div>
          <span className="text-gray-300">Need Help?</span>
        </div>}
        {isSignIn ?
          <div className="flex gap-1 items-center flex-col sm:flex-row">
            <span className="text-gray-500">New to Netflix?</span>
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={() => setIsSignIn(false)}
            >
              Sign up now
            </span>
          </div>
         : 
          <div className="flex gap-1 items-center flex-col sm:flex-row">
            <span className="text-gray-500">Already a Netflix User?</span>
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              Sign in
            </span>
          </div>
        }
      </form>
  );
};

export default SignSignUpForm;
