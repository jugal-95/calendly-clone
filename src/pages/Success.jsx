import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">🎉 Booking Successful!</h1>
      <p className="mt-4">Check your email for confirmation (mock).</p>
      <Link to="/" className="mt-6 inline-block text-blue-500 underline">
        Back to Events
      </Link>
    </div>
  );
};

export default Success;
