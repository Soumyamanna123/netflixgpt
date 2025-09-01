import React from "react";
import { LOGO } from "../utils/constant";

const Header = () => {
  const handleSignOut = () => {};

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      <button onClick={handleSignOut} className="font-bold text-white ">
        (Sign Out)
      </button>
    </div>
  );
};

export default Header;
