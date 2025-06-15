import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import Calendar from "./pages/Calendar";
import Charts from "./pages/Charts";
import Kanban from "./pages/Kanban";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
