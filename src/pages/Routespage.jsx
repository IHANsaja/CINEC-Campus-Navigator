import React from "react";
import { FaTrash } from "react-icons/fa";
import Map from "../assets/Map.jpg"
import { BsPlay } from "react-icons/bs";
import Routes from "../assets/routesiso.png"

const RoutesPage = () => {
  return (
    <div className="flex p-6 gap-6 h-full">
      <div className="w-1/2 flex flex-col gap-10 space-y-10">
        <div className="border border-accent-gray-light p-6 mt-6 rounded-lg bg-white shadow">
          <h2 className="text-2xl font-bold font-kanit">Plan Your Personalized Route</h2>
          <p className="text-[14px] text-accent-gray-medium">Enter your starting point, destination, and preferences to find the best path</p>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <div className="flex flex-col">
              <label htmlFor="start" className="text-sm text-gray-700 mb-1">Start</label>
              <input id="start" placeholder="Enter start location" className="border border-accent-gray-light p-2 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="destination" className="text-sm text-gray-700 mb-1">Destination</label>
              <input id="destination" placeholder="Enter destination" className="border border-accent-gray-light p-2 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mode" className="text-sm text-gray-700 mb-1">Mode of Travel</label>
              <input id="mode" placeholder="e.g. Walking, Cycling" className="border border-accent-gray-light p-2 rounded" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="preferences" className="text-sm text-gray-700 mb-1">Preferences</label>
              <input id="preferences" placeholder="e.g. Avoid stairs" className="border border-accent-gray-light p-2 rounded" />
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-4 mt-4">
            <button className="bg-accent-gray-light text-primary font-bold px-4 py-2 rounded cursor-pointer">Save Route</button>
            <button className="bg-primary text-primary-white font-bold px-4 py-2 rounded cursor-pointer">Get Directions</button>
          </div>
        </div>
        <div className="mt-8 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-white/40 rounded-xl flex items-center justify-center">
              <p className="text-accent-gray-dark font-bold text-lg mb-2">Map Preview</p>
            </div>
            <div className="h-64 w-full border border-accent-gray-light rounded-xl overflow-hidden shadow">
              <img
                src={Map}
                alt="Preview Route"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      <div className="w-1/2 space-y-4">
        <h2 className="text-xl font-semibold font-kanit">My Saved Routes</h2>
        {[
          { name: "Daily Commute to Campus", detail: "Main Gate to Zenith" },
          { name: "Library Path to study", detail: "Zenith to Library" },
          { name: "Cafe Run", detail: "Zenith to Cafe" },
          { name: "Lab Sessions", detail: "Zenith to Lab 01" }
        ].map((route) => (
          <div key={route.name} className="flex justify-between items-center bg-white p-4 shadow rounded">
            <div>
              <p className="font-semibold">{route.name}</p>
              <p className="text-sm text-gray-600">{route.detail}</p>
            </div>
            <div className="flex gap-8 text-xl">
              <button className="text-primary-green text-3xl cursor-pointer"><BsPlay /></button>
              <button className="text-primary-red cursor-pointer"><FaTrash /></button>
            </div>
          </div>
        ))}
        <div className="w-full flex items-center justify-center mt-8">
          <img src={Routes} alt="routes isometric" className="w-1/2 h-1/2" />
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;