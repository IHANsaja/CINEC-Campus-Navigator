import Building from "../assets/building.svg";
import CampusMap from "../assets/Map.jpg";
import { Suspense } from 'react';

const buildings = [
  {
    name: "FORE",
    type: "Building",
    description: "Engine and Simulator and liquid cargo simulator."
  },
  {
    name: "STORM",
    type: "Amenity",
    description: "Cafe/ Restaurant/ Bakery"
  },
  {
    name: "Main",
    type: "Office",
    description: "Reception/ Finance/ Auditorium"
  },
  {
    name: "SKY",
    type: "Building",
    description: "Class Room"
  }
];

const MapPage = () => {
  return (
    <div className="flex p-6 gap-6 h-[calc(100vh-270px)]">
      <div className="w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Explore Campus</h2>
        <p className="text-gray-600">Finding buildings, amenities and more.</p>
        <div className="flex gap-2">
          {["All", "Building", "Amenity", "Office", "Parking"].map((filter) => (
            <button key={filter} className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
              {filter}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto max-h-[400px] space-y-4">
          {buildings.map((b) => (
            <div key={b.name} className="flex items-center p-4 bg-white shadow rounded">
              <div className="w-1/3">
                <img src={Building} alt={b.name} className="rounded bg-primary-green p-2" />
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="font-bold text-lg">
                  {b.name} <span className="text-gray-500">({b.type})</span>
                </h3>
                <p className="text-gray-600 text-sm">{b.description}</p>
                <a href="#" className="text-blue-600 text-sm mt-1 inline-block">View Details.....</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <Suspense fallback={<div>Loading...</div>}>
            <img src={CampusMap} alt="Campus Map" className="w-full h-full object-contain rounded-xl" />
        </Suspense>
      </div>
    </div>
  );
};

export default MapPage;