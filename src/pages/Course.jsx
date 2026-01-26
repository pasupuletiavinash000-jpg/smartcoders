import React, { useState } from "react";
import Day1 from "../components/Day1";

function Course({ goBack }) {
  const [day, setDay] = useState("");

  return (
    <>
      <div className="navbar">
        <span>Smart Coders 🚀</span>
        <button className="btn btn-outline" onClick={goBack}>
          Home
        </button>
      </div>

      <div className="container">
        <h2>Course Dashboard</h2>
        <p>Type "1" below to see today's content.</p>

        <input
          type="number"
          placeholder="Enter Day Number (e.g. 1)"
          onChange={(e) => setDay(e.target.value)}
          autoFocus
        />

        {/* Display Day 1 if input is "1" */}
        {day === "1" && (
          <div className="card">
            <Day1 />
          </div>
        )}

        {/* Display message if input is valid but content not ready */}
        {day !== "" && day !== "1" && (
          <div className="card" style={{ textAlign: "center" }}>
            <h3>🚧 Content Locked</h3>
            <p>We are uploading notes for Day {day}. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Course;
