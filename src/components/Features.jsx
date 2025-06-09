import React from "react";

const features = [
  {
    title: "Interactive Map",
    description:
      "Visually navigate the campus, locate buildings, facilities, and points of interest with ease.",
    icon: (
      <svg
        className="h-10 w-10 text-accent-blue-dark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M3 12l2-2 4 4 8-8 4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Location Details",
    description:
      "Access comprehensive information for any campus location, including hours and events.",
    icon: (
      <svg
        className="h-10 w-10 text-accent-blue-dark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 110-16 8 8 0 010 16z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Routes",
    description:
      "Create and save custom routes based on your schedule, ensuring efficient travel across campus.",
    icon: (
      <svg
        className="h-10 w-10 text-accent-blue-dark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M9 5l7 7-7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Data",
    description:
      "View live crowd levels at facilities like cafeterias and libraries to avoid busy times.",
    icon: (
      <svg
        className="h-10 w-10 text-accent-blue-dark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M3 3v18h18M15 9l4 4-4 4M7 9l4 4-4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Your Campus, Simplified
        </h2>
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
                {f.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{f.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-accent-blue-dark hover:text-accent-blue-darkRed font-medium text-sm"
              >
                Learn More.....
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
