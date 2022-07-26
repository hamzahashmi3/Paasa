import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./commonComponents/Footer";
import Home from "./components/Home/Home";
import CommunityVehicle from "./components/BookingVehicale/CommunityVehicle";
import AboutPaasa from "./components/About/AboutPaasa";
import AppBar from "./commonComponents/AppBar";
import AdminLogin from "./admin/screens/Login/Login";
import AdminDashboard from "./admin/screens/Dashboard/AdminDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
        <Route path="/AboutPaasa" element={<AboutPaasa />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard/:section" element={<AdminDashboard />} />
      </Routes>

    </>
  );
};

export default App;
