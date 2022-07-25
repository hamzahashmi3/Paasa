import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AdminDashboard.css";
import { Route, Routes, useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Vahicles from "../../components/Vahicles/Vahicles";
const AdminDashboard = () => {
  const { section } = useParams();
  console.log(section);
  return (
    <div className="dashboard_screen">
      <div className="db_sidebar_section">
        <Sidebar />
      </div>
      <div className="db_main_section">
        {section === "categories" && <Categories />}
        {section === "vahicles" && <Vahicles />}
      </div>
    </div>
  );
};

export default AdminDashboard;
