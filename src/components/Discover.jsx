import React from "react";
import Classroom from "../assets/classroom.png";
import CampusLife from "../assets/campuslife.png";

export default function Discover() {
  const cards = [
    {
      title: "Modern Learning Space",
      description:
        "Explore our state-of-the-art lecture halls and collaborative study zones designed for modern education.",
      imageUrl: Classroom,
    },
    {
      title: "Vibrant Campus Life",
      description:
        "Discover diverse student activities, events, and beautiful outdoor areas perfect for studying or relaxation.",
      imageUrl: CampusLife,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Discover CINEC Campus
        </h2>
        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="px-6 py-4">
                <h3 className="font-semibold text-xl text-gray-800">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
