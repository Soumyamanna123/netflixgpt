import React, { useRef, useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignInForm, setIsSignInForm] = useState(true);

  // State to store validation or Firebase error messages
  const [errorMessage, setErrorMessage] = useState(null);

  // useRef hooks to access form input values
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Hook for navigation
  const navigate = useNavigate();

  // Toggles between Sign In and Sign Up form
  const togglesigninform = () => {
    setIsSignInForm(!isSignInForm);
  };

  // Handler for Sign In / Sign Up button click
  const handleButtonClick = (e) => {
    e.preventDefault();

    // Validate email and password
    const message = checkValidData(
      email.current.value,
      password.current.value,
   
    );
    setErrorMessage(message);

    // If validation fails, stop the process
    if (message) return;

    // If it's Sign Up form
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,

        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User successfully signed up
          const user = userCredential.user;
          // You can add navigation or success logic here

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.error("Profile update failed", error);
              setErrorMessage("Profile update failed: " + error.message);
            });
        })
        .catch((error) => {
          // Capture and display Firebase error
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ". " + errorMessage);
        });

      // If it's Sign In form
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User successfully signed in
          const user = userCredential.user;
          console.log(user);

          // Navigate to browse page on successful login
          navigate("/browse");
        })
        .catch((error) => {
          // Capture and display Firebase error
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ". " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      {/* Page Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute">
        <img className="object-cover" src={BG_URL} alt="background" />
      </div>

      {/* Login/Signup Form */}
      <form className="w-full md:w-5/12 xl:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        {/* Title */}
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name input (Only for Sign Up) */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        {/* Email input */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        {/* Password input */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        {/* Error Message Display */}
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        {/* Sign In / Sign Up Button */}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle Form Link */}
        <p
          className="mt-6 text-center text-sm text-gray-300 cursor-pointer hover:underline"
          onClick={togglesigninform}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
