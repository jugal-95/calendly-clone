import React from "react";
import { Link } from "react-router-dom";
import events from "../data/events.js";

const Home = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Public Events</h1>
      <div className="grid gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-white shadow p-4 rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <Link to={`/event/${event.id}`} className="text-blue-500 underline mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
