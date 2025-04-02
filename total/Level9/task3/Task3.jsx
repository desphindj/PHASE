import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Overview() {
  return <h2>Overview</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '10px', background: '#f0f0f0' }}>
        <h3>Dashboard</h3>
        <ul>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
}

function Task3() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Task3;
