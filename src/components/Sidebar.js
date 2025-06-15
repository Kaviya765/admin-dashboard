import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/table">Table</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/kanban">Kanban</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
