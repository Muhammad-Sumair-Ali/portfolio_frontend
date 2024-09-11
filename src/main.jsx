import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import AdminDashboard from "./pages/AdminDashboard";
import "./index.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route
        path="*"
        element={
          <>
            <h2>Not Found Page</h2>
          </>
        }
      />
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </Router>
);
