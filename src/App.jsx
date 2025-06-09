import React from "react";
import HomePage from "./pages/Homepage";
import MapPage from "./pages/Mappage";
import RoutesPage from "./pages/Routespage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/dashboard";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}