import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Illustration from '../assets/illustration.jpg';
import Logo from '../assets/logo.png';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any form validation/authentication here if needed
    navigate('/');  // Navigate to homepage on submit
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      {/* Right Side Form */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mt-20">
          {/* Logo + Heading */}
          <div className="flex flex-row items-center justify-center mb-16 gap-4">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl md:text-3xl font-bold text-blue-700 font-kanit leading-tight">
              CINEC <br /> Smart Navigator
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                placeholder="Enter your student ID"
                className="mt-1 h-[44px] w-full pl-4 rounded-lg border border-accent-gray-light shadow-sm focus:ring-accent-blue-light focus:border-accent-blue-light placeholder:text-[13px] md:placeholder:text-[14px]"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="mt-1 h-[44px] w-full pl-4 rounded-lg border border-accent-gray-light shadow-sm focus:ring-accent-blue-light focus:border-accent-blue-light placeholder:text-[13px] md:placeholder:text-[14px]"
              />
            </div>

            <button
              type="submit"
              className="w-full font-kanit text-sm md:text-lg py-2 mt-2 rounded-lg bg-primary text-white font-semibold hover:bg-accent-blue-dark transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-400 text-xs md:text-sm">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-row md:flex-col justify-center items-center gap-5 md:space-y-2">
            <button className="w-[40px] md:w-full h-[40px] md:h-auto px-0 md:px-4 py-2 rounded-lg border border-accent-gray-light flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2 hover:bg-accent-gray-light">
              <FcGoogle size={20} />
              <span className="hidden md:inline">Continue with Google</span>
            </button>

            <button className="w-[40px] md:w-full h-[40px] md:h-auto px-0 md:px-4 py-2 rounded-lg border border-accent-gray-light flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2 hover:bg-accent-gray-light">
              <FaGithub size={20} />
              <span className="hidden md:inline">Continue with GitHub</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-xs md:text-sm text-gray-500 mt-6">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">Register</Link>
          </p>
        </div>
      </div>
      {/* Left Side Illustration */}
      <div className="w-full md:w-3/4 h-[25vh] md:h-screen bg-blue-50 flex items-center justify-center">
        <img 
          src={Illustration} 
          alt="Illustration" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}
