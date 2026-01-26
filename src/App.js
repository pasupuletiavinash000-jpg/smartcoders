import React, { useState } from "react";
import Landing from "./pages/Landing";
import Course from "./pages/Course";
import Footer from "./components/Footer"; // Import the footer
import "./App.css";

function App() {
  const [page, setPage] = useState("landing");

  return (
    // We add 'flex-wrapper' style to ensure footer stays at bottom
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Main Content Area */}
      <div style={{ flex: 1 }}>
        {page === "landing" && (
          <Landing goToCourse={() => setPage("course")} />
        )}

        {page === "course" && (
          <Course goBack={() => setPage("landing")} />
        )}
      </div>

      {/* Footer is outside the pages, so it shows everywhere */}
      <Footer />
      
    </div>
  );
}

export default App;