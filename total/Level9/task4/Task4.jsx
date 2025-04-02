import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

let isAuthenticated = false;

function Login({ onLogin }) {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={onLogin}>Log In</button>
    </div>
  );
}

function Home() {
  return <h2>Home Page (Public)</h2>;
}

function Dashboard() {
  return <h2>Dashboard (Protected)</h2>;
}

function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function Task4() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated);

  const handleLogin = () => {
    isAuthenticated = true;
    setLoggedIn(true);
  };

  return (
    <Router>
      <nav className='top'>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Task4;
