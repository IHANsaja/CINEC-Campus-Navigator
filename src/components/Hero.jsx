import React from "react";
import Campus from "../assets/campus.jpg";
import Class from "../assets/classroom.png";
import Clife from "../assets/campuslife.png";

export default function Hero() {
  return (
    <section className="relative mt-10">
      {/* Background Image */}
      <img
        src={Campus}
        alt="Campus Illustration"
        className="absolute left-1/2 top-0 w-3/4 h-full object-cover rounded-lg z-0 transform -translate-x-1/2 opacity-55"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-heroBg opacity-80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="mt-10 text-4xl sm:text-5xl font-extrabold text-primary-black">
          Navigate CINEC <br /> Campus with Ease
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-black">
          Your smart companion for seamless navigation, real-time insights, and
          personalized routes across the campus.
        </p>
        <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-md shadow hover:bg-primaryRed transition-colors">
          Explore the Map
        </button>
      </div>
    </section>
  );
}
