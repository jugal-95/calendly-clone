import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import events from "../data/events";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  const [form, setForm] = useState({ name: "", email: "", slot: "" });
  const navigate = useNavigate();

  const handleBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    const alreadyBooked = bookings.find(
      b => b.email === form.email && b.slot === form.slot
    );

    if (alreadyBooked) {
      alert("You’ve already booked this slot.");
      return;
    }

    bookings.push({ ...form, event: event.title });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    navigate("/success");
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.description}</p>

      <label className="block mb-2 font-semibold">Name:</label>
      <input
        className="border p-2 w-full mb-4"
        type="text"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <label className="block mb-2 font-semibold">Email:</label>
      <input
        className="border p-2 w-full mb-4"
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <label className="block mb-2 font-semibold">Select a slot:</label>
      <select
        className="border p-2 w-full mb-4"
        value={form.slot}
        onChange={e => setForm({ ...form, slot: e.target.value })}
      >
        <option value="">-- Select a slot --</option>
        {event.slots.map((slot, i) => (
          <option key={i} value={slot}>{new Date(slot).toLocaleString()}</option>
        ))}
      </select>

      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Slot
      </button>
    </div>
  );
};

export default EventDetails;
