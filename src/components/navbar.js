import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white font-bold text-xl">
          Fullstack Final Sprint
        </div>
        <div className="space-x-4">
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
